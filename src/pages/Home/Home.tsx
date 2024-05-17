import { Alert, Flex } from 'antd';
import { ErrorAlert, Loader, UserList } from '../../components';
import { useGetUsersQuery } from '../../services/apiUser';

export function Home() {
    const {
        data: users,
        isLoading: isLoadingUsers,
        error: usersError,
    } = useGetUsersQuery();

    if (usersError && 'message' in usersError) {
        return <ErrorAlert message={usersError.message} />;
    }

    if (isLoadingUsers) {
        return <Loader />;
    }

    if (!users || users.length === 0) {
        return <Alert message={'No users found'} type="warning" showIcon />;
    }

    return (
        <section>
            <HomeTitle title="Users" />
            <UserList users={users ?? []} />
        </section>
    );
}

function HomeTitle({ title }: { title: string }) {
    return (
        <Flex justify="center" align="middle">
            <h1>{title}</h1>
        </Flex>
    );
}
