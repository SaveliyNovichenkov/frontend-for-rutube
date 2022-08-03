import s from './Sidebar.module.scss'

import React, {FC} from 'react';
import Link from "next/link";
import Menu from './menu/Menu';
import {menu} from "../../helpers/menu.helper";

const Sidebar:FC = () => {
    //TODO: get profile
    return (
        <aside className={s.sidebar}>
            <Link href='/'>
                <a className={s.logo}>
                    Rutube
                </a>
            </Link>
            <Menu title='Меню' items={menu} />
            <div className={s.copy}>
                © 2022 Rutube by Saveliy Novichenkov
            </div>
        </aside>
    );
};

export default Sidebar;