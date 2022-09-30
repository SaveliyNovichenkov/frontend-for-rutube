import {useCallback, useEffect, useRef, useState} from "react";

interface IVideoElement extends HTMLVideoElement {
    msRequestFullscreen?: () => void
    mozRequestFullScreen?: () => void
    webkitRequestFullscreen?: () => void
}

export const usePlayer = () => {

    const videoRef = useRef<IVideoElement>(null)

    const video = videoRef.current

    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [videoTime, setVideoTime] = useState(0)
    const [progress, setProgress] = useState(0)



    useEffect(() => {
        const originalDuration = video?.duration
        if (originalDuration) setVideoTime(originalDuration)
    }, [video?.duration])


    const forward = () => {
        if (video) video.currentTime += 15
    }

    const revert = () => {
        if (video) video.currentTime -= 15
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

    useEffect(() => {
        if (!video) return

        const updateProgress = () => {
            setCurrentTime(video.currentTime)
            setProgress((video.currentTime / videoTime) * 100)
        }

        video.addEventListener("timeupdate", updateProgress)

        return () => {
            video.removeEventListener("timeupdate", updateProgress)
        }

    }, [videoTime])

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
        console.log(target?.tagName)
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

        document.addEventListener('keydown', handleKeyDown)
        return () => { document.removeEventListener('keydown', handleKeyDown) }
    }, [toggleVideo])


    return {
        videoRef,
        toggleVideo,
        fullScreen,
        status: {
            isPlaying,
            progress,
            currentTime,
            videoTime
        }
    }

}