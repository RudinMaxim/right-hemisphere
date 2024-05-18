import { Loader } from '../../components';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { PostComments, PostTitle } from './components';
import { usePosts } from './usePosts';

export function Posts() {
    const {
        isPostLoading,
        isCommentsLoading,
        post,
        title,
        newTitle,
        handleTitleInputChange,
        handleUpdateTitleClick,
        isUpdateLoading,
        comments,
    } = usePosts();

    if (isPostLoading || isCommentsLoading) {
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
            <PostComments comments={comments} isLoading={isCommentsLoading} />
        </section>
    );
}
