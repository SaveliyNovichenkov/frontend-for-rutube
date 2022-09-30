import s from './Discover.module.scss'
import {IVideo} from "../../../../interfaces/video.interface";
import {LargeVideoItem} from "@/components/VideoItem/LargeVideoItem";

interface IDiscover {
    topVideo: IVideo
    randomVideo: IVideo
    randomVideo2: IVideo

}

const Discover = ({topVideo, randomVideo, randomVideo2}: IDiscover) => {
    return (
        <div className={s.large_wrapper}>
            <div className={s.discover}>
                <div className={s.top_video}>
                    <LargeVideoItem video={topVideo} />
                </div>
                <div className={s.random_video}>
                    <LargeVideoItem video={randomVideo} />
                </div>
                <div className={s.random_video}>
                    <LargeVideoItem video={randomVideo2} />
                </div>
            </div>
        </div>
    );
};

export default Discover;