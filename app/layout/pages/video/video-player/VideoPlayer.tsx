import cn from 'classnames'
import s from './VideoPlayer.module.scss'
import React from 'react';
import {VideoPlayerProps} from "./VideoPlayer.props";
import {usePlayer} from "@/hooks/usePlayer";
import {IoPause, IoPlay} from "react-icons/io5";
import {BsFullscreen} from "react-icons/bs";
import {getTimeFromMins, SecondsToNormalTime} from "@/utils/TimeTransfer";



const VideoPlayer = ({videoPath, duration, seconds}:VideoPlayerProps) => {
    const { videoRef, toggleVideo, status, fullScreen} = usePlayer()

    return (
        <div className={s.wrapper}>
            <video
            ref={videoRef}
            className={s.player}
            src={process.env.NEXT_PUBLIC_REACT_APP_URI + `${videoPath}#t=1`}
            preload="metadata"
            onClick={toggleVideo}
            />
            <div
            className={cn(s.controls, {
                [s.hide] : status.isPlaying
            })}
            >
                <button onClick={toggleVideo}>
                    {status.isPlaying ? <IoPause /> : <IoPlay />}
                </button>

                <div className={s.progressBarWrapper}>
                    <div
                    className={s.progressBar}
                    style={{
                        width: `${status.progress}`
                    }}
                    />
                </div>

                    <div className={s.timeControls}>
                    <p>
                        {SecondsToNormalTime(status.currentTime)}

                    </p>
                        <p> / </p>
                        <p>
                            {getTimeFromMins(duration, seconds)}
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