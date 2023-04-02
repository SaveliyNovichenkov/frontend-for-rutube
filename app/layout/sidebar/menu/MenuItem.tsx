import React, {FC} from 'react';
import {IMenuItem} from "./Menu.interface";
import {useAuth} from "@/hooks/useAuth";
import Link from 'next/link';
import {useRouter} from "next/router";
import s from './Menu.module.scss'
import Image from "next/image";
import ModalWindow from "@/components/ModalWindow/ModalWindow";

const MenuItem:FC<{item: IMenuItem}> = ({item}) => {

    const {user} = useAuth()
    const {asPath} = useRouter()
    if(item.link == '/my-channel' && !user) return <></>

    return (
        <li>
            <Link href={item.link}>
                <a className={asPath === item.link ? s.active : ''}>
                    {item.icon && <span className={item.image ? s.image : ''}>
                        {item.icon && item.icon}
                    </span>}
                    {item.image &&
                            <Image
                                src={process.env.NEXT_PUBLIC_REACT_APP_URI + item.image || ''}
                                alt={item.title}
                                width={48}
                                height={48}
                                layout="fixed"
                            />
                        }
                    <b className={s.channel_avatar}>{item.title}</b>
                </a>
            </Link>
            {item.link == "/subscriptions" && !user && <div>модалка с авторизацией</div>}
        </li>
    );
};

export default MenuItem;