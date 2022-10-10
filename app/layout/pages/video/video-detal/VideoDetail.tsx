import { videoApi } from '@/store/api/video.api';
import React from 'react';
import {VideoDetailProps} from "./VideoDetail.props";
import s from './VideoDetail.module.scss'
import ChannelInfoSmall from "@/components/ChannelInfoSmall/ChannelInfoSmall";
import SubscribeBtn from "@/components/SubscribeBtn/SubscribeBtn";
import {formatNumber} from "@/utils/format-number";
import {declOfNum} from "@/utils/declensionFromNumber";
import {HiCalendar} from "react-icons/hi";
import dayjs from "dayjs";
import {svgImage} from "./img";
import LikeButton from "@/components/LikeButton/LikeButton";

const VideoDetail = ({channel, video}: VideoDetailProps) => {
    const [updateLike, {isLoading: IsLikeLoading}] = videoApi.useUpdateLikesMutation()


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
                    { /*   <button
                    className={s.rateButton}
                    disabled={IsLikeLoading}
                    onClick={() => updateLike(video.id)}
                    >
                        {svgImage.like}
                    </button>

                    <button
                        className={s.rateButton}
                    disabled={IsDislikeLoading}
                    onClick={() => updateDislike(video.id)}
                    >
                        {svgImage.dislike}
                    </button>*/}

                    <LikeButton videoIdForLike={video.id} ></LikeButton>

                    <div className={s.number_info}>
                        <div className={s.number_info_item}>
                            <span>
                                {svgImage.views}
                            </span>
                            <span>{formatNumber(video.views)} {declOfNum(video.views, ['просмотр', 'просмотра', 'просмотров'])}</span>
                        </div>
                        <div className={s.number_info_item}>
                            <span>
                                {svgImage.likeSmall}
                            </span>

                            <span>{formatNumber(video.likes)}</span>
                        </div>
                        <div className={s.number_info_item}>
                            <span>
                                {svgImage.dislikeSmall}
                            </span>

                            <span>{formatNumber(video.dislikes)}</span>
                        </div>
                        <div className={s.number_info_item}>
                            <span>
                                <HiCalendar />
                            </span>

                            <span>{dayjs(new Date(video.createdAt)).fromNow()}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VideoDetail;