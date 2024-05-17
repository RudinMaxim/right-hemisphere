import { Alert } from 'antd';
import { ErrorAlert, Loader } from '../../components';
import { useGetUsersQuery } from '../../services/apiUser';

export const useUsers = () => {
    const { data: users, isLoading: isLoadingUsers, error: usersError } = useGetUsersQuery();

    if (usersError && 'message' in usersError) {
        return {
            users: null,
            isLoadingUsers: false,
            error: <ErrorAlert message={usersError.message} />,
        };
    }

    if (isLoadingUsers) {
        return {
            users: null,
            isLoadingUsers: true,
            error: <Loader />,
        };
    }

    if (!users || users.length === 0) {
        return {
            users: null,
            isLoadingUsers: false,
            error: <Alert message={'No users found'} type="warning" showIcon />,
        };
    }

    return {
        users,
        isLoadingUsers: false,
        error: null,
    };
};