import { ErrorAlert } from '../../components';
import { PostTitle } from './components';
import { usePosts } from './usePosts';

/**
 * Renders the Posts component, which displays a post and its comments.
 *
 * The component fetches the post and comments data, and handles updating the post title.
 * If the data is still loading or the post is not found, appropriate loading or error components are rendered.
 *
 * @returns {JSX.Element | null} The rendered Posts component.
 */
export function Posts(): JSX.Element | null {
    const {
        post,
        newTitle,
        isLoading,
        error,
        isEditingTitle,
        handleEditTitleClick,
        handleTitleInputChange,
        handleUpdateTitleClick,
        handleTitleInputKeyDown,
    } = usePosts();

    if (error) {
        return <ErrorAlert message={error} />;
    }

    if (!post) {
        return null;
    }

    return (
        <section>
            <PostTitle
                post={post}
                newTitle={newTitle}
                isLoading={isLoading}
                isEditingTitle={isEditingTitle}
                handleEditTitleClick={handleEditTitleClick}
                handleTitleInputChange={handleTitleInputChange}
                handleUpdateTitleClick={handleUpdateTitleClick}
                handleTitleInputKeyDown={handleTitleInputKeyDown}
            />
        </section>
    );
}
