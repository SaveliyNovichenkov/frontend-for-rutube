import { api } from '@/store/api/api';
import React from 'react';
import {videoApi} from "@/store/api/video.api";
import Layout from "../../Layout";
import Loader from "@/components/Loader/Loader";
import Catalog from "../home/catalog/Catalog";

const Studio = () => {

    const {data, isLoading} = api.useGetProfileQuery(null)
    const [removeVideo] = videoApi.useDeleteVideoMutation()

    const videos = data?.videos

    return (
        <Layout title="Студия">
            <div>
                {isLoading ? (
                    <Loader />
                ) : videos?.length ? (
                    <Catalog headingTitle={1} newVideos={videos} removeHandler={removeVideo} />
                ) : (
                 <p>Видео не найдено</p>
                )}
            </div>
        </Layout>
    );
};

export default Studio;