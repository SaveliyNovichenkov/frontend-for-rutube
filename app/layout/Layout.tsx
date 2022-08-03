import s from './Layout.module.scss'
import React, {FC, PropsWithChildren} from 'react';
import Head from "next/head";
import Sidebar from "./sidebar/Sidebar";
import Header from './header/Header';



const Layout: FC<PropsWithChildren<{title:string}>> = ({title, children}) => {
    return (<>
        <Head>
            <title>
                {title}
            </title>
        </Head>
        <main className={s.main}>
            <Sidebar />
            <section className={s.content}>
                <Header />
                <div className={s.wrapper}>
                    {children}
                </div>
            </section>
        </main>
        </>
    );
};

export default Layout;