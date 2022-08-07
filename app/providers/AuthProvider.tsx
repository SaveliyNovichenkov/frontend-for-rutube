import dynamic from "next/dynamic";
import {FC, PropsWithChildren} from "react";
import {TypeComponentAuthFields} from "@/providers/private-page.interface";


const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
    ssr: false
})


export const AuthProvider:FC<PropsWithChildren<TypeComponentAuthFields>> =
    ({children, Component: {isOnlyUser}}) => {
    return !isOnlyUser ? <>{children}</> : <DynamicCheckRole Component={{isOnlyUser}}>{children}</DynamicCheckRole>
}