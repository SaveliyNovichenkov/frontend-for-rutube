import React, {FC} from 'react';
import {IHome} from "./Home.interface";
import Layout from "../../Layout";
import Discover from "./discover/Discover";
import Catalog from "./catalog/Catalog";

const Home = ({randomVideo, newVideos, topVideo}:IHome) => {
    return (
        <Layout title='RuTube'>
            <Discover topVideo={topVideo} randomVideo={randomVideo}/>
            <Catalog headingTitle={2} newVideos={newVideos}  />
        </Layout>
    );
};

export default Home;