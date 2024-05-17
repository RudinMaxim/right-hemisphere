import { List } from 'antd';
import { Loader } from '../../components';
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
    const { users, isLoadingUsers, error } = useUsers();

    if (error) return error;

    if (isLoadingUsers) return <Loader />;

    if (!users) return null;

    return (
        <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user) => <UserListItem user={user} />}
        />
    );
}
