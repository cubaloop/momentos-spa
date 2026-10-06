import React, { useState, useEffect } from 'react';
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
import Footer from './components/Footer';
import BookingCalendarModal from './components/BookingCalendarModal';
import AuthModal from './components/AuthModal';
import AdminDashboardModal from './components/AdminDashboardModal';
import ServiceDetailPage from './components/ServiceDetailPage';
import SobreNosotros from './components/SobreNosotros';
import Blog from './components/Blog';
import { getServiceById } from './data/servicesData';
import { useAuth } from './context/AuthContext';
import { useEditableText } from './context/EditableTextContext';
import LiveEditorToolbar from './components/LiveEditorToolbar';

export default function App() {
  const { user } = useAuth();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState('login');
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [adminModalTab, setAdminModalTab] = useState('services');
  const [preselectedService, setPreselectedService] = useState(null);
  const [initialCategoryId, setInitialCategoryId] = useState(null);
  
  // Current view state: 'home' | 'service' | 'sobre-nosotros' | 'blog'
  const [currentView, setCurrentView] = useState('home');
  const [selectedServiceForPage, setSelectedServiceForPage] = useState(null);

  // Hash-based routing
  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash;
      if (hash === '#sobre-nosotros') {
        setCurrentView('sobre-nosotros');
        setSelectedServiceForPage(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (hash.startsWith('#blog')) {
        setCurrentView('blog');
        setSelectedServiceForPage(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (hash.startsWith('#servicio/')) {
        const id = hash.replace('#servicio/', '');
        const found = getServiceById(id);
        if (found) {
          setSelectedServiceForPage(found);
          setCurrentView('service');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      } else if (hash.startsWith('#servicio=')) {
        const id = hash.replace('#servicio=', '');
        const found = getServiceById(id);
        if (found) {
          setSelectedServiceForPage(found);
          setCurrentView('service');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      // Default back to home
      setCurrentView('home');
      setSelectedServiceForPage(null);
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

  const handleOpenAdmin = (tab = 'services') => {
    setAdminModalTab(tab);
    if (user && user.role === 'admin') {
      setAdminModalOpen(true);
    } else {
      handleOpenAuth('login');
    }
  };

  const handleNavigateToService = (service) => {
    if (!service) return;
    const found = typeof service === 'string' ? getServiceById(service) : service;
    if (found) {
      setSelectedServiceForPage(found);
      setCurrentView('service');
      window.location.hash = `#servicio/${found.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToPage = (page) => {
    if (page === 'sobre-nosotros') {
      window.location.hash = 'sobre-nosotros';
      setCurrentView('sobre-nosotros');
    } else if (page === 'blog') {
      window.location.hash = 'blog';
      setCurrentView('blog');
    } else {
      window.location.hash = '';
      setCurrentView('home');
      setSelectedServiceForPage(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    handleNavigateToPage('home');
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-stone-900 antialiased selection:bg-mahogany-950 selection:text-white">
      
      {/* Sticky Glass Navbar */}
      <Navbar 
        onOpenBooking={handleOpenBooking}
        onOpenAuth={handleOpenAuth}
        onOpenAdmin={handleOpenAdmin}
        onSelectService={(srv) => setPreselectedService(srv)}
        onNavigateToService={handleNavigateToService}
        onNavigateToPage={handleNavigateToPage}
        onBackHome={handleBackToHome}
        currentView={currentView}
        isViewingService={currentView === 'service'}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentView === 'sobre-nosotros' ? (
          <SobreNosotros 
            onBack={handleBackToHome}
            onOpenBooking={handleOpenBooking}
          />
        ) : currentView === 'blog' ? (
          <Blog 
            onBack={handleBackToHome}
            onOpenBooking={handleOpenBooking}
          />
        ) : currentView === 'service' && selectedServiceForPage ? (
          <ServiceDetailPage
            service={selectedServiceForPage}
            onBack={handleBackToHome}
            onOpenBooking={handleOpenBooking}
            onSelectOtherService={handleNavigateToService}
          />
        ) : (
          <>
            <HeroSection onOpenBooking={() => handleOpenBooking()} />
            <MediaRow />
            <AboutSplit onOpenBooking={() => handleOpenBooking()} onNavigateToPage={handleNavigateToPage} />
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

      {/* Floating Visual Editor Toolbar for Admin */}
      <LiveEditorToolbar />

      {/* Floating WhatsApp Bubble to +53 59710688 */}
      <WhatsAppChatBubble />

      {/* Luxury Mega Footer */}
      <Footer 
        onNavigateToPage={handleNavigateToPage}
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
        onOpenAdmin={handleOpenAdmin}
      />

      <AdminDashboardModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        initialTab={adminModalTab}
      />

    </div>
  );
}
