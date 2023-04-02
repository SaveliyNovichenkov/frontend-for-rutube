import s from './Comments.module.scss'
import React from 'react';
import {CommentProps} from "./Comment.props";
import {useAuth} from "@/hooks/useAuth";
import CommentItem from "./commentItem/CommentItem";
import {AddCommentForm} from "./addComment/AddComment";
import {declOfNum} from "@/utils/declensionFromNumber";

const Comments = ({comments, videoId}:CommentProps) => {

    const {user} = useAuth()

    return (
        <div className={s.wrapper}>
            <p className={s.title}>{comments.length} {declOfNum(comments.length, ['комментарий', 'комментария', 'комментариев'])}</p>
            <div className={s.bottomForm}>
                {user && <AddCommentForm videoId={videoId} />}
            </div>
            <div className={s.line}>
                {comments.length ? (
                    <div className={s.comment__item__wrapper}>
                        {comments.map( comment => (
                            <CommentItem comment={comment} key={comment.id} />
                        ))}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Comments;

