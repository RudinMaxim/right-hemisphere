import { useState } from 'react';
import { ErrorAlert } from '../../components';
import { useGetPostsByUserQuery } from '../../services/apiService';
import { isErrorWithMessage } from '../../utils/isErrorWithMessage';

export type TUserPosts = ReturnType<typeof useUserPosts>;

const renderError = (error: string) => <ErrorAlert message={error} />;

export const useUserPosts = (userId: number) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { data: posts, isLoading, error } = useGetPostsByUserQuery(userId);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    if (isErrorWithMessage(error)) {
        return {
            posts: null,
            isLoading: false,
            isModalOpen: false,
            handleModalOpen,
            handleModalClose,
            error: renderError(error.message),
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
