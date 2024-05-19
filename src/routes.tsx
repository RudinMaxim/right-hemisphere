import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/PostPage';

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
        path: '*',
        element: <Navigate to="/right-hemisphere/" />,
    },
    
]);
