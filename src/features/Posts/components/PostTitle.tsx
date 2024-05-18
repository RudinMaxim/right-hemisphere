import { Button, Card, Input, Skeleton, Typography } from 'antd';
import { TPosts } from '../usePosts';

const { Title, Paragraph } = Typography;
const MAX_TITLE_LENGTH = 100;

interface PostTitleProps
    extends Pick<TPosts, 'post' | 'isLoading' | 'newTitle' | 'isLoading'> {
    handleTitleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleUpdateTitleClick: () => void;
}

/**
 * Renders a post title card with a title input and update button.
 *
 * @param post - The post object containing the post data.
 * @param newTitle - The new title entered by the user.
 * @param isLoading - A flag indicating whether the title update is in progress.
 * @param handleTitleInputChange - A function to handle changes to the title input.
 * @param handleUpdateTitleClick - A function to handle clicks on the update title button.
 * @returns A JSX.Element representing the post title card.
 */
export function PostTitle({
    post,
    newTitle,
    isLoading,
    handleTitleInputChange,
    handleUpdateTitleClick,
}: PostTitleProps): JSX.Element {
    return (
        <Card
            title={
                <Title level={2} style={{ textAlign: 'center' }}>
                    {isLoading ? <Skeleton.Input active /> : <>{post?.title}</>}
                </Title>
            }
            style={{ marginBottom: '20px' }}
            actions={[
                <div
                    key="actions"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                    }}
                >
                    <TitleInput
                        newTitle={newTitle}
                        handleTitleInputChange={handleTitleInputChange}
                        isLoading={isLoading}
                    />
                    <UpdateTitleButton
                        newTitle={newTitle}
                        post={post}
                        handleUpdateTitleClick={handleUpdateTitleClick}
                        isLoading={isLoading}
                    />
                </div>,
            ]}
        >
            <Paragraph style={{ textAlign: 'center' }}>{post?.body}</Paragraph>
        </Card>
    );
}

/**
 * Renders an input field for updating the title of a post.
 *
 * @param newTitle - The current title of the post.
 * @param handleTitleInputChange - A function to handle changes to the title input.
 * @param isLoading - A boolean indicating whether an update is currently in progress.
 */
function TitleInput({
    newTitle,
    handleTitleInputChange,
    isLoading,
}: Pick<
    PostTitleProps,
    'newTitle' | 'handleTitleInputChange' | 'isLoading'
>): JSX.Element {
    return (
        <Input
            value={newTitle}
            onChange={handleTitleInputChange}
            placeholder="Enter new title"
            style={{ maxWidth: '300px', margin: '0 1rem' }}
            maxLength={MAX_TITLE_LENGTH}
            disabled={isLoading}
        />
    );
}

/**
 * A button component that updates the title of a post.
 *
 * @param newTitle - The new title to be set for the post.
 * @param post - The post object that the title will be updated for.
 * @param handleUpdateTitleClick - A function that is called when the button is clicked to update the title.
 * @param isLoading - A boolean indicating whether the title update is currently in progress.
 */
export function UpdateTitleButton({
    newTitle,
    post,
    handleUpdateTitleClick,
    isLoading,
}: Pick<
    PostTitleProps,
    'newTitle' | 'post' | 'handleUpdateTitleClick' | 'isLoading'
>): JSX.Element {
    return (
        <Button
            type="primary"
            onClick={handleUpdateTitleClick}
            loading={isLoading}
            disabled={isLoading || !newTitle || newTitle === post?.title}
        >
            Update Title
        </Button>
    );
}
