import { Loader } from '../../components';
import { PostComments, PostTitle } from './components';
import { usePosts } from './usePosts';

export function Posts() {
    const props = usePosts();

    const { isPostLoading, isCommentsLoading, comments } = props;

    if (isPostLoading || isCommentsLoading) {
        return <Loader />;
    }
    
    return (
        <div>
            <PostTitle {...props} />
            <PostComments comments={comments} />
        </div>
    );
}
