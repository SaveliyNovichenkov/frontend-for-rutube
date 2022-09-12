import React, {useState} from 'react';
import {useOutsideClickListener} from "@/hooks/useOutside";
import {SubmitHandler, useForm} from "react-hook-form";
import {AuthFormInterface} from "./AuthForm.interface";
import s from './AuthForm.module.scss'
import {Input} from "@/components/Input/Input";
import { ErrorMessage } from '@hookform/error-message';
import {useActions} from "@/hooks/useActions";
import { useAuth } from '@/hooks/useAuth';


export const AuthForm = () => {
    const validEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    const {ref, isShow, setIsShow} = useOutsideClickListener(false)

    const [type, setType] = useState<'login' | 'register'>('login')

    const {loginThunk, registerThunk} = useActions()

    const {isLoading} = useAuth()

    const {register, handleSubmit, formState: {errors}} = useForm<AuthFormInterface>({
        mode: 'onTouched'
    })



    const onSubmit:SubmitHandler<AuthFormInterface> = (data) => {
        if(type === 'login') loginThunk(data) && console.log(loginThunk(data))
        else if(type === 'register') registerThunk(data)  && console.log(registerThunk(data))
    }


  /*
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: AuthFormInterface) => {
        try {
            const { data } = await axios.post<AuthFormSentResponse>('localhost...', { ...formData });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }
    };*/

    return (
        <div className={s.wrapper} ref={ref}>
            <button  className={s.btn} onClick={() => setIsShow(!isShow)}>
                     <svg  className={s.svg} xmlns="http://www.w3.org/2000/svg" id="body_1" width="41" height="31">
                    <g transform="matrix(0.58490574 0 0 0.58490574 4.9999995 -0)">
                        <path d="M18.613 41.552L10.706001 45.864998C 10.242002 46.117996 9.825002 46.428997 9.437001 46.767998C 14.047 50.655 19.998 53 26.5 53C 32.954 53 38.867 50.69 43.464 46.856C 43.04 46.497997 42.58 46.176 42.07 45.921997L42.07 45.921997L33.603 41.688995C 32.509 41.141994 31.818 40.023994 31.818 38.800995L31.818 38.800995L31.818 35.478996C 32.056 35.207996 32.328 34.859997 32.619 34.448997C 33.773 32.818996 34.646 31.025997 35.251 29.144997C 36.336998 28.809998 37.137 27.806997 37.137 26.614996L37.137 26.614996L37.137 23.068996C 37.137 22.288996 36.79 21.591997 36.251 21.103996L36.251 21.103996L36.251 15.977997C 36.251 15.977997 37.304 8.000997 26.501 8.000997C 15.697998 8.000997 16.751 15.977997 16.751 15.977997L16.751 15.977997L16.751 21.103996C 16.210999 21.591997 15.865 22.288996 15.865 23.068996L15.865 23.068996L15.865 26.614996C 15.865 27.548996 16.355999 28.370996 17.091 28.845997C 17.977 32.702995 20.296999 35.478996 20.296999 35.478996L20.296999 35.478996L20.296999 38.718998C 20.296 39.899 19.65 40.986 18.613 41.552z" stroke="none" fill="#FFFFFF" fillRule="nonzero" />
                        <path d="M26.953 0.004C 12.32 -0.246 0.254 11.414 0.004 26.047C -0.138 34.344 3.56 41.801 9.448 46.76C 9.833 46.424 10.246 46.115997 10.705 45.865997L10.705 45.865997L18.612 41.552998C 19.649 40.987 20.295 39.899998 20.295 38.718L20.295 38.718L20.295 35.477997C 20.295 35.477997 17.973999 32.701996 17.089 28.844997C 16.355001 28.369997 15.863001 27.548998 15.863001 26.613998L15.863001 26.613998L15.863001 23.067999C 15.863001 22.287998 16.210001 21.591 16.749 21.102999L16.749 21.102999L16.749 15.976999C 16.749 15.976999 15.696001 7.999999 26.499 7.999999C 37.302002 7.999999 36.249 15.976999 36.249 15.976999L36.249 15.976999L36.249 21.102999C 36.789 21.591 37.135002 22.287998 37.135002 23.067999L37.135002 23.067999L37.135002 26.613998C 37.135002 27.805998 36.335003 28.808998 35.249 29.144C 34.644 31.025 33.771 32.818 32.617 34.447998C 32.326 34.858997 32.054 35.206997 31.816 35.477997L31.816 35.477997L31.816 38.8C 31.816 40.023 32.507 41.142 33.601 41.688L33.601 41.688L42.068 45.920998C 42.576 46.175 43.035 46.496 43.458 46.852997C 49.168 42.090996 52.857002 34.970997 52.994 26.952997C 53.246 12.32 41.587 0.254 26.953 0.004z" stroke="none" fill="#353340" fillRule="nonzero" />
                    </g>
                </svg>
            </button>
            {isShow && <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register('email', {
                            required: {value: true, message: 'E-mail обязателен'},
                            pattern: {
                                value: validEmail,
                                message: 'Невалидный e-mail'
                            }
                        })}
                    placeholder='E-mail'
                    type='email'
                        inputMode={"email"}
                    />
                <div className={s.error}>
                    <ErrorMessage errors={errors} name="email"
                                  render={({ message }) => <p>{message}</p>} />
                </div>



                    <Input
                        {...register('password', {
                            required: {value: true, message: 'Пароль обязателен'},
                            minLength: {
                                value: 6,
                                message: 'Минимум 6 символов'
                            },
                        })}
                    placeholder='Пароль'
                    type='password'
                    />
                <div className={s.error}>
                    <ErrorMessage errors={errors} name="password"
                                  render={({ message }) =>
                                      <p>{message}</p>} />
                </div>

                    <button className={s.custom_btn}
                            onClick={() => setType('login')}
                            disabled={isLoading}
                    >
                       Войти
                    </button>
                    <button className={s.custom_btn}
                            onClick={() => setType('register')}
                            disabled={isLoading}
                    >
                       Зарегистрироваться
                    </button>
                </form>}
        </div>
    );
};

