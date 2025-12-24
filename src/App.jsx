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
  
  // Handle GitHub Pages redirect parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectParam = urlParams.get('p');
    if (redirectParam) {
      const path = redirectParam.replace(/~and~/g, '&');
      window.history.replaceState(null, null, path);
    }
  }, []);

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
          <Route path="/paint-correction" element={<PaintCorrection />} />
          <Route path="/window-tinting" element={<WindowTintingSite />} />
          <Route path="/ceramic-coatings" element={<CeramicCoatings />} />
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
          <Route path="/about" element={<Aboutus />} />
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
      {/* REMOVED: Footer from here to avoid duplication */}
      {/* {showNavAndChat && location.pathname === '/' && <Footer />} */}
    </div>
  );
}

// Flash Screen Component
function FlashScreen({ show, onHide }) {
  if (!show) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
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
  );
}

// Main App component
function App() {
  const [showFlash, setShowFlash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <FlashScreen show={showFlash} onHide={() => setShowFlash(false)} />
      
      <BrowserRouter
        basename={import.meta.env.PROD ? '/' : undefined}
        future={{ v7_startTransition: true }}
      >
        <AppContent />
      </BrowserRouter>
    </>
  );
}

export default App
