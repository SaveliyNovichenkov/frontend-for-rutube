import { videoApi } from '@/store/api/video.api';
import React from 'react';
import {VideoDetailProps} from "./VideoDetail.props";
import s from './VideoDetail.module.scss'
import ChannelInfoSmall from "@/components/ChannelInfoSmall/ChannelInfoSmall";
import SubscribeBtn from "@/components/SubscribeBtn/SubscribeBtn";
import {RiHeart2Fill, RiHeart3Fill} from "react-icons/ri";
import {formatNumber} from "@/utils/format-number";
import {declOfNum} from "@/utils/declensionFromNumber";
import { IoEyeSharp} from "react-icons/io5";
import {HiCalendar} from "react-icons/hi";
import dayjs from "dayjs";

const VideoDetail = ({channel, video}: VideoDetailProps) => {
    const [updateLike, {isLoading: IsLikeLoading}] = videoApi.useUpdateLikesMutation()
    const [updateDislike, {isLoading: IsDislikeLoading}] = videoApi.useUpdateDislikesMutation()

    return (
        <div className={s.detail}>
            <div>
                <ChannelInfoSmall channel={channel} />
                <h1>{video.name}</h1>
                <article className={s.article}>{video.description}</article>
            </div>
            <div>
                <div className={s.wrapper_button}>
                    {video.user?.id && (
                        <SubscribeBtn channelIdForSubscribe={video.user.id} />
                    )}
                    <button
                    className={s.likeButton}
                    disabled={IsLikeLoading}
                    onClick={() => updateLike(video.id)}
                    >
                        <RiHeart2Fill />
                        Like
                    </button>

                    <button
                    className={s.dislikeButton}
                    disabled={IsDislikeLoading}
                    onClick={() => updateDislike(video.id)}
                    >
                        <RiHeart3Fill />
                        Dislike
                    </button>

                    <div className={s.number_info}>
                        <div>
                            <IoEyeSharp />
                            <span>{formatNumber(video.views)} {declOfNum(video.views, ['просмотр', 'просмотра', 'просмотров'])}</span>
                        </div>
                        <div>
                            <RiHeart2Fill />
                            <span>{formatNumber(video.likes)} нравится</span>
                        </div>
                        <div>
                            <RiHeart3Fill />
                            <span>{formatNumber(video.dislikes)} не нравится</span>
                        </div>
                        <div>
                            <HiCalendar />
                            <span> {dayjs(new Date(video.createdAt)).fromNow()} </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VideoDetail;