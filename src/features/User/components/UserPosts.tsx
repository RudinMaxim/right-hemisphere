import { Card, List, Skeleton, Typography } from 'antd';
import { ErrorAlert } from '../../../components';
import { TUserPosts } from '../useUserPosts';

const { Meta } = Card;
const { Text } = Typography;

/**
 * Renders a list of user posts with the ability to handle post clicks.
 *
 * @param props - The props for the UserPosts component.
 * @param props.posts - The list of user posts to display.
 * @param props.isLoading - Indicates whether the posts are currently being loaded.
 * @param props.error - Any error that occurred while loading the posts.
 * @param props.handlePostClick - A function to handle clicks on individual posts.
 * @returns The rendered UserPosts component.
 */
export function UserPosts(
    props: Pick<TUserPosts, 'posts' | 'isLoading' | 'error' | 'handlePostClick'>
): JSX.Element | null {
    const { posts, isLoading, error, handlePostClick } = props;

    if (error) {
        return <ErrorAlert message={error as string} />;
    }

    if (isLoading) {
        return (
            <>
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </>
        );
    }

    if (!posts || posts.length === 0) {
        return null;
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
                    style={{ marginBottom: '1rem', cursor: 'pointer' }}
                >
                    <Meta
                        title={<Text strong>{post.title}</Text>}
                        description={post.body}
                    />
                </Card>
            )}
        />
    );
}
