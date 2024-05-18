import { Alert, Avatar, Card, List, Space, Typography } from 'antd';
import { Loader } from '../../components';
import { IComment } from '../../types/Comment';
import { initialsUser } from '../../utils/initialsUser';
import { useComments } from './useComments';

const { Title } = Typography;

export function Comments(): JSX.Element {
    const { comments, isLoading } = useComments();

    if (isLoading) {
        return <Loader />;
    }

    if (!comments || comments.length === 0) {
        return <Alert message="NotFound" type="warning" showIcon />;
    }

    return (
        <section>
            <Title level={3} style={{ marginBottom: 16 }}>
                Comments
            </Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <List
                    dataSource={comments}
                    renderItem={(comment) => <CommentsItem comment={comment} />}
                />
            </Space>
        </section>
    );
}

/**
 * Renders a single comment item with the user's avatar, name, and comment body.
 *
 * @param {Object} props - The component props.
 * @param {IComment} props.comment - The comment data to display.
 * @returns {React.ReactElement} - The rendered comment item.
 */
function CommentsItem({ comment }: { comment: IComment }): React.JSX.Element {
    return (
        <Card style={{ marginBottom: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar>{initialsUser(comment.name)}</Avatar>}
                title={comment.name}
                description={comment.body}
            />
        </Card>
    );
}
