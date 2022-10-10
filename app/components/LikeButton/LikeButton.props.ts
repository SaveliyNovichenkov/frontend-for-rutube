import {ILike, IVideo } from "interfaces/video.interface";
import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";


export interface LikeButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    videoIdForLike: number;
}