import s from './Sidebar.module.scss'

import React, {FC} from 'react';
import Link from "next/link";
import Menu from './menu/Menu';
import {menu} from "../../helpers/menu.helper";
import {useAuth} from "@/hooks/useAuth";
import {api} from "@/store/api/api";

const Sidebar:FC = () => {

    const {user} = useAuth()
    const {data} = api.useGetProfileQuery(null, {
        skip: !user
    })

    return (
        <aside className={s.sidebar}>
            <Link href='/'>
                <a className={s.logo}>
                    Rutube
                </a>
            </Link>
            <Menu items={menu} />
            {user && <Menu items={
                data?.subscriptions?.map(({toChannel}) => ({
                    image: toChannel.avatarPath,
                    title: toChannel.name,
                    link: `/c/` + toChannel.id
                })) || []
            }/>}
            <div className={s.copy}>
                © 2022 Rutube by Saveliy Novichenkov
            </div>
        </aside>
    );
};

export default Sidebar;