import { List } from 'antd';
import { Loader } from '../../components';
import { UserListItem } from './components';
import { useUsers } from './useUsers';

/**
 * Renders a list of users, handling loading and error states.
 *
 * @returns The rendered user list, or null if there are no users.
 */
export function Users(): JSX.Element | null {
    const { users, isLoadingUsers, error } = useUsers();

    if (error) return <>{error}</>;

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
