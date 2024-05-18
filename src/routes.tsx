import { createBrowserRouter } from 'react-router-dom';
import { HomePage, PostPage } from './pages';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
    {
        path: '/right-hemisphere/',
        element: <HomePage />,
    },
    {
        path: '/right-hemisphere/message/:postId',
        element: <PostPage />,
    },
    {
        path: '/right-hemisphere/*',
        element: <NotFoundPage />,
    },
]);
