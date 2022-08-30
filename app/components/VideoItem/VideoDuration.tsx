import React from 'react';
import s from './VideoItem.module.scss'
import {VideoDurationProps} from "@/components/VideoItem/VideoItem.props";

const VideoDuration = ({duration, isBottom}:VideoDurationProps) => {
    return (
        <time className={isBottom ? s.bottom : ''}>
            {duration} мин.
        </time>
    );
};

export default VideoDuration;