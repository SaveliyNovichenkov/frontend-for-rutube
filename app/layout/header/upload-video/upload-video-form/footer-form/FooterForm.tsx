import React from 'react';
import {FooterFormProps} from "./FooterForm.props";
import s from './FooterForm.module.scss'
import cn from "classnames"
import {MdCheckCircle, MdUpload} from "react-icons/md";
import {Button} from "@/components/Button/Button";

const FooterForm = ({isUploaded, percent}: FooterFormProps) => {
    return (
        <div className={s.footer}>
            <div className={cn(s.status, {
                [s.uploaded] : isUploaded
            })}>
                <MdUpload className={s.upload_icon} />
                <MdCheckCircle className={s.check_icon} />
                <span>
                    {isUploaded ? "Video is uploaded" : `Uploading ${percent}%`}
                </span>
            </div>
            <div>
                <Button appearance="primary">
                    Сохранить
                </Button>
            </div>
        </div>
    );
};

export default FooterForm;