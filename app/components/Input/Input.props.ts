import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { DeepRequired, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export interface InputProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>> | undefined | any;
}
