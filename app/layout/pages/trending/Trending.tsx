import React from 'react';
import Layout from "../../Layout";
import {IVideo} from "../../../interfaces/video.interface";
import Catalog from "../home/catalog/Catalog";
import {TrendingProps} from "./Trending.props";

const Trending = ({topVideos}: TrendingProps) => {
    return (
        <Layout title='Тренды'>
            <Catalog headingTitle={3} newVideos={topVideos} />
        </Layout>
    );
};

export default Trending;