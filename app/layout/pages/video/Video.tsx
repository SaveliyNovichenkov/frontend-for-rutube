import React from 'react';
import {VideoProps} from "./Video.props";
import Layout from "../../Layout";
import s from './Video.module.scss'
import VideoPlayer from "./video-player/VideoPlayer";
import {useRouter} from "next/router";
import {IVideo} from "../../../interfaces/video.interface";
import { videoApi } from '@/store/api/video.api';
import Comments from "./comments/Comments";
import VideoDetail from "./video-detal/VideoDetail";
import { IUser } from 'interfaces/user.interface';

const Video = () => {

    const {query} = useRouter()

    const {data:video = {} as IVideo} = videoApi.useGetVideoByIdQuery(Number(query.id), {
        skip: !query?.id
    })

    return (
        <Layout title={video.name}>
            <div className={s.layout}>
                <VideoPlayer videoPath={video.videoPath} duration={video.duration} seconds={video.seconds} />
                <Comments videoId={video.id} comments={video.comment || []} />

            </div>
            <div>
                <VideoDetail video={video} channel={video.user || ({} as IUser)} />
                <div> </div>
            </div>
        </Layout>
    );
};

export default Video;