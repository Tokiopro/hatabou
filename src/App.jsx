import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileCTA from './components/layout/MobileCTA';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-emerald-200">
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
