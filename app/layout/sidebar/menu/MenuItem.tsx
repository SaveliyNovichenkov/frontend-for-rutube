import React, {FC} from 'react';
import {IMenuItem} from "./Menu.interface";
import {useAuth} from "@/hooks/useAuth";
import Link from 'next/link';
import {useRouter} from "next/router";
import s from './Menu.module.scss'
import Image from "next/image";

const MenuItem:FC<{item: IMenuItem}> = ({item}) => {

    const {user} = useAuth()
    const {asPath} = useRouter()


    if(item.link == '/my-channel')
        if(!user) return null
        else item.link = `/c/${user?.id}`

    return (
        <li>
            <Link href={item.link}>
                <a className={asPath === item.link ? s.active : ''}>
                    <span className={item.image ? s.image : ''}>
                        {item.icon && item.icon}
                        {item.image && item.image}
                    </span>
                    <b>{item.title}</b>
                </a>
            </Link>
        </li>
    );
};

export default MenuItem;