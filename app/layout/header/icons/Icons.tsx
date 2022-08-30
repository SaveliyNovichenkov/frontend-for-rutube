import React from 'react';
import {useAuth} from "@/hooks/useAuth";
import s from './Icons.module.scss'
import ProfileMenu from "../profile-menu/ProfileMenu";
import UploadVideo from "../upload-video/UploadVideo";

import { AuthForm } from '../auth-form/AuthForm';

const IconsComponent = () => {
    const {user} = useAuth()
    return (
        <div className={s.icons}>
            {user ? (
            <>
                <ProfileMenu />
                <UploadVideo />
            </> )
            : (
                <AuthForm />
                )}
        </div>
    );
};

export default IconsComponent;