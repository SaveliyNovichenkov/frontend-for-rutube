import React, {FC, forwardRef} from 'react';
import {TextareaProps} from "@/components/Textarea/Textarea.props";
import s from './Textarea.module.scss'


const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({error = null,  ...props}, ref) => {
    return (
        <div className={s.wrapper}>
            <textarea ref={ref} className={s.textarea} {...props} >
            </textarea>
                {error && <div className={s.error}>{error.message}</div>}
        </div>
    )
}
)

export default Textarea;