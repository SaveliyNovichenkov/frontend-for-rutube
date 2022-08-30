import s from './Catalog.module.scss'
import React from 'react';
import {IVideo} from "../../../../interfaces/video.interface";
import {CatalogProps} from "./Catalog.props";
import Heading from "@/components/Heading/Heading";
import VideoItem from '@/components/VideoItem/VideoItem';



const Catalog = ({removeHandler, isUpdateLink, newVideos}:CatalogProps) => {
    return (
        <div className={s.recommended}>
            <div className={s.top_block}>
                <Heading title={removeHandler ? 'Мои видео' : 'Рекомендации'} />
            </div>

            <div className={s.catalog}>
                {newVideos.map(video => (
                    <VideoItem
                        item={video}
                        key={video.id}
                        removeHandler={removeHandler}
                        isUpdateLink={isUpdateLink}
                    />
                    )
                )}

            </div>
        </div>
    );
};

export default Catalog;