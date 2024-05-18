import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert } from '../../components';
import { useGetPostsByUserQuery } from '../../services/apiService';
import { IPost } from '../../types/Post';
import { isErrorWithMessage } from '../../utils/isErrorWithMessage';

export type TUserPosts = ReturnType<typeof useUserPosts>;

const renderError = (error: string) => <ErrorAlert message={error} />;

/**
 * A custom React hook that manages the state and behavior of a user's posts.
 *
 * @param userId - The ID of the user whose posts should be fetched.
 * @returns An object containing the following properties:
 *   - posts: The list of posts for the user, or null if there was an error.
 *   - isLoading: A boolean indicating whether the posts are currently being fetched.
 *   - isModalOpen: A boolean indicating whether the post modal is currently open.
 *   - handleModalOpen: A function to open the post modal.
 *   - handleModalClose: A function to close the post modal.
 *   - handlePostClick: A function to handle clicking on a post, which navigates to the post's message page and closes the modal.
 *   - error: The error message if there was an error fetching the posts, or null if there was no error.
 */
export const useUserPosts = (userId: number) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { data: posts, isLoading, error } = useGetPostsByUserQuery(userId);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const navigate = useNavigate();

    const handlePostClick = (post: IPost) => {
        navigate(`/right-hemisphere/message/${post.id}`);
        handleModalClose();
    };

    if (isErrorWithMessage(error)) {
        return {
            posts: null,
            isLoading: false,
            isModalOpen: false,
            handleModalOpen,
            handleModalClose,
            handlePostClick,
            error: renderError(error.message),
        };
    }

    return {
        posts,
        isLoading,
        isModalOpen,
        handleModalOpen,
        handleModalClose,
        handlePostClick,
        error: null,
    };
};
