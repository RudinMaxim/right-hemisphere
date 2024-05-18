import {
  createBrowserRouter
} from 'react-router-dom';
import { HomePage, PostPage } from './pages';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/message/:postId',
        element: <PostPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);
