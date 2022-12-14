import React from 'react';
import {GetStaticProps, NextPage} from "next";
import Trending from "../app/layout/pages/trending/Trending";
import {TrendingProps} from "../app/layout/pages/trending/Trending.props";
import {VideoService} from "@/services/video/video.service";

const TrendingPage: NextPage<TrendingProps> = ({topVideos}) => {
    return <Trending topVideos={topVideos} />
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const {data: topVideos} = await VideoService.getMostPopularVideo()

        return {
            props: {
                topVideos
            },
            revalidate: 60
        }
    } catch (e) {
        return {
            props: {
                topVideos: []
            }
        }
    }
}



export default TrendingPage;