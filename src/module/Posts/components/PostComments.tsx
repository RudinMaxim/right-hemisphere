import { Alert, Avatar, Card, List, Space, Typography } from 'antd';
import { Loader } from '../../../components';
import { IComment } from '../../../types/Comment';
import { initialsUser } from '../../../utils/initialsUser';

const { Title } = Typography;

interface PostCommentsProps {
    comments: IComment[] | undefined;
    isLoading: boolean;
}

/**
 * Renders a list of comments for a post.
 *
 * @param comments - An array of comment objects, each with a `name` and `body` property.
 * @returns A React component that displays the list of comments.
 */
export function PostComments({
    comments,
    isLoading,
}: PostCommentsProps): React.JSX.Element {
    if (isLoading) {
        return <Loader />;
    }

    if (!comments || comments.length === 0) {
        return <Alert message="NotFound" type="warning" showIcon />;
    }

    return (
        <>
            <Title level={3} style={{ marginBottom: 16 }}>
                Comments
            </Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <List
                    dataSource={comments}
                    renderItem={(comment) => <CommentsItem comment={comment} />}
                />
            </Space>
        </>
    );
}

function CommentsItem({ comment }: { comment: IComment }) {
    return (
        <Card>
            <List.Item.Meta
                avatar={<Avatar>{initialsUser(comment.name)}</Avatar>}
                title={comment.name}
                description={comment.body}
            />
        </Card>
    );
}
