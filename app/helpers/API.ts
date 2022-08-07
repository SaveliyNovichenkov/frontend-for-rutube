export const API = {
    baseUrl: process.env.NEXT_PUBLIC_REACT_APP_URI + '/api',
    auth: {
        login: process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/auth/login',
        register: process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/auth/register'
    },
    user: {
        userGetProfileById: process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/user/by-id/',
        userSubscribe: process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/user/subscribe/',
        userUpdateInfo: process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/user/',
        userProfileByToken: process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/user/profile',
    },
    video: {
        getAll:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video',
        getPublicById:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video/',
        getPrivateByID:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video/get-private/',
        getMostPopularVideo:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video/most-popular',
        postVideo:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video',
        deleteVideoById:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video/',
        updateVideoById:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video/',
        updateViewsById:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video/update-views/',
        updateLikesById:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video/update-likes/',
        updateDislikesById:process.env.NEXT_PUBLIC_REACT_APP_URI + '/api/video/update-dislikes/',
    }
};