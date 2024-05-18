import { Alert, Avatar, Card, List, Space, Typography } from 'antd';
import { Loader } from '../../components';
import { IComment } from '../../types/Comment';
import { initialsUser } from '../../utils/initialsUser';
import { useComments } from './useComments';

const { Title } = Typography;

/**
 * Renders a section displaying a list of comments.
 *
 * This component fetches the comments from the `useComments` hook and renders them in a list. If the comments are still loading, a loader is displayed. If there is an error fetching the comments, an error alert is shown. If there are no comments, a warning alert is displayed.
 *
 * @returns {JSX.Element | null} The rendered comments section.
 */
export function Comments(): JSX.Element | null {
    const { comments, error, isLoading } = useComments();

    if (error) {
        return <Alert message={error} type="error" showIcon />;
    }

    if (isLoading) {
        return <Loader />;
    }

    if (!comments || comments.length === 0) {
        return null;
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
