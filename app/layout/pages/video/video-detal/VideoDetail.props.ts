import {IVideo} from "../../../../interfaces/video.interface";
import {IUser} from "../../../../interfaces/user.interface";


export interface VideoDetailProps {
    video: IVideo
    channel: IUser
}