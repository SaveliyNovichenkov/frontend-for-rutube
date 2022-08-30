import React from 'react';
import {useAuth} from "@/hooks/useAuth";
import { useGetProfileQuery } from '@/store/api/api';
import {useOutsideClickListener} from "@/hooks/useOutside";
import {useActions} from "@/hooks/useActions";
import s from './ProfileMenu.module.scss'
import Image from "next/image";
import BaseAvatar from '../../../../public/5-1.jpg'
import Link from 'next/link';
import ArrowIcon from './arrow.svg'

const ProfileMenu = () => {
    const {user} = useAuth()
    const {data, isLoading, error, isSuccess, isError} = useGetProfileQuery(null, {
        skip: !user
    })
    const { isShow, setIsShow, ref} = useOutsideClickListener(false)
    const {logoutThunk} = useActions()

    return (<>
    {isLoading && <div>Загрузка...</div>}
    {isSuccess && <div ref={ref} className={s.wrapper}>
            <button className={s.button}  onClick={() => setIsShow(!isShow)}>
                <Image
                    src={process.env.NEXT_PUBLIC_REACT_APP_URI + data?.avatarPath || BaseAvatar}
                    alt={data?.name}
                    width={40}
                    height={40}
                    priority
                />
                <span className={s.name}>{data?.name}</span>
                {isShow ?
                <span className={s.down}>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="#5B5B6B" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84025C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84025L5.7154 5.38614C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"/>
                    </svg>
                </span>
                    :
                <span className={s.arrow}>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="#5B5B6B" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.7154 4.6098L1.26527 0.159755C1.16235 0.0567475 1.02495 0 0.878448 0C0.731945 0 0.594548 0.0567475 0.491622 0.159755L0.163901 0.487394C-0.0493491 0.700889 -0.0493491 1.04788 0.163901 1.26105L3.90078 4.99793L0.159755 8.73895C0.0568288 8.84196 0 8.97928 0 9.1257C0 9.27228 0.0568288 9.4096 0.159755 9.51269L0.487476 9.84025C0.590483 9.94325 0.727799 10 0.874302 10C1.0208 10 1.1582 9.94325 1.26113 9.84025L5.7154 5.38614C5.81857 5.2828 5.87524 5.14484 5.87491 4.99817C5.87524 4.85094 5.81857 4.71305 5.7154 4.6098Z"/>
                </svg>
                </span>}
            </button>
        {isShow && (
            <div className={s.profile_menu}>
            <ul>
                <li>
                    <svg fill='#ff4d23'  xmlns="http://www.w3.org/2000/svg"  width="16px" height="16px" viewBox="0 0 48 48" version="1.1">
                        <g id="surface1">
                            <path  d="M 42.960938 4.699219 C 41.808594 3.546875 39.9375 3.546875 38.785156 4.699219 L 14.789062 28.695312 L 9.210938 23.113281 C 8.058594 21.960938 6.191406 21.960938 5.039062 23.113281 L 0.863281 27.289062 C -0.289062 28.441406 -0.289062 30.308594 0.863281 31.460938 L 8.53125 39.125 L 12.703125 43.300781 C 13.855469 44.453125 15.726562 44.453125 16.878906 43.300781 L 21.050781 39.125 L 47.132812 13.042969 C 48.285156 11.890625 48.285156 10.023438 47.132812 8.871094 Z M 42.960938 4.699219 "/>
                        </g>
                    </svg>
                    <Link href={`/c/${user?.id}`}>
                        <a>Мой канал</a>
                    </Link>
                </li>
                <li>
                    <svg fill='#ff4d23'  xmlns="http://www.w3.org/2000/svg"  width="16px" height="16px" viewBox="0 0 48 48" version="1.1">
                        <g id="surface1">
                            <path  d="M 42.960938 4.699219 C 41.808594 3.546875 39.9375 3.546875 38.785156 4.699219 L 14.789062 28.695312 L 9.210938 23.113281 C 8.058594 21.960938 6.191406 21.960938 5.039062 23.113281 L 0.863281 27.289062 C -0.289062 28.441406 -0.289062 30.308594 0.863281 31.460938 L 8.53125 39.125 L 12.703125 43.300781 C 13.855469 44.453125 15.726562 44.453125 16.878906 43.300781 L 21.050781 39.125 L 47.132812 13.042969 C 48.285156 11.890625 48.285156 10.023438 47.132812 8.871094 Z M 42.960938 4.699219 "/>
                        </g>
                    </svg>
                    <Link href={`/studio`}>
                        <a>Студия</a>
                    </Link>
                </li>
                <li>
                    <svg fill='#ff4d23'  xmlns="http://www.w3.org/2000/svg"  width="16px" height="16px" viewBox="0 0 48 48" version="1.1">
                        <g id="surface1">
                            <path  d="M 42.960938 4.699219 C 41.808594 3.546875 39.9375 3.546875 38.785156 4.699219 L 14.789062 28.695312 L 9.210938 23.113281 C 8.058594 21.960938 6.191406 21.960938 5.039062 23.113281 L 0.863281 27.289062 C -0.289062 28.441406 -0.289062 30.308594 0.863281 31.460938 L 8.53125 39.125 L 12.703125 43.300781 C 13.855469 44.453125 15.726562 44.453125 16.878906 43.300781 L 21.050781 39.125 L 47.132812 13.042969 C 48.285156 11.890625 48.285156 10.023438 47.132812 8.871094 Z M 42.960938 4.699219 "/>
                        </g>
                    </svg>
                    <button className={s.button}  onClick={logoutThunk}>Выйти</button>
                </li>
            </ul>

            </div>
        )}
        </div> }
    {isError && <div>Ошибка...</div>}
        </>
    )

}

export default ProfileMenu;