import { Card, List, Skeleton } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IPost } from '../../../types/Post';
import { useUserPosts } from '../useUserPosts';

const { Meta } = Card;

export function UserPosts({
    userId,
    onModalClose,
}: {
    userId: number;
    onModalClose: () => void;
}): JSX.Element {
    const { posts, isLoading, error } = useUserPosts(userId);

    const navigate = useNavigate();

    const handlePostClick = (post: IPost) => {
        navigate(`/message/${post.id}`);
        onModalClose();
    };

    if (error) {
        return <>{error}</>;
    }

    if (isLoading) {
        return (
            <div>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </div>
        );
    }

    return (
        <List
            itemLayout="horizontal"
            dataSource={posts}
            renderItem={(post) => (
                <Card
                    key={`UserPosts__${post.id}`}
                    onClick={() => handlePostClick(post)}
                    hoverable
                    style={{ marginBottom: '1rem' }}
                >
                    {isLoading ? (
                        <Skeleton active />
                    ) : (
                        <Meta title={post.title} description={post.body} />
                    )}
                </Card>
            )}
        />
    );
}
