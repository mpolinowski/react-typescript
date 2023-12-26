import { Routes, Route, Navigate } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'
import { Home } from './Home'
import { Login } from './Login'

export function AppRoutes() {

    return (
        <Routes>
            <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}