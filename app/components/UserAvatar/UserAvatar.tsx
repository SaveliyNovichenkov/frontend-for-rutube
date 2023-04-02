import React from 'react';
import {UserAvatarProps} from "@/components/UserAvatar/UserAvatar.props";
import Link from 'next/link';
import cn from 'classnames'
import s from './UserAvatar.module.scss'
import Image from "next/image";

const UserAvatar = ({user, isWhite, }:UserAvatarProps) => {

    return (
        <Link href={`/c/${user.id}`} >
            <a>
                <span className={cn(s.avatar, {
                    [s.white] : isWhite
                })}>
                    <Image
                        src={process.env.NEXT_PUBLIC_REACT_APP_URI + user.avatarPath || ''}
                        width={45}
                        height={45}
                        alt={user.name}

                    />
                    {user.isVerified && (
                        <span className={s.isVerified}>
<svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 48 48" version="1.1">
<g id="surface1">
<path fill="rgb(23.137255%,50.980392%,96.470588%)" d="M 24 0 C 10.769531 0 0 10.769531 0 24 C 0 37.230469 10.769531 48 24 48 C 37.230469 48 48 37.230469 48 24 C 48 10.769531 37.230469 0 24 0 Z M 34.582031 21.449219 L 24.304688 31.726562 C 23.59375 32.441406 22.65625 32.796875 21.71875 32.796875 C 20.78125 32.796875 19.84375 32.441406 19.128906 31.726562 L 13.417969 26.019531 C 11.988281 24.589844 11.988281 22.269531 13.417969 20.839844 C 14.851562 19.410156 17.164062 19.410156 18.601562 20.839844 L 21.71875 23.960938 L 29.40625 16.273438 C 30.832031 14.84375 33.15625 14.84375 34.582031 16.273438 C 36.011719 17.699219 36.011719 20.019531 34.582031 21.449219 Z M 34.582031 21.449219 "/>
</g>
</svg>
                        </span>
                    )}
                </span>
            </a>
        </Link>
    );
};

export default UserAvatar;