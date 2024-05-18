import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../types/Post';

interface PostsState {
    posts: IPost[];
    isLoading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        updatePost: (state, action: PayloadAction<IPost>) => {
            const index = state.posts.findIndex(
                (post) => post.id === action.payload.id
            );
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
            state.isLoading = false;
            state.error = null;
        },
        setPostsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setPostsError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { setPosts, updatePost, setPostsLoading, setPostsError } =
    postsSlice.actions;
export default postsSlice.reducer;
