import React, { FC } from 'react';
import {IMenuItem} from "./Menu.interface";
import s from './Menu.module.scss'
import MenuItem from "./MenuItem";
import Line from "@/components/Line/Line";

interface IMenu {
    title: string
    items: IMenuItem[]
}



const Menu: FC<IMenu> = ({items,title}) => {
    return (
        <nav className={s.menu_sidebar}>
            <h3>{title}</h3>
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