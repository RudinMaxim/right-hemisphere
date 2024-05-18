import { Loader } from '../../components';
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
        isPostLoading,
        post,
        title,
        newTitle,
        handleTitleInputChange,
        handleUpdateTitleClick,
        isUpdateLoading,
    } = usePosts();

    if (isPostLoading) {
        return <Loader />;
    }

    if (!post) {
        return <NotFoundPage />;
    }

    return (
        <section>
            <PostTitle
                post={post}
                title={title}
                newTitle={newTitle}
                handleTitleInputChange={handleTitleInputChange}
                handleUpdateTitleClick={handleUpdateTitleClick}
                isUpdateLoading={isUpdateLoading}
            />
        </section>
    );
}
