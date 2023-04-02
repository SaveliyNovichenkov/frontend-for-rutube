
import {SetStateAction, Dispatch, ChangeEvent} from "react";
import {useMutation} from "react-query";
import {MediaService} from "@/services/media/media.service";
import {errorCatch} from "@/utils/api.utils";

export interface useUploadFileProps {
    onChange: (...event: any) => void
    folder?: string
    setValue?: (val: number) => void
    setIsChosen?: Dispatch<SetStateAction<boolean>>
}


export const useUploadFile = ({onChange,
            folder,
            setValue,
            setIsChosen}:useUploadFileProps ) => {


    const { mutateAsync } = useMutation(
        'upload file',
        (data: FormData) => MediaService.upload(data, folder, setValue),
        {
            onSuccess: ({data}) => {
                onChange(data)
            },
            onError: (error: any) => {
                alert(
                errorCatch(error)
                )
            }
        }
    )

    const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files?.length) return

        setIsChosen && setIsChosen(true)

        const formData = new FormData()
        formData.append("media", files[0])

        await mutateAsync(formData)

    }

    return {
        uploadFile
    }

}