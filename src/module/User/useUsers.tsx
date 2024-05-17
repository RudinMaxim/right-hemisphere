import { Alert } from 'antd';
import { ErrorAlert, Loader } from '../../components';
import { useGetUsersQuery } from '../../services/apiService';
import { isErrorWithMessage } from '../../utils/isErrorWithMessage';

const renderError = (error: string) => <ErrorAlert message={error} />;
const renderLoader = () => <Loader />;
const renderEmptyMessage = () => (
    <Alert message={'No users found'} type="warning" showIcon />
);

export const useUsers = () => {
    const {
        data: users,
        isLoading: isLoadingUsers,
        error: usersError,
    } = useGetUsersQuery();

    if (isErrorWithMessage(usersError)) {
        return {
            users: null,
            isLoadingUsers: false,
            error: renderError(usersError.message),
        };
    }

    if (isLoadingUsers) {
        return {
            users: null,
            isLoadingUsers: true,
            error: renderLoader(),
        };
    }

    if (!users || users.length === 0) {
        return {
            users: null,
            isLoadingUsers: false,
            error: renderEmptyMessage(),
        };
    }

    return {
        users,
        isLoadingUsers: false,
        error: null,
    };
};
