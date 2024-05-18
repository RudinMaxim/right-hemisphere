import { Alert } from 'antd';
import { ErrorAlert, Loader } from '../../components';
import { useGetUsersQuery } from '../../services/apiService';
import { isErrorWithMessage } from '../../utils/isErrorWithMessage';

const renderErrorMessage = (error: string) => <ErrorAlert message={error} />;
const renderLoadingIndicator = () => <Loader />;
const renderNoUsersMessage = () => (
    <Alert message={'No users found'} type="warning" showIcon />
);

/**
 * A custom React hook that fetches and manages user data.
 *
 * This hook uses the `useGetUsersQuery` hook to fetch user data, and returns an object with the following properties:
 *
 * - `users`: an array of user objects, or `null` if there is an error or no data is available
 * - `isLoadingUsers`: a boolean indicating whether the user data is currently being loaded
 * - `error`: an error message, or `null` if there is no error
 *
 * The hook handles various error and loading states, and returns the appropriate data and state based on the current state of the user data fetch.
 */
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
            error: renderErrorMessage(usersError.message),
        };
    }

    if (isLoadingUsers) {
        return {
            users: null,
            isLoadingUsers: true,
            error: renderLoadingIndicator(),
        };
    }

    if (!users || users.length === 0) {
        return {
            users: null,
            isLoadingUsers: false,
            error: renderNoUsersMessage(),
        };
    }

    return {
        users,
        isLoadingUsers: false,
        error: null,
    };
};
