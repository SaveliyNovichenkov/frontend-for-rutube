import React from 'react';
import s from './VideoItem.module.scss'
import {VideoDurationProps} from "@/components/VideoItem/VideoItem.props";
import {getTimeFromMins, SecondsToNormalTime} from "@/utils/TimeTransfer";

const VideoDuration = ({duration, isBottom}:VideoDurationProps) => {

    return (
        <time className={isBottom ? s.bottom : ''}>
            {duration && SecondsToNormalTime(duration)}
        </time>
    );
};

export default VideoDuration;