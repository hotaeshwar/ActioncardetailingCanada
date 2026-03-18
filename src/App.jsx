import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import CustomScrollbar from './components/CustomScrollbar'
import Navbar from './components/Navbar'
import ChatBot from './components/ChatBot'
import Footer from './components/Footer'
import DateBlockingManager from './components/DateBlockingManager'
import actionCarLogo from './assets/images/action car logo.png'

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'))
const Service = lazy(() => import('./components/Service'))
const CustomerReview = lazy(() => import('./components/CustomerReview'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const GiftCard = lazy(() => import('./components/GiftCard'))
const Aboutus = lazy(() => import('./components/Aboutus'))
const References = lazy(() => import('./components/References'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const CarDetailingWebsite = lazy(() => import('./components/CarDetailingWebsite'))
const PaintCorrection = lazy(() => import('./components/PaintCorrection'))
const WindowTintingSite = lazy(() => import('./components/WindowTintingSite'))
const CeramicCoatings = lazy(() => import('./components/CeramicCoatings'))
const RemediationClaim = lazy(() => import('./components/RemediationClaim'))
const PaintProtectionFilm = lazy(() => import('./components/PaintProtectionFilm'))
const DentRepairComponent = lazy(() => import('./components/DentRepairComponent'))
const BeforeAfterVideo = lazy(() => import('./components/BeforeAfterVideo'))
const Booking = lazy(() => import('./components/Booking'))
const PaintPolishingForm = lazy(() => import('./components/PaintPolishingForm'))
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const FusionPlusLite = lazy(() => import('./components/FusionPlusLite'))
const FusionPlusLanding = lazy(() => import('./components/FusionPlusLanding'))
const FusionPlusPremium = lazy(() => import('./components/FusionPlusPremium'))
const FusionPlusWheelCaliper = lazy(() => import('./components/FusionPlusWheelCaliper'))
const FusionPlusGlass = lazy(() => import('./components/FusionPlusGlass'))
const FusionPlusPlasticTrims = lazy(() => import('./components/FusionPlusPlasticTrims'))
const FusionPlusUpholstery = lazy(() => import('./components/FusionPlusUpholstery'))
const ChooseYourService = lazy(() => import('./components/ChooseYourService'))
const QualityService = lazy(() => import('./components/QualityService'))
const PerfectSolutionsCarousel = lazy(() => import('./components/PerfectSolutionsCarousel'))
const CarDetailing = lazy(() => import('./components/CarDetailing'))

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Main app content with routing
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check URL on mount for backward compatibility
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#admin' || hash === '#/admin') {
      navigate('/date-blocking');
    }
  }, [navigate]);

  // Auto scroll to top on route change
  useEffect(() => {
    const isAdminRoute = location.pathname.includes('date-blocking');
    if (!isAdminRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  // Check if current route should hide navbar/chatbot
  const isAdminRoute = location.pathname.includes('date-blocking');
  const showNavAndChat = !isAdminRoute;

  return (
    <div className="relative">
      <CustomScrollbar />
      {showNavAndChat && <Navbar />}
      
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Admin Route */}
          <Route path="/date-blocking" element={<DateBlockingManager />} />
          
          {/* Fusion Plus Services Routes */}
          <Route path="/fusion-plus-lite" element={<FusionPlusLite />} />
          <Route path="/fusion-plus-paint-ppf" element={<FusionPlusLanding />} />
          <Route path="/fusion-plus-premium" element={<FusionPlusPremium />} />
          <Route path="/fusion-plus-wheel-caliper" element={<FusionPlusWheelCaliper />} />
          <Route path="/fusion-plus-glass" element={<FusionPlusGlass />} />
          <Route path="/fusion-plus-plastic-trims" element={<FusionPlusPlasticTrims />} />
          <Route path="/fusion-plus-upholstery" element={<FusionPlusUpholstery />} />
          
          {/* Car Detailing Services Routes */}
          <Route path="/auto-detailing" element={<CarDetailingWebsite />} />
          <Route path="/paint-correction-polishing" element={<PaintCorrection />} />
          <Route path="/window-tinting" element={<WindowTintingSite />} />
          <Route path="/ceramic-coating" element={<CeramicCoatings />} />
          <Route path="/paint-protection-film" element={<PaintProtectionFilm />} />
          <Route path="/dent-repair" element={<DentRepairComponent />} />
          <Route path="/car-detailing" element={<CarDetailing />} />
          
          {/* Special Services */}
          <Route path="/remediation-claim" element={<RemediationClaim />} />
          <Route path="/before-after" element={<BeforeAfterVideo />} />
          <Route path="/paint-polishing" element={<PaintPolishingForm />} />
          
          {/* Booking & Selection Routes */}
          <Route path="/booking" element={<Booking />} />
          <Route path="/choose-your-service" element={<ChooseYourService />} />
          <Route path="/perfect-solutions" element={<PerfectSolutionsCarousel />} />
          
          {/* Company Info Routes */}
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/references" element={<References />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/giftcard" element={<GiftCard />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/quality-service" element={<QualityService />} />
          
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Service />
              <CustomerReview />
              <ContactForm />
              <Footer />
            </>
          } />
          
          {/* Redirects for old URLs */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                <button 
                  onClick={() => navigate('/')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Go to Homepage
                </button>
              </div>
            </div>
          } />
        </Routes>
      </Suspense>
      
      {showNavAndChat && <ChatBot />}
    </div>
  );
}

// Flash Screen Component
function FlashScreen({ show, fading }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{
        transition: 'opacity 1s ease-in-out',
        opacity: fading ? 0 : 1,
      }}
    >
      {/* Animation keyframes */}
      <style>{`
        @keyframes logoFadeIn {
          0%   { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes progressBar {
          0%   { width: 0%; }
          20%  { width: 25%; }
          50%  { width: 55%; }
          75%  { width: 78%; }
          90%  { width: 90%; }
          100% { width: 100%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>

      {/* Content */}
      <div
        className="flex flex-col items-center justify-center"
        style={{ animation: 'logoFadeIn 1s ease-out forwards' }}
      >
        {/* Logo */}
        <img
          src={actionCarLogo}
          alt="Action Car Logo"
          className="w-56 h-56 object-contain drop-shadow-xl mb-6"
        />

        {/* Circular spinner */}
        <div className="relative w-16 h-16 mb-6">
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-gray-200"
          />
          {/* Spinning arc */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400"
            style={{ animation: 'spin 0.9s linear infinite' }}
          />
          {/* Inner spinning arc (opposite) */}
          <div
            className="absolute inset-2 rounded-full border-4 border-transparent border-b-blue-300"
            style={{ animation: 'spin 1.3s linear infinite reverse' }}
          />
        </div>

        {/* Progress bar */}
        <div className="w-52 h-1.5 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
            style={{ animation: 'progressBar 4s ease-in-out forwards' }}
          />
        </div>

        {/* Loading text */}
        <p
          className="text-gray-400 text-sm tracking-widest uppercase"
          style={{ animation: 'pulse 1.5s ease-in-out infinite' }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}

// Main App component
function App() {
  const [showFlash, setShowFlash] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fading at 4 seconds
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 4000);

    // Remove completely after fade (4s + 1s transition = 5s total)
    const hideTimer = setTimeout(() => {
      setShowFlash(false);
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <FlashScreen show={showFlash} fading={fading} />

      <BrowserRouter
        basename="/"
        future={{ v7_startTransition: true }}
      >
        <AppContent />
      </BrowserRouter>
    </>
  );
}

export default App