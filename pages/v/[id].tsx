import React from 'react';
import Video from "../../app/layout/pages/video/Video";
import {NextPage} from "next";
import {IChannel} from "../../app/layout/pages/channel/channel.interface";
import {IVideo} from "../../app/interfaces/video.interface";
import {VideoProps} from "../../app/layout/pages/video/Video.props";

const VideoPage:NextPage = () => {
    return (
        <div>
            <Video  />
        </div>
    );
};

    export default VideoPage;