import s from './Switch.module.css'
import {DetailedHTMLProps, InputHTMLAttributes, useEffect} from "react";

interface SwitchProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    checked: boolean
    onChange: () => void
}


const Switch = ({checked, onChange, ...props}:SwitchProps) => {
    return (
        <label className={s.switch} >
            <input type="checkbox"
                   checked={checked}
                   onChange={onChange}
                   {...props}
            />
            <span className={s.slider}/>
        </label>
    );
};

export default Switch;