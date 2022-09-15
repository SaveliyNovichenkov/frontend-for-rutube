import s from './Comments.module.scss'


import React from 'react';
import {CommentProps} from "./Comment.props";
import {useAuth} from "@/hooks/useAuth";
import CommentItem from "./commentItem/CommentItem";
import {AddCommentForm} from "./addComment/AddComment";

const Comments = ({comments, videoId}:CommentProps) => {

    const {user} = useAuth()

    return (
        <div className={s.comments}>
            <h2>Комментарии</h2>
            <div className={s.line}>
                {comments.length ? (
                    <div className={s.comment__item__wrapper}>
                        {comments.map( comment => (
                            <CommentItem comment={comment} key={comment.id} />
                        ))}
                    </div>
                ) : (
                    <p>Нет комментариев</p>
                )}

                <div className={s.bottomForm}>
                    {user && <AddCommentForm videoId={videoId} />}
                </div>
            </div>
        </div>
    );
};

export default Comments;

