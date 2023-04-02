import React from 'react';
import {IChannel} from "./channel.interface";
import Layout from "../../Layout";
import s from './Channel.module.scss'
import Catalog from "../home/catalog/Catalog";
import ChannelInfoSmall from "@/components/ChannelInfoSmall/ChannelInfoSmall";
import SubscribeBtn from "@/components/SubscribeBtn/SubscribeBtn";

const Channel = ({channel}:IChannel) => {

    return (
        <Layout title={channel.name}>
            <div className={s.wrapper}>
                <div className={s.under__description}>
                    <ChannelInfoSmall channel={channel} />
                    <SubscribeBtn channelIdForSubscribe={channel.id} />
                </div>
                <span>{channel.description}</span>
            </div>
            <Catalog avatarPath={channel.avatarPath} headingTitle={2} newVideos={channel.videos || []} />
        </Layout>
    );
};

export default Channel;