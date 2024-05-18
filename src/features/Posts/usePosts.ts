import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSanitizeInput } from '../../hook/useSanitizeInput';
import {
    useGetCommentsByPostQuery,
    useGetPostByIdQuery,
    useUpdatePostTitleMutation,
} from '../../services/apiService';
import { updatePost } from '../../store/slice/postsSlice';

export type TPosts = ReturnType<typeof usePosts>;

/**
 * A React hook that provides functionality related to managing posts in an application.
 *
 * This hook is responsible for:
 * - Fetching a post by its ID using the `useGetPostByIdQuery` hook.
 * - Fetching comments for a post using the `useGetCommentsByPostQuery` hook.
 * - Updating the title of a post using the `useUpdatePostTitleMutation` hook.
 * - Handling changes to the new post title in the component state.
 * - Dispatching actions to update the post data in the application state.
 *
 * @returns An object containing the following properties:
 * - `post`: The post data fetched by the `useGetPostByIdQuery` hook.
 * - `title`: The updated post title, if any.
 * - `newTitle`: The current value of the new post title in the component state.
 * - `handleTitleChange`: A function to handle changes to the new post title input.
 * - `handleUpdateTitle`: A function to update the post title.
 * - `isUpdateLoading`: A boolean indicating whether the post title update is in progress.
 * - `comments`: The comments data fetched by the `useGetCommentsByPostQuery` hook.
 * - `isPostLoading`: A boolean indicating whether the post data is being fetched.
 * - `isCommentsLoading`: A boolean indicating whether the comments data is being fetched.
 */
export const usePosts = () => {
    const { postId } = useParams<{ postId: string }>();
    const dispatch = useDispatch();

    const [newTitle, setNewTitle] = useState('');

    const { data: post, isLoading: isPostLoading } = useGetPostByIdQuery(
        Number(postId),
        {
            selectFromResult: ({ data, isLoading }) => ({
                data,
                isLoading,
            }),
        }
    );

    const { data: comments, isLoading: isCommentsLoading } =
        useGetCommentsByPostQuery(Number(postId), {
            selectFromResult: ({ data, isLoading }) => ({
                data,
                isLoading,
            }),
        });

    const [
        updatePostTitleMutation,
        { data: updatedTitle, isLoading: isUpdateLoading },
    ] = useUpdatePostTitleMutation();

    const sanitizeInput = useSanitizeInput();

    const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitizedValue = sanitizeInput(e.target.value);
        setNewTitle(sanitizedValue);
    };

    const handleUpdateTitleClick = useCallback(async () => {
        if (post && newTitle !== post.title) {
            const updatedPost = await updatePostTitleMutation({
                postId: post.id,
                newTitle,
            }).unwrap();
            dispatch(updatePost(updatedPost));
            setNewTitle('');
        }
    }, [newTitle, post, dispatch, updatePostTitleMutation]);

    useEffect(() => {
        if (post) {
            dispatch(updatePost(post));
        }
    }, [post, dispatch]);

    return {
        post,
        title: updatedTitle,
        newTitle,
        handleTitleInputChange,
        handleUpdateTitleClick,
        isUpdateLoading,
        comments,
        isPostLoading,
        isCommentsLoading,
    };
};
