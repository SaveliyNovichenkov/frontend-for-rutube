import Textarea from "@/components/Textarea/Textarea";
import {Input} from "@/components/Input/Input";
import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import TogglePublic from './toggle-public/TogglePublic'
import s from '../UploadVideo.module.scss'
import { useUploadVideoForm } from '../../../../hooks/useUploadForm'
import {UploadFormProps} from "./UploadForm.props";
import VideoInformation from "./video-information/VideoInformation";
import UploadField from "@/components/UploadField/UploadField";
import { IMediaResponse } from "@/services/media/media.interface";
import FooterForm from "./footer-form/FooterForm";




const UploadVideoForm = ({videoId, handleCloseModal}: UploadFormProps) => {
    const {form, status, media} = useUploadVideoForm({videoId, handleCloseModal})
    return (
        <form
        onSubmit={form.handleSubmit(form.onSubmit)}
        className={s.form}
        >
            {status.isSuccess && <div
                className={s.successMessage}>
                Видео успешно загружено
            </div>}
            {status.IsChosen ? (
                <>
                <div className={s.placeholder}>
                    <Input
                        {...form.register("name", {
                            required: "Название обязательно"
                        })}
                        placeholder="Название"
                    />
                    <Textarea
                        {...form.register("description", {
                            required: "Описание обязательно"
                        })}
                        placeholder="Описание"
                    >
                    </Textarea>
                    <div className={s.controller_wrapper}>
                        <Controller
                            control={form.control}
                            name="thumbnailPath"
                            render={({field: {onChange}}) => (
                                <UploadField
                                    folder="avatar"
                                    onChange={(value: IMediaResponse) => {
                                        onChange(value.url)
                                    }}
                                />
                            )}
                        />
                    </div>
                    <Controller
                        control={form.control}
                        name='isPublic'
                        render={({ field: {onChange, value}}) => (
                            <TogglePublic
                                clickHandler={() => onChange(!value)}
                                isEnabled={!!value}
                            />
                        )}
                    />
                </div>
                    <div className={s.video_information_wrapper}>
                        <VideoInformation
                            fileName={media.videoFileName}
                            videoId={videoId}
                            isUploaded={status.isUploaded}
                            thumbnailPath={media.thumbnailPath}
                            />
                    </div>

                    <FooterForm
                        isUploaded={status.isUploaded}
                        percent={status.percent}
                    />
                </>
            ) : (
                <div className={s.uploadScreen}>
                    <Controller
                        control={form.control}
                        name="videoPath"
                        render={() => (
                            <UploadField
                                title={"Загрузи видео"}
                                folder={"avatar"}
                                onChange={media.handleUploadVideo}
                                setValue={status.setProgressPercentage}
                                setIsChosen={status.setIsChosen}
                            />
                        )}
                    />
                </div>
              )
            }
        </form>
    );
};

export default UploadVideoForm;