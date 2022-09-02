import React, {FC} from 'react';
import {IUser} from "../../interfaces/user.interface";
import s from './ChannelInfoSmall.module.scss'
import UserAvatar from "@/components/UserAvatar/UserAvatar";
import {formatNumber} from "@/utils/format-number";
import {declOfNum} from "@/utils/declensionFromNumber";

const ChannelInfoSmall: FC<{channel: IUser, message?: string}> = ({channel, message}) => {
    return (

        <div className={s.profile_info}>
            {channel.avatarPath && <UserAvatar user={channel} />}
            <div>
                <div className={s.name}>{channel.name}</div>
                <div className={s.subscriber_count}>
                    {message || formatNumber(channel.subscribersCount)} {declOfNum(channel.subscribersCount, ['подписчик', 'подписчика', 'подписчиков'])}
                </div>
            </div>
        </div>
    );
};

export default ChannelInfoSmall;