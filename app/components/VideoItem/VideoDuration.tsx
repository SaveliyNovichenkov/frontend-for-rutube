import React from 'react';
import s from './VideoItem.module.scss'
import {VideoDurationProps} from "@/components/VideoItem/VideoItem.props";
import {getTimeFromMins} from "@/utils/TimeTransfer";

const VideoDuration = ({duration, seconds, isBottom}:VideoDurationProps) => {

    return (
        <time className={isBottom ? s.bottom : ''}>
            {getTimeFromMins(duration, seconds)}
        </time>
    );
};

export default VideoDuration;