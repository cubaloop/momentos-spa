import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MediaRow from './components/MediaRow';
import AboutSplit from './components/AboutSplit';
import MetricsBanner from './components/MetricsBanner';
import DarkPackages from './components/DarkPackages';
import ServicesCatalog from './components/ServicesCatalog';
import BenefitsRejuvenation from './components/BenefitsRejuvenation';
import DayTimeline from './components/DayTimeline';
import ComparisonTable from './components/ComparisonTable';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import GoogleMapsSection from './components/GoogleMapsSection';
import WhatsAppChatBubble from './components/WhatsAppChatBubble';
import PreFooterStatusStrip from './components/PreFooterStatusStrip';
import Footer from './components/Footer';
import BookingCalendarModal from './components/BookingCalendarModal';
import AuthModal from './components/AuthModal';
import AdminDashboardModal from './components/AdminDashboardModal';
import ServiceDetailPage from './components/ServiceDetailPage';
import { getServiceById } from './data/servicesData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState('login');
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);
  const [initialCategoryId, setInitialCategoryId] = useState(null);
  const [selectedServiceForPage, setSelectedServiceForPage] = useState(null);

  // Hash-based routing for individual service pages
  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#servicio/')) {
        const id = hash.replace('#servicio/', '');
        const found = getServiceById(id);
        if (found) {
          setSelectedServiceForPage(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      } else if (hash.startsWith('#servicio=')) {
        const id = hash.replace('#servicio=', '');
        const found = getServiceById(id);
        if (found) {
          setSelectedServiceForPage(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (!hash || hash === '#' || hash.startsWith('#experiencias') || hash.startsWith('#beneficios') || hash.startsWith('#testimonios') || hash.startsWith('#ubicacion') || hash.startsWith('#servicios')) {
        setSelectedServiceForPage(null);
      }
    };

    handleHashRouting();
    window.addEventListener('hashchange', handleHashRouting);
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, []);

  const handleOpenBooking = (service = null, categoryId = null) => {
    setPreselectedService(service);
    setInitialCategoryId(categoryId);
    setBookingModalOpen(true);
  };

  const handleOpenAuth = (mode = 'login') => {
    setAuthInitialMode(mode);
    setAuthModalOpen(true);
  };

  const handleNavigateToService = (service) => {
    if (!service) return;
    const found = typeof service === 'string' ? getServiceById(service) : service;
    if (found) {
      setSelectedServiceForPage(found);
      window.location.hash = `#servicio/${found.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToCatalog = () => {
    setSelectedServiceForPage(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-stone-900 antialiased selection:bg-mahogany-950 selection:text-white">
      
      {/* Top Announcement Strip */}
      <AnnouncementBar onOpenBooking={() => handleOpenBooking()} />

      {/* Sticky Glass Navbar with MegaMenu */}
      <Navbar 
        onOpenBooking={handleOpenBooking}
        onOpenAuth={handleOpenAuth}
        onOpenAdmin={() => setAdminModalOpen(true)}
        onSelectService={(srv) => setPreselectedService(srv)}
        onNavigateToService={handleNavigateToService}
        onBackHome={handleBackToCatalog}
        isViewingService={!!selectedServiceForPage}
      />

      {/* Main Content Sections: Switches between Dedicated Service Page and Full Landing Page */}
      <main className="flex-1">
        {selectedServiceForPage ? (
          <ServiceDetailPage
            service={selectedServiceForPage}
            onBack={handleBackToCatalog}
            onOpenBooking={handleOpenBooking}
            onSelectOtherService={handleNavigateToService}
          />
        ) : (
          <>
            <HeroSection 
              onOpenBooking={() => handleOpenBooking()} 
              onOpenAuth={handleOpenAuth}
            />
            <MediaRow />
            <AboutSplit onOpenBooking={() => handleOpenBooking()} />
            <MetricsBanner />
            <DarkPackages 
              onOpenBooking={handleOpenBooking}
              onNavigateToService={handleNavigateToService}
            />
            <ServicesCatalog 
              onOpenBooking={handleOpenBooking}
              onNavigateToService={handleNavigateToService}
            />
            <BenefitsRejuvenation onOpenBooking={() => handleOpenBooking()} />
            <DayTimeline onOpenBooking={() => handleOpenBooking()} />
            <ComparisonTable onOpenBooking={() => handleOpenBooking()} />
            <TestimonialsSection />
            <FaqSection />
            <GoogleMapsSection />
          </>
        )}
      </main>

      {/* Floating WhatsApp Bubble to +53 59710688 */}
      <WhatsAppChatBubble />

      {/* Pre-Footer Status & Schedule Banner */}
      <PreFooterStatusStrip />

      {/* Luxury Mega Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingCalendarModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={preselectedService}
        initialCategoryId={initialCategoryId}
        onOpenAuth={handleOpenAuth}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authInitialMode}
      />

      <AdminDashboardModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

    </div>
  );
}
