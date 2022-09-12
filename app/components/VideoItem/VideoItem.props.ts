import {IVideo} from "../../interfaces/video.interface";


export interface VideoItemProps {
    item: IVideo
    removeHandler?: (videoId:number) => void
    isUpdateLink?: boolean
    isSmall?: boolean
}

export interface VideoStatisticsProps {
    views: number
    createdAt?: string
}

export interface VideoDurationProps {
    duration: number
    seconds: number
    isBottom?: boolean
}

export interface LargeVideoItemProps {
    video: IVideo
}