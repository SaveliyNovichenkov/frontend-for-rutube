import React from 'react';
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {UserService} from "@/services/user/user.service";
import {IChannel} from "../../app/layout/pages/channel/channel.interface";
import Channel from "../../app/layout/pages/channel/Channel";
import {VideoService} from "@/services/video/video.service";
import {IVideo} from "../../app/interfaces/video.interface";
import {IHome} from "../../app/layout/pages/home/Home.interface";
import {IUser} from "../../app/interfaces/user.interface";

const ChannelPage:NextPage<IChannel> = ({channel}) => {
    return (
        <div>
            <Channel channel={channel} />
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
        try {
            const  {data: users} = await UserService.getAll()
            const paths = users.map(user => ({
                params: {
                    id: String(user.id)
                }
            }))

            return {
               paths, fallback: "blocking"
            }
        } catch (e) {
            return {
                paths: [], fallback: false
            }
        }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    try {
        const  {data: channel} = await UserService.getUser(Number(params?.id))

        return {
            props: {
                channel
            } as IChannel
        }
    } catch (e) {
        return {
            props: {
                channel: {} as IUser
            } as IChannel
        }
    }
}


    export default ChannelPage;