import React from 'react';
import s from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(s.button, className, {
                [s.purple]: appearance == 'purple',
                [s.ghost]: appearance == 'ghost',
                [s.primary]: appearance == 'primary',
            })}
            {...props}
        >
            {children}

        </button>
    );
};
