import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants/url';
import { IComment } from '../types/Comment';
import { IPost } from '../types/Post';
import { IUser } from '../types/User';

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
});

const apiService = createApi({
    reducerPath: 'api',
    baseQuery,
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => '/users',
        }),
        getPostsByUser: builder.query<IPost[], number>({
            query: (userId) => `/posts?userId=${userId}`,
        }),
        getPostById: builder.query<IPost, number>({
            query: (postId) => `/posts/${postId}`,
        }),
        getCommentsByPost: builder.query<IComment[], number>({
            query: (postId) => `/comments?postId=${postId}`,
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetPostsByUserQuery,
    useGetPostByIdQuery,
    useGetCommentsByPostQuery,
} = apiService;
export default apiService;
