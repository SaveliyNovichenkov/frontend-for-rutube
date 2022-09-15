import {AddCommentProps} from "./AddComment.props";
import {SubmitHandler, useForm} from "react-hook-form";
import {CommentDto} from "../../../../../interfaces/comment.interface";
import {commentApi} from "@/store/api/comment.api";
import s from '../Comments.module.scss'
import {MdSend} from "react-icons/md";
import { Input } from "@/components/Input/Input";
import React, {useRef, useState} from "react";
import {ErrorMessage} from "@hookform/error-message";



export const AddCommentForm = ({videoId}:AddCommentProps) => {

    const inputRef = useRef()

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm<CommentDto>({
        mode: "onChange"
    })

    const [writeComment, {isLoading, } ] = commentApi.useCreateCommentMutation()

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

 /* const onSubmit: SubmitHandler<CommentDto> = async (data) => {
        writeComment({...data, videoId})
            .unwrap()
            .then(() => reset())
    }*/


    const onSubmit: SubmitHandler<CommentDto> = async (data) => {
        try {
            writeComment({...data, videoId})
                .unwrap()
                .then(() => reset());
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
    };

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.input_button__wrapper}>
                <Input
                    {...register("message")}
                    placeholder="Введите текст комментария"
                />

                <button className={s.button}>
                    <MdSend />
                </button>
            </div>
        </form>
    )

}