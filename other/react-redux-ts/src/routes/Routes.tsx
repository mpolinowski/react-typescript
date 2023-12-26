import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import { App } from '@/App'
import { ErrorPage } from '@/pages/ErrorPage'
import { Welcome } from '@/pages/Welcome'
import { Data } from '@/pages/Data'

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
                path: '/data',
                element: <Data />
            },
        ]}
    ]);

export function Routes() {
    return <RouterProvider router={router} />;
}