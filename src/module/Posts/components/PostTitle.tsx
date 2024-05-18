import { Button, Card, Input, Skeleton, Typography } from 'antd';
import { TPosts } from '../usePosts';

const { Title, Paragraph } = Typography;
const MAX_TITLE_LENGTH = 100;

interface PostTitleProps
    extends Pick<TPosts, 'post' | 'title' | 'newTitle' | 'isUpdateLoading'> {
    handleTitleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleUpdateTitleClick: () => void;
}

export function PostTitle({
    post,
    title,
    newTitle,
    isUpdateLoading,
    handleTitleInputChange,
    handleUpdateTitleClick,
}: PostTitleProps): JSX.Element {
    return (
        <Card
            title={
                <Title level={2} style={{ textAlign: 'center' }}>
                    {isUpdateLoading ? (
                        <Skeleton.Input active />
                    ) : (
                        <>{title?.title ?? post?.title}</>
                    )}
                </Title>
            }
            style={{ marginBottom: '20px' }}
            actions={[
                <TitleInput
                    key="input"
                    newTitle={newTitle}
                    handleTitleInputChange={handleTitleInputChange}
                    isUpdateLoading={isUpdateLoading}
                />,
                <UpdateTitleButton
                    key="button"
                    newTitle={newTitle}
                    post={post}
                    handleUpdateTitleClick={handleUpdateTitleClick}
                    isUpdateLoading={isUpdateLoading}
                />,
            ]}
        >
            <Paragraph style={{ textAlign: 'center' }}>{post?.body}</Paragraph>
        </Card>
    );
}

const TitleInput = ({
    newTitle,
    handleTitleInputChange,
    isUpdateLoading,
}: Pick<
    PostTitleProps,
    'newTitle' | 'handleTitleInputChange' | 'isUpdateLoading'
>) => (
    <Input
        value={newTitle}
        onChange={handleTitleInputChange}
        placeholder="Enter new title"
        style={{ width: '300px' }}
        maxLength={MAX_TITLE_LENGTH}
        disabled={isUpdateLoading}
    />
);

const UpdateTitleButton = ({
    newTitle,
    post,
    handleUpdateTitleClick,
    isUpdateLoading,
}: Pick<
    PostTitleProps,
    'newTitle' | 'post' | 'handleUpdateTitleClick' | 'isUpdateLoading'
>) => (
    <Button
        type="primary"
        onClick={handleUpdateTitleClick}
        loading={isUpdateLoading}
        disabled={isUpdateLoading || !newTitle || newTitle === post?.title}
    >
        Update Title
    </Button>
);
