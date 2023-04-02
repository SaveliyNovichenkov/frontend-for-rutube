import React, {useCallback, useEffect, useRef, useState} from "react";

interface IVideoElement extends HTMLVideoElement {
    msRequestFullscreen?: () => void
    mozRequestFullScreen?: () => void
    webkitRequestFullscreen?: () => void
}

export const usePlayer = () => {

    const videoRef = useRef<IVideoElement>(null)
    const progressRef = useRef<HTMLProgressElement>(null)
    const video = videoRef.current
    const progress = progressRef.current
    const duration = video?.duration



    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [videoTime, setVideoTime] = useState(0)

    function progressUpdate() {
        let current = video?.currentTime
        if(progress && current && duration && current) {
            progress.value = (100 * current)/ duration
            setCurrentTime((progress.value * duration) / 100)
        }
    }


    const onMouseOver = () => {
        if(video) {
            video.volume = 0
            video.currentTime += 5
            videoRef?.current?.play().then(() => setIsPlaying(prev => !prev))
        }
    }

    const onMouseLeave = () => {
        videoRef?.current?.pause();
        setIsPlaying(prev => !prev)
    }



    const videoRewind = () => {
        let progressWidth = progress?.offsetWidth;
        let progressCurrentPosition = event?.offsetX;
        if(progress?.value != undefined && progressWidth && video) {
            progress.value = 100*progressCurrentPosition/progressWidth
            video.pause();
            setCurrentTime(video.duration * (progressCurrentPosition/progressWidth))
            video.currentTime = video.duration * (progressCurrentPosition/progressWidth)
            video.play()
        }
    }

    useEffect(() => {
        const originalDuration = video?.duration
        if (originalDuration) setVideoTime(originalDuration)
    }, [video?.duration])


    const forward = () => {
        if (video && progress) video.currentTime += 15, progress.value = (100 * (video.currentTime += 15)) / video.duration, setCurrentTime(prev => prev += 15)
    }

    const revert = () => {
        if (video && progress) video.currentTime -= 15, progress.value = (100 * (video.currentTime -= 15)) / video.duration, setCurrentTime(prev => prev -= 15)
    }


    const fullScreen = () => {
        if (!video) return
        if (video.requestFullscreen) {
            video.requestFullscreen()
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen()
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen()
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen()
        }

    }



    const toggleVideo = useCallback(() => {
        if (!isPlaying) {
            video?.play()
            setIsPlaying(true)
        } else {
            video?.pause()
            setIsPlaying(false)
        }
    }, [isPlaying])

    const handleKeyDown = (e: KeyboardEvent) => {
        const target = e?.target as HTMLElement
        if (target?.tagName === "INPUT") {
            e.preventDefault()
            document.removeEventListener('keydown', handleKeyDown)
        }
        if(target?.tagName !== "INPUT") {
            e.preventDefault()
            document.addEventListener('keydown', handleKeyDown)
        switch (e.key) {
            case "ArrowRight":
                forward()
                break
            case "ArrowLeft":
                revert()
                break
            case " ":
                e.preventDefault()
                toggleVideo()
                break
            case "f":
                fullScreen()
                break
            case "а":
                fullScreen()
                break
            default:
                return
        }
    }
}

    useEffect(() => {
        video?.addEventListener('ontimeupdate', progressUpdate);
        return () => {
            video?.removeEventListener('ontimeupdate', progressUpdate);
        };
    }, [video?.onplaying])

    useEffect(() => {
        progressRef.current?.addEventListener('click', videoRewind);
        return () => {
            progressRef.current?.removeEventListener('click', videoRewind);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => { document.removeEventListener('keydown', handleKeyDown) }
    }, [toggleVideo])


    return {
        onMouseOver, onMouseLeave,
        videoRef,
        progressRef,
        toggleVideo,
        fullScreen,
        duration,
        videoRewind,
        progressUpdate,
        status: {
            isPlaying,
            currentTime,
            videoTime
        }
    }

}