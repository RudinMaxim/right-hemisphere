import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants/url';
import { IComment } from '../types/Comment';
import { IPost } from '../types/Post';
import { IUser } from '../types/User';

const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => '/users',
    }),
    getPostsByUser: builder.query<IPost[], number>({
      query: (userId) => `/posts?userId=${userId}`,
    }),
    getCommentsByPost: builder.query<IComment[], number>({
      query: (postId) => `/comments?postId=${postId}`,
    }),
    updatePostTitle: builder.mutation<IPost, { postId: number; newTitle: string }>({
      query: ({ postId, newTitle }) => ({
        url: `/posts/${postId}`,
        method: 'PUT',
        body: { title: newTitle },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsByUserQuery, useGetCommentsByPostQuery, useUpdatePostTitleMutation } = apiService;
export default apiService;