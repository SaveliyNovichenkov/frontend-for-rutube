import React, {FC} from 'react';
import {IHome} from "./Home.interface";
import Layout from "../../Layout";
import Discover from "./discover/Discover";
import Catalog from "./catalog/Catalog";

const Home: FC = () => {
    return (
        <Layout title='YouTube v2.0'>
            <Discover />
            <Catalog />
        </Layout>
    );
};

export default Home;