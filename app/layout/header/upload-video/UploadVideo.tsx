import React, {useState} from 'react';
import {videoApi} from "@/store/api/video.api";
import s from './UploadVideo.module.scss'

const UploadVideo = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [videoId, setVideoId] = useState<number>(0)

    const [createVideo, {isLoading}] = videoApi.useCreateVideoMutation()

    return (
        <>
            <button
                className={s.button}
                disabled={isLoading}
                onClick={() => {
                    createVideo().unwrap().then(id => {
                        setVideoId(+id)
                        setIsOpen(true)
                    })
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 28 28" version="1.1">
                    <g id="surface1">
                        <path fill="#fff"   d="M 19.394531 11.78125 C 17.734375 9.785156 16.070312 7.785156 14.40625 5.789062 C 14.28125 5.640625 14.140625 5.585938 14 5.597656 C 13.859375 5.585938 13.71875 5.640625 13.59375 5.789062 C 11.929688 7.785156 10.265625 9.785156 8.605469 11.78125 C 8.296875 12.152344 8.472656 12.761719 9.007812 12.761719 L 11.105469 12.761719 L 11.105469 21.828125 C 11.105469 22.140625 11.363281 22.402344 11.675781 22.402344 L 16.324219 22.402344 C 16.636719 22.402344 16.894531 22.140625 16.894531 21.828125 L 16.894531 12.761719 L 18.992188 12.761719 C 19.527344 12.761719 19.703125 12.152344 19.394531 11.78125 Z M 19.394531 11.78125 "/>
                        <path fill="#6B6B7B" d="M 14 0 C 6.269531 0 0 6.269531 0 14 C 0 21.730469 6.269531 28 14 28 C 21.730469 28 28 21.730469 28 14 C 28 6.269531 21.730469 0 14 0 Z M 14 25.761719 C 7.507812 25.761719 2.238281 20.492188 2.238281 14 C 2.238281 7.507812 7.507812 2.238281 14 2.238281 C 20.492188 2.238281 25.761719 7.507812 25.761719 14 C 25.761719 20.492188 20.492188 25.761719 14 25.761719 Z M 14 25.761719 "/>
                    </g>
                </svg>
            </button>
        </>
    );
};

export default UploadVideo;