import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    useGetCommentsByPostQuery,
    useGetPostByIdQuery,
    useUpdatePostTitleMutation,
} from '../../services/apiService';
import { updatePost } from '../../store/slice/postsSlice';
import { sanitizeInput } from '../../utils/sanitizeInput';

export type TPosts = ReturnType<typeof usePosts>;

export function usePosts() {
    const { postId } = useParams<{ postId: string }>();
    const [newTitle, setNewTitle] = useState<string>('');
    const dispatch = useDispatch();

    const { data: post, isLoading: isPostLoading } = useGetPostByIdQuery(
        Number(postId)
    );
    const { data: comments, isLoading: isCommentsLoading } =
        useGetCommentsByPostQuery(Number(postId));

    const [updatePostTitle, { data: title, isLoading: isUpdateLoading }] =
        useUpdatePostTitleMutation();

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitizedValue = sanitizeInput(e.target.value);
        setNewTitle(sanitizedValue);
    };

    const handleUpdateTitle = async () => {
        if (post) {
            const updatedPost = await updatePostTitle({
                postId: post.id,
                newTitle,
            });
            dispatch(updatePost(updatedPost.data!));
        }
    };

    useEffect(() => {
        if (post) {
            dispatch(updatePost(post));
        }
    }, [post, dispatch]);

    return {
        post,
        title,
        newTitle,
        handleTitleChange,
        handleUpdateTitle,
        isUpdateLoading,
        comments,
        isPostLoading,
        isCommentsLoading,
    };
}
