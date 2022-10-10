import {ILike} from "./video.interface";


export interface LikeInterface {
    likes: boolean,
    user: {
      id: number
    },
    video: {
    id: number
    },
    id: number,
    createdAt: string | Date,
    updatedAt: string | Date
}



export interface ILikeDto{
    likes: true,
    videoId: number
}