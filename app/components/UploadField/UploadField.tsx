import React from 'react';
import {UploadFieldProps} from "@/components/UploadField/UploadField.props";
import s from './UploadField.module.scss'
import {useUploadFile} from "@/hooks/useUploadFile";



const UploadField = ({
    title,
    onChange,
    folder,
    setIsChosen,
    setValue}: UploadFieldProps) => {

    const {uploadFile} = useUploadFile({onChange, folder, setValue, setIsChosen})

    return (
        <div className={s.file}>
            {title && <h1>Загрузи видео ниже</h1>}
            <label className={s.label}>
                <span className={s.title}>Прикрепить видео</span>
                <input className={s.input_upload} type='file' onChange={uploadFile}/>
            </label>
        </div>
    );
};

export default UploadField;