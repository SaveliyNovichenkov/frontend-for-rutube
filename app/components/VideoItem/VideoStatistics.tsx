import React from 'react';
import s from './VideoItem.module.scss'
import {formatNumber} from "@/utils/format-number";
import {declOfNum} from "@/utils/declensionFromNumber";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { VideoStatisticsProps } from './VideoItem.props';
import cn from "classnames"



dayjs.extend(relativeTime)


const VideoStatistics = ({isSmall, views, createdAt}:VideoStatisticsProps) => {

    return (
        <div className={s.number_info}>
            <div className={s.views}>
                {formatNumber(views)}  {declOfNum(views, ['просмотр', 'просмотра', 'просмотров'])}
            </div>
            {!!createdAt && (
                <>
                    <div className={cn(s.date)}>
                        {dayjs(new Date(createdAt)).fromNow()}
                    </div>
                </>
            )}
        </div>
    );
};

export default VideoStatistics;