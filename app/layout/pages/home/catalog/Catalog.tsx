import s from './Catalog.module.scss'
import React from 'react';
import {CatalogProps} from "./Catalog.props";
import Heading from "@/components/Heading/Heading";
import VideoItem from '@/components/VideoItem/VideoItem';



const Catalog = ({removeHandler, isUpdateLink, newVideos, headingTitle}:CatalogProps) => {

    const HeadingTitle = (headingTitle: number)=> {
        switch (headingTitle) {
            case 1 : return <Heading title="Мои видео" />
            case 2 : return <Heading title="Рекомендации" />
            case 3 : return <Heading title="Тренды" />
        }
    }

    if(headingTitle == 1) {
        return (
            <div className={s.recommended}>
                <div className={s.top_block}>
                    {headingTitle && HeadingTitle(headingTitle)}
                </div>

                <div className={s.catalog}>
                    {newVideos.map(video => (
                            <VideoItem
                                isMyVideo={true}
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
    } if (headingTitle == 2 || 3) {
        return (
            <div className={s.recommended}>
                <div className={s.top_block}>
                    {headingTitle && HeadingTitle(headingTitle)}
                </div>

                <div className={s.catalog}>
                    {newVideos.map(video => (
                            <VideoItem
                                isMyVideo={false}
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
    }

};

export default Catalog;