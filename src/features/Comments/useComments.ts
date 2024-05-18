import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearComments } from '../../store/slice/commentsSlice';
import { AppDispatch, RootState } from '../../store/store';
import { fetchCommentsByPostId } from '../../store/thunks/commentsThunks';

export function useComments() {
    const { postId } = useParams<{ postId: string }>();
    const dispatch: AppDispatch = useDispatch();
    const {
        comments,
        loading: isLoading,
        error,
    } = useSelector((state: RootState) => state.comments);

    useEffect(() => {
        if (postId) {
            dispatch(clearComments());
            dispatch(fetchCommentsByPostId(Number(postId)));
        }
    }, [dispatch, postId]);

    return {
        comments,
        isLoading,
        error,
    };
}
