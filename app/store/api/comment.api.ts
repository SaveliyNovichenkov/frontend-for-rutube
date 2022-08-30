import {api} from "./api";
import {CommentDto, IComment} from "../../interfaces/comment.interface";


export const commentApi = api.injectEndpoints({
    endpoints: builder => ({
        createComment: builder.mutation<IComment, CommentDto>({
            query: body =>  ({
                url: `/comment`,
                method: 'POST',
                body
            }),
            invalidatesTags: (result, error, {videoId}) => [{type: 'Video', id: videoId}]
        }),

        deleteComment: builder.mutation<void, number>({
            query: id =>  ({
                url: `/comment/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: () => [{type: 'Video'}]
        }),
   })
})