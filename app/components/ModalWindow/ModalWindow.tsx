import React from 'react';
import s from './ModalWindow.module.scss'
import {ModalWindowInterface} from "@/components/ModalWindow/ModalWindow.props";
import cn from 'classnames'

const ModalWindow = ({active, className, setActive, children, background}: ModalWindowInterface) => {
    switch (background) {
        case true:
            return  (
                <div className={cn(s.modal, className, {
                    [s.active] : active == true
                })} onClick={() => setActive(false)}>
                    <div className={s.modal__content} onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            );
        case false:
            return  (
                <div className={cn(s.modal, className, {
                    [s.active] : active == true
                })} onClick={() => setActive(false)}>
                        {children}
                </div>
            );
    }

};

export default ModalWindow;