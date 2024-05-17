import { useState } from 'react';
import { ErrorAlert } from '../../components';
import { useGetPostsByUserQuery } from '../../services/apiUser';

export const useUserPosts = (userId: number) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: posts, isLoading, error } = useGetPostsByUserQuery(userId);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    if (error && 'message' in error) {
        return {
            posts: null,
            isLoading: false,
            isModalOpen: false,
            handleModalOpen,
            handleModalClose,
            error: <ErrorAlert message={error.message} />,
        };
    }

    return {
        posts,
        isLoading,
        isModalOpen,
        handleModalOpen,
        handleModalClose,
        error: null,
    };
};
