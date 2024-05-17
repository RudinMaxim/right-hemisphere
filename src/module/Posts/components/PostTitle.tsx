import { Button, Card, Input, Skeleton, Typography } from 'antd';
import { TPosts } from '../usePosts';

const { Title, Paragraph } = Typography;
const MAX_TITLE_LENGTH = 100;

export function PostTitle({
    post,
    newTitle,
    title,
    handleTitleChange,
    handleUpdateTitle,
    isUpdateLoading,
}: TPosts) {
    return (
        <Card
            title={
                <Title level={2} style={{ textAlign: 'center' }}>
                    {isUpdateLoading ? (
                        <Skeleton.Input />
                    ) : (
                        <>{title?.title ?? post?.title}</>
                    )}
                </Title>
            }
            style={{ marginBottom: '20px' }}
            actions={[
                <Input
                    value={newTitle}
                    onChange={handleTitleChange}
                    placeholder="Enter new title"
                    style={{ width: '300px' }}
                    maxLength={MAX_TITLE_LENGTH}
                />,
                <Button
                    type="primary"
                    onClick={handleUpdateTitle}
                    loading={isUpdateLoading}
                    disabled={isUpdateLoading || !newTitle}
                >
                    Update Title
                </Button>,
            ]}
        >
            <Paragraph style={{ textAlign: 'center' }}>{post?.body}</Paragraph>
        </Card>
    );
}
