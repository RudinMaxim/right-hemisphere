import { Button, Card, Modal } from 'antd';
import { UserInfo, UserPosts } from '.';
import { IUser } from '../../../types/User';
import { useUserPosts } from '../useUserPosts';

/**
 * Renders a user list item component that displays a user's information and a button to open a modal
 * with the user's posts.
 *
 * @param {Object} props - The component props.
 * @param {IUser} props.user - The user object to display.
 * @returns {JSX.Element} The rendered user list item component.
 */
export function UserListItem({ user }: { user: IUser }): JSX.Element {
    const { username, name, id } = user;

    const {
        posts,
        isLoading,
        error,
        isModalOpen,
        handleModalOpen,
        handleModalClose,
        handlePostClick,
    } = useUserPosts(id);

    return (
        <>
            <Card
                key={`UserListItem__${id}`}
                actions={[
                    <Button onClick={handleModalOpen}>
                        Open posts by {username ?? name ?? 'unknown'}
                    </Button>,
                ]}
                style={{ marginBottom: '1rem' }}
            >
                <UserInfo user={user} />
            </Card>
            <Modal
                title={`Posts by ${username}`}
                open={isModalOpen}
                onCancel={handleModalClose}
                footer={null}
                maskClosable={true}
                closable={true}
                onOk={handleModalClose}
                width={800}
                style={{ top: 30 }}
            >
                <UserPosts
                    posts={posts}
                    isLoading={isLoading}
                    error={error}
                    handlePostClick={handlePostClick}
                />
            </Modal>
        </>
    );
}
