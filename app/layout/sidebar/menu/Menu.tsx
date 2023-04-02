import React, { FC } from 'react';
import {IMenuItem} from "./Menu.interface";
import s from './Menu.module.scss'
import MenuItem from "./MenuItem";
import Line from "@/components/Line/Line";

interface IMenu {
    items: IMenuItem[]
}



const Menu: FC<IMenu> = ({items}) => {
    return (
        <nav className={s.menu_sidebar}>
            <ul>
                {items.map(menuItem => (
                    <MenuItem item={menuItem} key={menuItem.link} />
                ))}
            </ul>
            <Line />
        </nav>
    );
};

export default Menu;