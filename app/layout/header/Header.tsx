import s from './Header.module.scss'
import Search from "./search/Search";
import IconsComponent from "./icons/Icons";

const Header = () => {
    return (
        <header className={s.header}>
            <Search />
            <IconsComponent />
        </header>
    );
};

export default Header;