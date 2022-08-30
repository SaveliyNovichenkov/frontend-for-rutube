import {IVideo} from "../../../../interfaces/video.interface";

export interface CatalogProps {
    newVideos: IVideo[]
    removeHandler?: (videoId: number) => void
    isUpdateLink?: boolean
}