import { Alert } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorAlert, Loader } from '../../components';
import { AppDispatch, RootState } from '../../store/store';
import { fetchUsers } from '../../store/thunks/userThunks';

const renderErrorMessage = (error: string) => <ErrorAlert message={error} />;
const renderLoadingIndicator = () => <Loader />;
const renderNoUsersMessage = () => (
    <Alert message={'No users found'} type="warning" showIcon />
);

/**
 * A custom React hook that manages the state and fetching of user data.
 *
 * This hook is responsible for:
 * - Fetching the list of users from the server using the `fetchUsers` action creator.
 * - Storing the fetched users in the Redux store.
 * - Providing access to the users, loading state, and any errors that may occur during the fetch.
 *
 * @returns An object containing the fetched users, a loading flag, and any error messages.
 */
export const useUsers = () => {
    const {
        users,
        isLoading: isLoadingUsers,
        error,
    } = useSelector((state: RootState) => state.users);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (error) {
        return {
            users: null,
            isLoadingUsers: false,
            error: renderErrorMessage(error),
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
