import cn from 'classnames'
import s from './VideoPlayer.module.scss'
import React from 'react';
import {VideoPlayerProps} from "./VideoPlayer.props";
import {usePlayer} from "@/hooks/usePlayer";
import {IoPause, IoPlay} from "react-icons/io5";
import {BsFullscreen} from "react-icons/bs";



const VideoPlayer = ({videoPath}:VideoPlayerProps) => {
    const { videoRef, toggleVideo, status, fullScreen} = usePlayer()

    return (
        <div className={s.wrapper}>
            <video
            ref={videoRef}
            className={s.player}
            src={process.env.NEXT_PUBLIC_REACT_APP_URI + `${videoPath}#t=8`}
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
                        {Math.floor(status.currentTime / 60) +
                        ":"+
                            ("0" + Math.floor(status.currentTime % 60)).slice(-2)
                        }
                    </p>
                        <p> / </p>
                    <p>
                            {Math.floor(status.currentTime / 60) +
                                ":"+
                                ("0" + Math.floor(status.videoTime % 60)).slice(-2)
                            }
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