import { Button, Card, Modal } from 'antd';
import { UserInfo, UserPosts } from '.';
import { IUser } from '../../../types/User';
import { useUserPosts } from '../useUserPosts';

export function UserListItem({ user }: { user: IUser }): JSX.Element {
    const props = useUserPosts(user.id);

    const { handleModalOpen, isModalOpen, handleModalClose } = props;

    return (
        <>
            <Card
                key={`UserListItem__${user.id}`}
                actions={[
                    <Button onClick={handleModalOpen}>
                        Open posts by {user.username}
                    </Button>,
                ]}
                style={{ marginBottom: '1rem' }}
            >
                <UserInfo user={user} />
            </Card>
            <Modal
                title={`Posts by ${user.username}`}
                open={isModalOpen}
                onCancel={handleModalClose}
                footer={null}
                maskClosable={true}
                closable={true}
                onOk={handleModalClose}
                width={800}
                style={{ top: 30 }}
            >
                <UserPosts {...props} />
            </Modal>
        </>
    );
}
