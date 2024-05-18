import { useParams } from 'react-router-dom';
import { useGetCommentsByPostQuery } from '../../services/apiService';


/**
 * A custom React hook that fetches and returns comments for a given post ID.
 *
 * @returns An object containing the fetched comments and a loading state.
 */
export function useComments() {
    const { postId } = useParams<{ postId: string }>();

    const { data: comments, isLoading } = useGetCommentsByPostQuery(
        Number(postId),
        {
            selectFromResult: ({ data, isLoading }) => ({
                data,
                isLoading,
            }),
        }
    );

    return {
        comments,
        isLoading,
    };
}
