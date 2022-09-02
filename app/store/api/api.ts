import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {TypeRootState} from "@/store/store";
import { IUser } from "interfaces/user.interface";
import { API } from "helpers/API";


export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Video', 'Profile'],
    baseQuery: fetchBaseQuery({
        baseUrl: API.baseUrl,
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as TypeRootState).auth.accessToken

            if(token) headers.set('Authorization', `Bearer ${token}`)

            return headers
        }
    }),
    endpoints: builder => ({
        getProfile: builder.query<IUser, any>({
            query: () => `/user/profile`,
            providesTags: () => [{type: 'Profile'}]
        }),
        subscribeToChannel: builder.mutation<boolean, number>({
           query: (channelId) =>  ({
               url: `/user/subscribe/${channelId}`,
               method: 'PATCH'
           }),
        invalidatesTags: () => [{type: 'Profile'}]
        })

    })
})

export const {useGetProfileQuery, useSubscribeToChannelMutation} = api

