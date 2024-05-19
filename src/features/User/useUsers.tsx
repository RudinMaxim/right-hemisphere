import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchUsers } from '../../store/thunks/userThunks';

export type TUsers = ReturnType<typeof useUsers>;

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
    const { users, isLoading, error } = useSelector(
        (state: RootState) => state.users
    );
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return {
        users,
        isLoading,
        error,
    };
};
