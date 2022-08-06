export const API = {
    auth: {
        login: process.env.REACT_APP_URI + '/api/auth/login',
        register: process.env.NEXT_PUBLIC_DOMAIN + '/api/auth/register'
    },
    user: {
        userGetProfileById: process.env.NEXT_PUBLIC_DOMAIN + '/api/user/by-id/',
        userSubscribe: process.env.NEXT_PUBLIC_DOMAIN + '/api/user/subscribe/',
        userUpdateInfo: process.env.NEXT_PUBLIC_DOMAIN + '/api/user/',
        userProfileByToken: process.env.NEXT_PUBLIC_DOMAIN + '/api/user/profile',
    },
    video: {

    }
};