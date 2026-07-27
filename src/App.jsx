import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SiteHeader } from './components/site-header';
import { SiteFooter } from './components/site-footer';
import HomePage from './routes/index';
import AboutPage from './routes/about';
import PropertiesPage from './routes/properties';
import PropertyDetailsPage from './routes/properties.$id';
import ServicesPage from './routes/services';
import GalleryPage from './routes/gallery';
import BlogPage from './routes/blog';
import FAQPage from './routes/faq';
import ContactPage from './routes/contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:id" element={<PropertyDetailsPage />} />
            <Route path="/services" element={<ServicesPage />} />
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
  );
}
