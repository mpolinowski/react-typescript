import { Provider } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components/navbar/NavBar'
import { store } from '@/store/store';

export function App() {
  return (
    <>
    <Provider store={store}>
      <NavBar />
      <Outlet />
    </Provider>
    </>
  );
}
