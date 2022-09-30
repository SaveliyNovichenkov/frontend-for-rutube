import {IVideo} from "../../interfaces/video.interface";


export interface VideoItemProps {
    item: IVideo
    removeHandler?: (videoId:number) => void
    isUpdateLink?: boolean
    isSmall?: boolean
}

export interface VideoStatisticsProps {
    isSmall?: boolean
    views: number
    createdAt?: string | undefined | Date
}

export interface VideoDurationProps {
    duration: number
    seconds: number
    isBottom?: boolean
}

export interface LargeVideoItemProps {
    video: IVideo
}