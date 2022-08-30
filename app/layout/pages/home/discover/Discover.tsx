import s from './Discover.module.scss'
import {IVideo} from "../../../../interfaces/video.interface";
import {LargeVideoItem} from "@/components/VideoItem/LargeVideoItem";

interface IDiscover {
    topVideo: IVideo
    randomVideo: IVideo

}

const Discover = ({topVideo, randomVideo}: IDiscover) => {
    return (
        <div>
            <div className={s.discover}>
                <div className={s.top_video}>
                    <LargeVideoItem video={topVideo} />
                </div>
                <div className={s.random_video}>
                    <LargeVideoItem video={randomVideo} />
                </div>
            </div>
        </div>
    );
};

export default Discover;