import React from 'react';
import {FooterFormProps} from "./FooterForm.props";
import s from './FooterForm.module.scss'
import cn from "classnames"
import {MdCheckCircle, MdUpload} from "react-icons/md";

const FooterForm = ({isUploaded, percent}: FooterFormProps) => {
    return (
        <div className={s.footer}>
            <div className={cn(s.status, {
                [s.uploaded] : isUploaded
            })}>
                <MdUpload size={35} className={s.upload_icon} />
                <MdCheckCircle size={35} className={s.check_icon} />
                <span>
                    {isUploaded ? "Видео загружено" : `Uploading ${percent}%`}
                </span>
            </div>
            <div>
                <button className={s.button}>
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default FooterForm;