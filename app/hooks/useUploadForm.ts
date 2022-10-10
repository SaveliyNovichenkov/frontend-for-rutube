import { videoApi } from '@/store/api/video.api'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {VideoDto} from "../interfaces/video.interface";
import {IMediaResponse} from "@/services/media/media.interface";

interface IUseUploadVideoForm {
    handleCloseModal: () => void
    videoId: number
}

export const useUploadVideoForm = ({videoId, handleCloseModal}: IUseUploadVideoForm) => {
    const {
        register,
        formState: { errors },
        control,
        handleSubmit,
        watch,
        setValue,
        reset
    } = useForm<VideoDto>({
        mode: 'onChange'
    })
    const [updateVideo, { isSuccess }] = videoApi.useUpdateVideoMutation()

    const onSubmit: SubmitHandler<VideoDto> = data => {
        updateVideo({ ...data, id: videoId })
            .unwrap()
            .then(() => {
                handleCloseModal()
                reset()
            })
    }

    const videoPath = watch('videoPath')
    const thumbnailPath = `${watch('thumbnailPath')?.slice(15)}`
    const [videoFileName, setVideoFileName] = useState('')

    console.log(videoPath)
    console.log(thumbnailPath)

    const handleUploadVideo = (value: IMediaResponse) => {
        setValue('videoPath', value.url.slice(15))
        setValue('name', value.name)
        setVideoFileName(value.name)
        console.log(value.url.slice(15))
    }
    const [IsChosen, setIsChosen] = useState(false)

    const [percent, setPercent] = useState(0)
    const [isUploaded, setIsUpload] = useState(false)
    const setProgressPercentage = (val: number) => {
        setPercent(val)
        if (val === 100) setIsUpload(true)
    }

    return {
        form: {
            register,
            errors,
            control,
            onSubmit,
            handleSubmit
        },
        media: {
            handleUploadVideo,
            videoFileName,
            thumbnailPath,
            videoPath
        },
        status: {
            isSuccess,
            IsChosen,
            isUploaded,
            percent,
            setProgressPercentage,
            setIsChosen

        }
    }
}

