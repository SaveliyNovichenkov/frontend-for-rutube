import { Dialog, Transition } from '@headlessui/react'
import React, {Fragment} from 'react';
import {UploadInterface} from "./upload.interface";
import s from './UploadVideo.module.scss'
import UploadVideoForm from "./upload-video-form/UploadVideoForm";

const UploadModal = ({setIsOpen, isOpen, videoId}: UploadInterface) => {

    const handleCloseModal = () => setIsOpen(false)

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={handleCloseModal} className={s.modal}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    	transition-duration: 300ms;"
                    enterFrom="opacity: 0; transform: scale(0.95);"
                    enterTo="opacity: 1; transform: scale(1);"
                    leave="transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
                     transition-duration: 200ms;"
                    leaveFrom="opacity: 1; transform: scale(1);"
                    leaveTo="opacity: 0; transform: scale(0.95);"
                >
                <div className={s.overlay} aria-hidden="true"/>
                </Transition.Child>

                <div className={s.wrapper}>
                    <div>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    	transition-duration: 300ms;"
                            enterFrom="opacity: 0; transform: scale(0.95);"
                            enterTo="opacity: 1; transform: scale(1);"
                            leave="transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
                     transition-duration: 200ms;"
                            leaveFrom="opacity: 1; transform: scale(1);"
                            leaveTo="opacity: 0; transform: scale(0.95);"
                        >
                            <Dialog.Panel className={s.dialog_panel}>
                                <UploadVideoForm
                                    videoId={videoId}
                                    handleCloseModal={handleCloseModal}
                                />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default UploadModal;