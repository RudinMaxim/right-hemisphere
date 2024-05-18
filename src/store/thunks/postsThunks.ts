import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../constants/url';
import { IPost } from '../../types/Post';

export const fetchPosts = createAsyncThunk<IPost[], void>(
    'posts/fetchPosts',
    async () => {
        const response = await axios.get<IPost[]>('/posts', {
            baseURL: API_URL,
        });
        return response.data;
    }
);

export const fetchPostById = createAsyncThunk<IPost, number>(
    'posts/fetchPostById',
    async (postId) => {
        const response = await axios.get<IPost>(`/posts/${postId}`, {
            baseURL: API_URL,
        });
        return response.data;
    }
);

export const updatePostTitle = createAsyncThunk<
    IPost,
    { postId: number; newTitle: string }
>('posts/updatePostTitle', async ({ postId, newTitle }) => {
    const response = await axios.patch<IPost>(
        `/posts/${postId}`,
        {
            title: newTitle,
        },
        { baseURL: API_URL }
    );
    return response.data;
});
