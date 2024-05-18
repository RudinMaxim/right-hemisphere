import { createSlice } from '@reduxjs/toolkit';
import { IPost } from '../../types/Post';
import {
    fetchPostById,
    fetchPosts,
    updatePostTitle,
} from '../thunks/postsThunks';

interface PostsState {
    posts: IPost[];
    isLoading: boolean;
    currentPost: IPost | null;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: null,
    currentPost: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        });

        builder.addCase(fetchPostById.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchPostById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentPost = action.payload;
        });
        builder.addCase(fetchPostById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        });

        builder.addCase(updatePostTitle.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(updatePostTitle.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentPost = action.payload;
        });
        builder.addCase(updatePostTitle.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export default postsSlice.reducer;
