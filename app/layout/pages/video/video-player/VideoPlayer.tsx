import cn from 'classnames'
import s from './VideoPlayer.module.scss'
import React, {useEffect} from 'react';
import {VideoPlayerProps} from "./VideoPlayer.props";
import {usePlayer} from "@/hooks/usePlayer";
import {IoPause, IoPlay, IoVolumeHigh} from "react-icons/io5";
import {BsFullscreen} from "react-icons/bs";
import {getTimeFromMins, SecondsToNormalTime} from "@/utils/TimeTransfer";
import {current} from "immer";



const VideoPlayer = ({videoPath, seconds, hover = false}:VideoPlayerProps) => {
    const { videoRef, progressRef, videoRewind, toggleVideo, progressUpdate, status, fullScreen,} = usePlayer()


    return (
        <div className={s.wrapper}>
            <video
            ref={videoRef}
            className={s.video}
            src={process.env.NEXT_PUBLIC_REACT_APP_URI + `${videoPath}#t=1`}
            preload="auto|metadata|none"
            onClick={toggleVideo}
            autoPlay={true}
            onTimeUpdate={progressUpdate}
            />
            <div
            className={cn(s.controls, {
                [s.hide] : status.isPlaying
            })}
            >
                <button onClick={toggleVideo}>
                    {status.isPlaying ? <IoPause /> : <IoPlay />}
                </button>
                <button>
                    <IoVolumeHigh />
                </button>
                <div className={s.progressBarWrapper}>
                    <progress
                        ref={progressRef}
                        max={100}
                        value={0}
                        className={s.progressBar}
                        onClick={videoRewind}
                    />
                </div>


                    <div className={s.timeControls}>
                    <p >
                        {status.currentTime && SecondsToNormalTime(status.currentTime)}
                    </p>
                        <p>&nbsp; / &nbsp;</p>
                        <p>
                            {status.videoTime && SecondsToNormalTime(status.videoTime)}
                        </p>
                 </div>
                    <button onClick={fullScreen}>
                        <BsFullscreen className="font-size:10px, line-height: 12px" />
                    </button>
            </div>
        </div>
    );
};



export default VideoPlayer;