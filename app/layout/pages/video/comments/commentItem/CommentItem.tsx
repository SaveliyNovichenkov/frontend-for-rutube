import React from 'react';
import {CommentItemProps} from "./CommentItem.props";
import s from '../Comments.module.scss'
import ChannelInfoSmall from "@/components/ChannelInfoSmall/ChannelInfoSmall";

const CommentItem = ({comment}: CommentItemProps) => {
    return (
        <div className={s.commentItem} >
            <ChannelInfoSmall channel={comment.user} message={comment.message} />
        </div>
    );
};

export default CommentItem;
