import s from './VideoItem.module.scss'
import {LargeVideoItemProps} from "@/components/VideoItem/VideoItem.props";
import cn from 'classnames'
import Image from "next/image";
import VideoDuration from "@/components/VideoItem/VideoDuration";
import Link from 'next/link';
import UserAvatar from "@/components/UserAvatar/UserAvatar";
import VideoStatistics from "@/components/VideoItem/VideoStatistics";



export const LargeVideoItem = ({video}:LargeVideoItemProps) => {
    return (
        <div className={cn(s.video_item, s.large_item)}>
            <div className={s.thumbnail}>
                {video.thumbnailPath && (
                    <Image
                        src={process.env.NEXT_PUBLIC_REACT_APP_URI + video.thumbnailPath}
                        alt={video.name}
                        layout='fill'
                        className={s['bg_image']}
                        priority
                    />
                )}
                <VideoDuration isBottom={true} duration={video.duration} />
                <div className={s.information}>
                    <Link href={`/v/${video.id}`}>
                        <a className={s.name}>{video.name}</a>
                    </Link>
                    {video?.user?.avatarPath && <UserAvatar user={video.user}/>}
                    <div className={s.author}>{video.user?.name}</div>
                    <VideoStatistics views={video.views} createdAt={video.createdAt} />
                </div>
            </div>
        </div>
    )
}