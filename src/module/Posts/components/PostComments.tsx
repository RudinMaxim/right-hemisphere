import { Avatar, Card, List, Typography } from 'antd';
import { IComment } from '../../../types/Comment';
import { initialsUser } from '../../../utils/initialsUser';

const { Title } = Typography;

/**
 * Renders a list of comments for a post.
 *
 * @param comments - An array of comment objects, each with a `name` and `body` property.
 * @returns A React component that displays the list of comments.
 */
export function PostComments({
    comments,
}: {
    comments: IComment[] | undefined;
}): React.JSX.Element {
    if (!comments) {
        return <div>Not faund comments</div>;
    }

    return (
        <>
            <Title level={3}>Comments</Title>
            <List
                dataSource={comments}
                renderItem={(comment) => (
                    <Card>
                        <List.Item.Meta
                            avatar={
                                <Avatar>{initialsUser(comment.name)}</Avatar>
                            }
                            title={comment.name}
                            description={comment.body}
                        />
                    </Card>
                )}
            />
        </>
    );
}
