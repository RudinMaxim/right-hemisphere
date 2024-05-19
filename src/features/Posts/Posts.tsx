import { ErrorAlert } from '../../components';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { PostTitle } from './components';
import { usePosts } from './usePosts';

/**
 * Renders the Posts component, which displays a post and its comments.
 *
 * The component fetches the post and comments data, and handles updating the post title.
 * If the data is still loading or the post is not found, appropriate loading or error components are rendered.
 *
 * @returns {JSX.Element} The rendered Posts component.
 */
export function Posts(): JSX.Element {
    const {
        post,
        newTitle,
        handleTitleInputChange,
        handleUpdateTitleClick,
        isLoading,
        error,
    } = usePosts();

    if (error) {
        return <ErrorAlert message={error} />;
    }

    if (!post) {
        return <NotFoundPage />;
    }

    return (
        <section>
            <PostTitle
                post={post}
                newTitle={newTitle}
                isLoading={isLoading}
                handleTitleInputChange={handleTitleInputChange}
                handleUpdateTitleClick={handleUpdateTitleClick}
            />
        </section>
    );
}
