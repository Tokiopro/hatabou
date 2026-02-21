import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import HomePage from './pages/HomePage/HomePage';
import RoofingPage from './pages/RoofingPage';
import WorksPage from './pages/WorksPage';
import PricePage from './pages/PricePage';
import VoicePage from './pages/VoicePage';
import ContactPage from './pages/ContactPage';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="roofing" element={<RoofingPage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="price" element={<PricePage />} />
          <Route path="voice" element={<VoicePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
