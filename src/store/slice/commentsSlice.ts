import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IComment } from '../../types/Comment';
import { fetchCommentsByPostId } from '../thunks/commentsThunks';

interface CommentsState {
    comments: IComment[];
    loading: boolean;
    error: string | null;
}

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        clearComments: (state) => {
            state.comments = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByPostId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchCommentsByPostId.fulfilled,
                (state, action: PayloadAction<IComment[]>) => {
                    state.loading = false;
                    state.comments = action.payload;
                }
            )
            .addCase(fetchCommentsByPostId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error fetching comments';
            });
    },
});

export const { clearComments } = commentsSlice.actions;

export default commentsSlice.reducer;
