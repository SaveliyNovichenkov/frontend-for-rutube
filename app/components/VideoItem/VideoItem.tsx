import React, {useEffect, useState} from 'react';
import s from './VideoItem.module.scss'
import {VideoItemProps} from "@/components/VideoItem/VideoItem.props";
import { useRouter } from 'next/router';
import cn from 'classnames'
import {BiEdit, BiTrash} from "react-icons/bi";
import Image from "next/image";
import VideoDuration from "@/components/VideoItem/VideoDuration";
import Link from 'next/link';
import VideoStatistics from "@/components/VideoItem/VideoStatistics";
import UserAvatar from "@/components/UserAvatar/UserAvatar";
import {usePlayer} from "@/hooks/usePlayer";
import {SecondsToNormalTime} from "@/utils/TimeTransfer";

//src={process.env.NEXT_PUBLIC_REACT_APP_URI + `${item.thumbnailPath?.slice(16)}` || ''}

const VideoItem = ({isSmall, item, removeHandler, isUpdateLink, isMyVideo}: VideoItemProps) => {
    const { videoRef, duration, toggleVideo, status, fullScreen, onMouseOver, onMouseLeave} = usePlayer()
    const {push} = useRouter()
    useEffect(() => {
        videoRef?.current?.play()
        videoRef?.current?.pause()
    }, [])
    return (
        <div className={cn(s.video_item, {
            [s.small] : isSmall
        })}
        >
            {removeHandler && (
                <button
                className={s.button_1}
                onClick={() => removeHandler(item.id)}
                >
                    <BiTrash className='font-size:  18px ;
line-height: 28px; font-weight: 700; color: red; ' />
                </button>
            )}
            {isUpdateLink && (
                <button className={s.button_2}
                onClick={() => push(`/video/edit/${item.id}`)}
                >
                    <BiEdit className='font-size:  18px ;
line-height: 28px; color: #3B82F6FF; ' />
                </button>
            )}
            <Link href={`/v/${item.id}`}>
            <a className={s.thumbnail}>
                <div className={s.wrapper}
                     onMouseEnter={onMouseOver}
                     onMouseLeave={onMouseLeave}>
                    <div className={s.thumbnail}>
                        {isMyVideo && item.thumbnailPath && (
                            <Image
                                src={process.env.NEXT_PUBLIC_REACT_APP_URI + `${item.thumbnailPath?.slice(15)}` || ''}
                                alt={item.name}
                                width={180}
                                height={100}
                                layout='responsive'
                            />
                        )
                        }
                        {!isMyVideo &&
                            item.thumbnailPath && (
                                <Image
                                    src={process.env.NEXT_PUBLIC_REACT_APP_URI + item.thumbnailPath || ''}
                                    alt={item.name}
                                    width={220}
                                    height={140}
                                    layout='responsive'
                                />
                            )
                        }
                         <VideoDuration duration={status.videoTime}  />
                    </div>
                    <video
                        ref={videoRef}
                        className={s.video}
                        src={process.env.NEXT_PUBLIC_REACT_APP_URI + `${item.videoPath}#t=1`}
                        preload="metadata"
                        onClick={toggleVideo}
                    />
                </div>

            </a>
            </Link>

            <div className={s.information}>
                <span>
                    <Link href={`/v/${item.id}`}>
                     <a className={s.name}>{item.name}</a>
                     </Link>
                    {item?.user?.avatarPath && item?.user?.id && (
                        <Link href={`/c/${item?.user?.id}`}>
                            <a>
                        <span className={s.user_avatar}>
                            <UserAvatar user={item.user } />
                        </span>
                            </a>
                        </Link>
                    )}
                </span>
                        <span className={s.author}>{item.user?.name}</span>
                <VideoStatistics isSmall={isSmall} views={item.views} createdAt={!isSmall ? item.createdAt: undefined} />
            </div>

        </div>
    );
};

export default VideoItem;