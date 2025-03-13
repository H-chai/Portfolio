import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProvider } from '../contexts/ScrollContext';

export function Layout() {
  return (
    <ScrollProvider>
      <Header />
      <Outlet />
      <Footer />
    </ScrollProvider>
  );
}
