import React from 'react';
import {useAuth} from "@/hooks/useAuth";
import { api } from '@/store/api/api';

const ProfileMenu = () => {

    const {user} = useAuth()

    const {data, isLoading, error, isSuccess, isError} = api.useGetProfileQuery(null, {
        skip: !user
    })
    if (isLoading) return <div>Загрузка...</div>
    if (isSuccess) return (
        <div>{data?.name}</div>
    );
    if (isError) return <div>Ошибка...</div>

}

export default ProfileMenu;