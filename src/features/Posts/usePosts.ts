import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSanitizeInput } from '../../hook/useSanitizeInput';
import { AppDispatch, RootState } from '../../store/store';
import {
    fetchPostById,
    fetchPosts,
    updatePostTitle,
} from '../../store/thunks/postsThunks';

export type TPosts = ReturnType<typeof usePosts>;

/**
 * A React hook that provides functionality related to managing posts in an application.
 *
 * This hook is responsible for:
 * - Fetching a post by its ID using the `useGetPostByIdQuery` hook.
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
 * - `isPostLoading`: A boolean indicating whether the post data is being fetched.
 * - `isEditingTitle`
 * - `handleEditTitleClick`
 */
export const usePosts = () => {
    const { postId } = useParams<{ postId: string }>();
    const [newTitle, setNewTitle] = useState<string>('');
    const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);

    const sanitizeInput = useSanitizeInput();

    const dispatch: AppDispatch = useDispatch();
    const { currentPost, isLoading, error } = useSelector(
        (state: RootState) => state.posts
    );

    const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const sanitizedValue = sanitizeInput(e.target.value);
        setNewTitle(sanitizedValue);
    };

    const handleUpdateTitleClick = useCallback(async () => {
        if (currentPost && newTitle !== currentPost.title) {
            dispatch(updatePostTitle({ postId: currentPost.id, newTitle }));
            setNewTitle('');
            setIsEditingTitle(false)
        }
    }, [newTitle, currentPost, dispatch]);

    const handleEditTitleClick = () => {
        setIsEditingTitle(!isEditingTitle);
    };

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
        if (postId) {
            dispatch(fetchPostById(Number(postId)));
        }
    }, [postId, dispatch]);

    return {
        post: currentPost,
        newTitle,
        isLoading,
        error,
        isEditingTitle,
        handleEditTitleClick,
        handleTitleInputChange,
        handleUpdateTitleClick,
    };
};
