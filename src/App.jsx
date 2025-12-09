import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import CustomScrollbar from './components/CustomScrollbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChatBot from './components/ChatBot'
import Service from './components/Service'
import CustomerReview from './components/CustomerReview'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import GiftCard from './components/GiftCard'
import Aboutus from './components/Aboutus'
import References from './components/References'
import Testimonials from './components/Testimonials'
import CarDetailingWebsite from './components/CarDetailingWebsite'
import PaintCorrection from './components/PaintCorrection'
import WindowTintingSite from './components/WindowTintingSite'
import CeramicCoatings from './components/CeramicCoatings'
import RemediationClaim from './components/RemediationClaim'
import PaintProtectionFilm from './components/PaintProtectionFilm'
import DentRepairComponent from './components/DentRepairComponent'
import BeforeAfterVideo from './components/BeforeAfterVideo'
import Booking from './components/Booking'
import PaintPolishingForm from './components/PaintPolishingForm'
import ServicesSection from './components/ServicesSection'
import FusionPlusLite from './components/FusionPlusLite'
import FusionPlusLanding from './components/FusionPlusLanding'
import FusionPlusPremium from './components/FusionPlusPremium'
import FusionPlusWheelCaliper from './components/FusionPlusWheelCaliper'
import FusionPlusGlass from './components/FusionPlusGlass'
import FusionPlusPlasticTrims from './components/FusionPlusPlasticTrims'
import FusionPlusUpholstery from './components/FusionPlusUpholstery'
import ChooseYourService from './components/ChooseYourService'
import QualityService from './components/QualityService'
import PerfectSolutionsCarousel from './components/PerfectSolutionsCarousel'
import CarDetailing from './components/CarDetailing'
import DateBlockingManager from './components/DateBlockingManager'
import actionCarLogo from './assets/images/action car logo.png'

// Main app content with routing
function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Handle GitHub Pages redirect parameter - ADDED CODE
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectParam = urlParams.get('p');
    if (redirectParam) {
      const path = redirectParam.replace(/~and~/g, '&');
      window.history.replaceState(null, null, path);
    }
  }, []);

  // Handle path-based routing (clean URLs)
  useEffect(() => {
    const path = location.pathname.substring(1); // Remove leading slash
    
    if (path === '') {
      setCurrentView('home');
    } else {
      setCurrentView(path);
    }
  }, [location.pathname]);

  // Handle view changes with clean URLs
  const handleViewChange = (view) => {
    setCurrentView(view);
    if (view === 'home') {
      navigate('/');
    } else {
      navigate(`/${view}`);
    }
  };

  // Check URL on mount for backward compatibility
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#admin' || hash === '#/admin') {
      navigate('/date-blocking');
    }
  }, [navigate]);

  // Auto scroll to top on route change (except admin routes)
  useEffect(() => {
    const isAdminRoute = location.pathname.includes('date-blocking');
    
    if (!isAdminRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  // Check if current route should hide navbar/chatbot
  const isAdminView = location.pathname.includes('date-blocking');
  const hideNavAndChat = isAdminView;

  return (
    <div className="relative">
      <CustomScrollbar />
      {!hideNavAndChat && <Navbar currentView={currentView} setCurrentView={handleViewChange} />}
      
      <Routes>
        {/* Admin Route */}
        <Route path="/date-blocking" element={<DateBlockingManager />} />
        
        {/* Main Content Routes */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/references" element={<References />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/giftcard" element={<GiftCard />} />
        <Route path="/auto-detailing" element={<CarDetailingWebsite setCurrentView={handleViewChange} />} />
        <Route path="/paint-correction" element={<PaintCorrection />} />
        <Route path="/window-tinting" element={<WindowTintingSite />} />
        <Route path="/ceramic-coatings" element={<CeramicCoatings setCurrentView={handleViewChange} />} />
        <Route path="/fusion-plus-lite" element={<FusionPlusLite />} />
        <Route path="/fusion-plus-paint-ppf" element={<FusionPlusLanding />} />
        <Route path="/fusion-plus-premium" element={<FusionPlusPremium />} />
        <Route path="/fusion-plus-wheel-caliper" element={<FusionPlusWheelCaliper />} />
        <Route path="/fusion-plus-glass" element={<FusionPlusGlass />} />
        <Route path="/fusion-plus-plastic-trims" element={<FusionPlusPlasticTrims />} />
        <Route path="/fusion-plus-upholstery" element={<FusionPlusUpholstery />} />
        <Route path="/remediation-claim" element={<RemediationClaim />} />
        <Route path="/paint-protection-film" element={<PaintProtectionFilm />} />
        <Route path="/dent-repair" element={<DentRepairComponent />} />
        <Route path="/before-after" element={<BeforeAfterVideo />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/paint-polishing" element={<PaintPolishingForm />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/choose-your-service" element={<ChooseYourService setCurrentView={handleViewChange} />} />
        <Route path="/quality-service" element={<QualityService />} />
        <Route path="/perfect-solutions" element={<PerfectSolutionsCarousel setCurrentView={handleViewChange} />} />
        <Route path="/car-detailing" element={<CarDetailing />} />
        
        {/* Home Route */}
        <Route path="/" element={
          <>
            <Hero />
            <Service setCurrentView={handleViewChange} />
            <CustomerReview />
            <ContactForm />
            <Footer />
          </>
        } />
        
        {/* 404 Fallback - redirect to home */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
              <button 
                onClick={() => navigate('/')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Go Home
              </button>
            </div>
          </div>
        } />
      </Routes>
      
      {!hideNavAndChat && <ChatBot />}
    </div>
  );
}

// Main App component with BrowserRouter and Flash Screen
function App() {
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    // Hide flash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setShowFlash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Flash Screen */}
      {showFlash && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 transition-opacity duration-500"
          style={{ opacity: showFlash ? 1 : 0 }}
        >
          <div className="flex flex-col items-center justify-center animate-pulse">
            <img 
              src={actionCarLogo} 
              alt="Action Car Logo" 
              className="w-64 h-64 object-contain mb-4 drop-shadow-2xl"
            />
            <div className="flex space-x-2 mt-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Main App */}
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

export default App
