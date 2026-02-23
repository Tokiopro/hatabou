import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import RoofingPage from './pages/RoofingPage';
import LeakPage from './pages/LeakPage';
import WallPage from './pages/WallPage';
import GutterPage from './pages/GutterPage';
import WorksPage from './pages/WorksPage';
import PricePage from './pages/PricePage';
import VoicePage from './pages/VoicePage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import CompanyPage from './pages/CompanyPage';
import AreaPage from './pages/AreaPage';
import ThanksPage from './pages/ThanksPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="roof" element={<RoofingPage />} />
          <Route path="roofing" element={<Navigate to="/roof" replace />} />
          <Route path="leak" element={<LeakPage />} />
          <Route path="wall" element={<WallPage />} />
          <Route path="gutter" element={<GutterPage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="price" element={<PricePage />} />
          <Route path="voice" element={<VoicePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="area/:slug" element={<AreaPage />} />
          <Route path="thanks" element={<ThanksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
