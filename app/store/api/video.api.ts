import {api} from "./api";
import {CommentDto, IComment} from "../../interfaces/comment.interface";
import {IVideo, VideoDto} from "../../interfaces/video.interface";
import {LikeInterface,ILikeDto} from "../../interfaces/like.interface";


export const videoApi = api.injectEndpoints({
    endpoints: builder => ({
        getVideoBySearchTerm: builder.query<IVideo[], string>({
            query: searchTerm =>  ({
                url: `/video`,
                params: {searchTerm}
            }),
        }),
        getMostPopularVideos: builder.query<IVideo[], string>({
            query: () =>  ({
                url: `/video/most-popular`,
            }),
        }),
        getVideoById: builder.query<IVideo, number>({
            query: id => `/video/${id}`,
            providesTags: (result, error, id) => [{type: 'Video', id}]
        }),

        getPrivateVideoById: builder.query<IVideo, number>({
            query: id => `/video/get-private/${id}`,
            providesTags: (result, error, id) => [{type: 'Video', id}]
        }),
        createVideo: builder.mutation<string, void>({
            query: () =>  ({
                url: `/video`,
                method: 'POST'
            }),
            invalidatesTags: () => [{type: 'Profile'}]
        }),
        updateVideo: builder.mutation<IVideo, VideoDto>({
            query: ({ id, ...body}) =>  ({
                url: `/video/${id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: (result, error, {id}) => [
                {type: 'Video', id},
                {type: 'Profile'}
            ]
        }),
        updateViews: builder.mutation<IVideo, number>({
            query: id =>  ({
                url: `/video/update-views/${id}`,
                method: 'PUT'
            }),
            invalidatesTags: (result, error, id) => [{type: 'Video', id}]
        }),
        updateLikes: builder.mutation<IVideo, number>({
            query: id =>  ({
                url: `/video/update-likes/${id}`,
                method: 'PUT'
            }),
            invalidatesTags: (result, error, id) => [{type: 'Video', id}]
        }),
        updateDislikes: builder.mutation<IVideo, number>({
            query: id =>  ({
                url: `/video/update-dislikes/${id}`,
                method: 'PUT'
            }),
            invalidatesTags: (result, error, id) => [{type: 'Video', id}]
        }),
        deleteLikes: builder.mutation<IVideo, number>({
            query: id =>  ({
                url: `/video/delete-likes/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, id) => [{type: 'Video', id}]
        }),
        deleteDislikes: builder.mutation<IVideo, number>({
            query: id =>  ({
                url: `/video/delete-dislikes/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, id) => [{type: 'Video', id}]
        }),
        deleteVideo: builder.mutation<void, number>({
            query: id =>  ({
                url: `/video/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'Video'},{type: 'Profile'}]
        })

    })
})