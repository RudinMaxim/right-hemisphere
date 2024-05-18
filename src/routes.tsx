import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { HomePage, PostPage } from './pages';

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
        element: <Navigate to="/" />,
    },
]);

export const r2outer = createBrowserRouter([
    {
        path: '/right-hemisphere/',
        element: <App />,
        children: [
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
                element: <Navigate to="/" />,
            },
        ],
    },
]);
