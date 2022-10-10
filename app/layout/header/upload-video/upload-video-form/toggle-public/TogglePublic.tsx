import React from 'react';
import {TogglePublicInterface} from "./toggle-public.interface";
import { Switch } from '@headlessui/react'
import cn from 'classnames'
import s from './TogglePublic.module.scss'

const TogglePublic = ({isEnabled, clickHandler}: TogglePublicInterface) => {
    return (
        <div className={s.wrapper}>
            <Switch
                checked={isEnabled}
                onChange={clickHandler}
                className={cn(s.switch, {
                    [s.active]: isEnabled,
                    [s.disabled]: !isEnabled
                })}
            >
				<span
                    className={cn(s.point, {
                        [s.active]: isEnabled,
                        [s.disabled]: !isEnabled
                    })}
                />
            </Switch>
            <span onClick={clickHandler}>Публичное видео</span>
        </div>
    )
};

export default TogglePublic;