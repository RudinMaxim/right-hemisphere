import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants/url';
import { Post } from '../types/Post';
import { User } from '../types/User';

const apiService = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    getPostsByUser: builder.query<Post[], number>({
      query: (userId) => `/posts?userId=${userId}`,
    }),
    getCommentsByPost: builder.query<Comment[], number>({
      query: (postId) => `/comments?postId=${postId}`,
    }),
    updatePostTitle: builder.mutation<Post, { postId: number; newTitle: string }>({
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