import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../constants/url';
import { IComment, commentSchema } from '../../types/Comment';

export const fetchCommentsByPostId = createAsyncThunk<IComment[], number>(
    'comments/fetchCommentsByPostId',
    async (postId) => {
        const response = await axios.get<IComment[]>(
            `/comments?postId=${postId}`,
            {
                baseURL: API_URL,
            }
        );
        const comments = response.data.map((comment) =>
            commentSchema.parse(comment)
        );
        return comments;
    }
);
