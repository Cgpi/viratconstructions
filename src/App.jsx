import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import ScrollToTop from './components/scroll-to-top';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';
import HomePage from './routes/index';
import AboutPage from './routes/about';
import PropertiesPage from './routes/properties';
import PropertyDetailsPage from './routes/properties.$id';
import ServicesPage from './routes/services';
import ServiceDetailsPage from './routes/services.$id';
import GalleryPage from './routes/gallery';
import BlogPage from './routes/blog';
import FAQPage from './routes/faq';
import ContactPage from './routes/contact';

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route path="/properties/:id" element={<PropertyDetailsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:id" element={<ServiceDetailsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
}
