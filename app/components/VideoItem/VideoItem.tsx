import React from 'react';
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

//src={process.env.NEXT_PUBLIC_REACT_APP_URI + `${item.thumbnailPath?.slice(16)}` || ''}

const VideoItem = ({isSmall, item, removeHandler, isUpdateLink, isMyVideo}: VideoItemProps) => {

    const {push} = useRouter()

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
            <div className={s.thumbnail}>
                {isMyVideo &&
                    item.thumbnailPath && (
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
                            width={180}
                            height={100}
                            layout='responsive'
                        />
                    )
                }
                <VideoDuration duration={item.duration} seconds={item.seconds} />
                {item?.user?.avatarPath && (
                    <div className={s.user_avatar}>
                    <UserAvatar user={item.user} />
                    </div>
                )}
            </div>

            <div className={s.information}>
                {isSmall && <div className={s.author}>{item.user?.name}</div>}
                <Link href={`/v/${item.id}`}>
                    <a className={s.name}>{item.name}</a>
                </Link>
                <VideoStatistics isSmall={isSmall} views={item.views} createdAt={!isSmall ? item.createdAt: undefined}
            />
            </div>

        </div>
    );
};

export default VideoItem;