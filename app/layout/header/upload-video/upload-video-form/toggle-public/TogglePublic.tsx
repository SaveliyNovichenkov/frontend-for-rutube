import React from 'react';
import {TogglePublicInterface} from "./toggle-public.interface";
import s from './TogglePublic.module.scss'
import Switch from "@/components/Switch/Switch";

const TogglePublic = ({isEnabled, clickHandler}: TogglePublicInterface) => {
    return (
        <div className={s.wrapper}>

            <Switch
                className={s.switch}
                checked={isEnabled}
                onChange={clickHandler}
            />

            <span className={s.title} onClick={clickHandler}>Публичное видео</span>
        </div>
    )
};

export default TogglePublic;