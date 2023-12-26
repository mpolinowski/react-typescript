import { lazy, Suspense } from 'react'

import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom';

import { App } from '@/App'
import { ErrorPage } from '@/pages/ErrorPage'

import { Welcome } from '@/pages/Welcome'

import { FrontPage } from '@/pages/Frontpage';
import { CameraList } from '@/pages/CameraList';
import { CameraPage } from '@/pages/CameraPage';
import { UserPage } from '@/pages/UserPage';

const Dashboard = lazy(() => import('@/pages/Dashboard'));

const router = createBrowserRouter(
    [{
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Welcome />
            },
            {
                path: 'start',
                element: <FrontPage />,
            },
            {
                path: 'camera-list',
                element: <CameraList />,
            },
            {
                path: 'camera/:id',
                element: <CameraPage />,
            },
            {
                path: 'dashboard',
                element:  (
                    <Suspense fallback={
                        <div className="text-center p-5 text-xl">
                            Loading...
                        </div>
                    }>
                        <Dashboard />
                    </Suspense>
                )
            },
            {
                path: 'user-details/:name',
                element: <UserPage />,
            },
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ]}
    ]);

export function Routes() {
    return <RouterProvider router={router} />;
}