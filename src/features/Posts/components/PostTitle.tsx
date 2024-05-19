import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Card, Input, Skeleton, Typography } from 'antd';
import { MAX_TITLE_LENGTH } from '../../../constants/title';
import { TPosts } from '../usePosts';

const { Title, Paragraph } = Typography;

interface PostTitleProps
    extends Pick<
        TPosts,
        | 'post'
        | 'isLoading'
        | 'newTitle'
        | 'isLoading'
        | 'handleEditTitleClick'
        | 'isEditingTitle'
        | 'handleTitleInputKeyDown'
    > {
    handleTitleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleUpdateTitleClick: () => void;
}

/**
 * Renders a post title card with a title input and update button.
 *
 * @param post - The post object containing the post data.
 * @param newTitle - The new title entered by the user.
 * @param isLoading - A flag indicating whether the title update is in progress.
 * @param isEditingTitle - A state whether the editing window is open
 * @param handleTitleInputChange - A function to handle changes to the title input.
 * @param handleUpdateTitleClick - A function to handle clicks on the update title button.
 * @param handleEditTitleClick - A function to handle clicks on the open to update title button
 * @returns A JSX.Element representing the post title card.
 */
export function PostTitle({
    post,
    newTitle,
    isLoading,
    handleTitleInputChange,
    handleUpdateTitleClick,
    isEditingTitle,
    handleEditTitleClick,
    handleTitleInputKeyDown
}: PostTitleProps): JSX.Element {
    const renderActions = () => (
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
            {isEditingTitle && (
                <TitleInput
                    newTitle={newTitle}
                    handleTitleInputChange={handleTitleInputChange}
                    isLoading={isLoading}
                    handleTitleInputKeyDown={handleTitleInputKeyDown}
                />
            )}
            {isEditingTitle ? (
                <UpdateTitleButton
                    newTitle={newTitle}
                    post={post}
                    isLoading={isLoading}
                    handleUpdateTitleClick={handleUpdateTitleClick}
                />
            ) : (
                <Button
                    type="primary"
                    onClick={handleEditTitleClick}
                    icon={<EditOutlined />}
                >
                    Change title
                </Button>
            )}
        </div>
    );

    return (
        <Card
            title={
                <Title level={2} style={{ textAlign: 'center' }}>
                    {isLoading ? <Skeleton.Input active /> : <>{post?.title}</>}
                </Title>
            }
            style={{ marginBottom: '20px' }}
            actions={[renderActions()]}
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
    handleTitleInputKeyDown,
    isLoading,
}: Pick<
    PostTitleProps,
    'newTitle' | 'handleTitleInputChange' | 'isLoading' | 'handleTitleInputKeyDown'
>): JSX.Element {
    
    return (
        <Input
            value={newTitle}
            onChange={handleTitleInputChange}
            onKeyDown={handleTitleInputKeyDown}
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
            icon={<SaveOutlined />}
        >
            Update Title
        </Button>
    );
}
