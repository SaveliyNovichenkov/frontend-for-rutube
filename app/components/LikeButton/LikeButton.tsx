import React, {useEffect, useState} from 'react';
import {LikeButtonProps} from "@/components/LikeButton/LikeButton.props";
import s from './LikeButton.module.scss'
import {useAuth} from "@/hooks/useAuth";
import {videoApi} from "@/store/api/video.api";
import {svgImage} from "../../layout/pages/video/video-detal/img";
import cn from 'classnames'

const LikeButton = ({videoIdForLike,  ...props}: LikeButtonProps) => {

    const {user} = useAuth()
    const [like, setLike] = useState(1)
    const [dislike, setDislike] = useState(1)
    const [createLike, {isLoading}] = videoApi.useUpdateLikesMutation()
    const [createDislike] = videoApi.useUpdateDislikesMutation()
    const [deleteDislikes] = videoApi.useDeleteDislikesMutation()
    const [deleteLikes] = videoApi.useDeleteLikesMutation()


    const likeFunc = (like:number) => {
        console.log(like)
        if (like == 1) {
            setLike(state => ++state)
            createLike(videoIdForLike).unwrap
        }
        if (like == 2) {
            setLike(state => --state)
            deleteLikes(videoIdForLike).unwrap
        }
    }

    const dislikeFunc = (dislike:number) => {
        console.log(dislike)
        if (dislike == 1) {
            setDislike(state => ++state)
            createDislike(videoIdForLike).unwrap
        }
        if (dislike == 2) {
            setDislike(state => --state)
            deleteDislikes(videoIdForLike).unwrap
        }
    }

    return (
        <>
            <button onClick={() => likeFunc(like)}
                className={cn(s.likeButton, {
                    [s.activeLike] : like == 2,
                    [s.disabled] : like == 1
                })
                }
                    {...props}>
                {svgImage.like}
            </button>
            <button onClick={() => dislikeFunc(dislike)}
                className={cn(s.dislikeButton, {
                    [s.activeDislike] : dislike == 2,
                    [s.disabled] : dislike == 1,
                })}
                    {...props}>
                {svgImage.dislike}
            </button>
        </>

    );

}
export default LikeButton;