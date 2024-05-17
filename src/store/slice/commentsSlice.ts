import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from '../../types/Comment';

interface CommentsState {
    comments: IComment[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CommentsState = {
    comments: [],
    isLoading: false,
    error: null,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setCommentsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setCommentsError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { setComments, setCommentsLoading, setCommentsError } = commentsSlice.actions;
export default commentsSlice.reducer;