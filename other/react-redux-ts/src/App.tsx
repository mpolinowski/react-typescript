import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header } from '@/components/Header'
import { store } from '@/store/store';

export function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}
