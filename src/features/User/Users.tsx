import { List } from 'antd';
import { ErrorAlert, Loader } from '../../components';
import { UserListItem } from './components';
import { useUsers } from './useUsers';

/**
 * Renders a list of users.
 *
 * This component fetches the list of users from the `useUsers` hook, and renders them using the `List` component from Ant Design.
 * If there is an error fetching the users, it will display the error message. If the users are still loading, it will display a loader.
 *
 * @returns {JSX.Element | null} The rendered list of users, or null if there are no users or an error occurred.
 */
export function Users(): JSX.Element | null {
    const { users, isLoading, error } = useUsers();

    if (error) {
        return <ErrorAlert message={error} />;
    }

    if (isLoading) {
        return <Loader />;
    }

    if (!users || users.length === 0) {
        return null;
    }

    return (
        <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user) => <UserListItem user={user} />}
        />
    );
}
