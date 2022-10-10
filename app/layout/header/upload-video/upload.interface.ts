import {Dispatch, SetStateAction} from "react";

export interface UploadInterface {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    videoId: number
}