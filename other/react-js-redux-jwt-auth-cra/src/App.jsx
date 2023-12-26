import { useNavigate, useLocation } from 'react-router-dom'

import { AppRoutes } from './pages/AppRoutes'
import { history } from './components/helpers/history'
import { Nav } from './components/navigation/Nav'

export function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <div className="app-container bg-light">
            <Nav />
            <div className="container pt-4 pb-4">
                <AppRoutes />
            </div>
        </div>
    );
}
