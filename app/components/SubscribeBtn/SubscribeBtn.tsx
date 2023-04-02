import React from 'react';
import s from './SubscribeBtn.module.scss'
import {SubscribeBtnProps} from "./SubscribeBtn.props";
import cn from "classnames"
import {useAuth} from "@/hooks/useAuth";
import {api} from "@/store/api/api";

const SubscribeBtn = ({channelIdForSubscribe}:SubscribeBtnProps) => {
    const {user} = useAuth()
    const {data:profile} = api.useGetProfileQuery(null, {
        skip: !user
    })

    const [subscribe, {isLoading, data}] = api.useSubscribeToChannelMutation()

    if (user?.id === channelIdForSubscribe) return null

    const isSubscribe = profile?.subscriptions?.some(sub => sub.toChannel.id === channelIdForSubscribe) || !!data

    return (
        <button className={cn(s.button, {
            [s.subscribed] : isSubscribe
        })} onClick={() => subscribe(channelIdForSubscribe).unwrap()}>
            {isSubscribe ? 'ВЫ ПОДПИСАНЫ' : "ПОДПИСАТЬСЯ"}
        </button>
    );
};

export default SubscribeBtn;