import React, { useEffect, useRef } from 'react';

const CustomerReview = () => {
  const widgetRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Load the Quick Feedback script only once
    if (!scriptLoadedRef.current) {
      const script = document.createElement('script');
      script.src = 'https://quick-feedback.co/reviews-widget/widget.js?merchant_id=5eb41f8bfe7bb71278fa0366';
      script.async = true;
      
      script.onload = () => {
        console.log('Quick Feedback widget loaded successfully');
      };
      
      script.onerror = () => {
        console.error('Failed to load Quick Feedback widget');
      };

      document.body.appendChild(script);
      scriptLoadedRef.current = true;

      return () => {
        // Cleanup: remove script when component unmounts
        if (script.parentNode) {
          document.body.removeChild(script);
        }
        scriptLoadedRef.current = false;
      };
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-12 lg:px-8">
      {/* Container with responsive max-width */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4"
            style={{ color: '#1393c4' }}
          >
            CustomerReview
          </h1>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl px-4"
            style={{ color: '#1393c4' }}
          >
            See what our customers have to say about us
          </p>
        </div>

        {/* Widget Container with responsive styling */}
        <div 
          ref={widgetRef}
          className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 
                     hover:shadow-xl transition-shadow duration-300
                     mx-auto w-full"
          style={{ borderTop: `4px solid #1393c4` }}
        >
          {/* Quick Feedback Widget will be injected here */}
          <div 
            id="quick-feedback-widget" 
            className="w-full overflow-hidden"
            style={{
              '--primary-color': '#1393c4',
              '--secondary-color': '#0d7aa3',
              '--hover-color': '#106a8c'
            }}
          >
            {/* Widget placeholder/loading state */}
            <div className="flex items-center justify-center py-8 sm:py-12 md:py-16">
              <div className="text-center">
                <div 
                  className="inline-block h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 
                             animate-spin rounded-full border-4 border-solid border-current 
                             border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  style={{ borderColor: '#1393c4', borderRightColor: 'transparent' }}
                  role="status"
                >
                  <span className="sr-only">Loading reviews...</span>
                </div>
                <p 
                  className="mt-4 text-sm sm:text-base md:text-lg font-medium"
                  style={{ color: '#1393c4' }}
                >
                  Loading reviews...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section - Optional */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <p 
            className="text-xs sm:text-sm md:text-base"
            style={{ color: '#1393c4' }}
          >
            Powered by Quick Feedback
          </p>
        </div>
      </div>

      {/* Custom Styles for the Widget */}
      <style jsx>{`
        /* Mobile-first responsive styles */
        #quick-feedback-widget {
          font-size: 14px;
        }

        /* Force all text to use primary color */
        #quick-feedback-widget,
        #quick-feedback-widget * {
          color: #1393c4 !important;
        }

        /* Small devices (phones, 640px and up) */
        @media (min-width: 640px) {
          #quick-feedback-widget {
            font-size: 15px;
          }
        }

        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) {
          #quick-feedback-widget {
            font-size: 16px;
          }
        }

        /* Large devices (desktops, 1024px and up) */
        @media (min-width: 1024px) {
          #quick-feedback-widget {
            font-size: 16px;
          }
        }

        /* Extra large devices (large desktops, 1280px and up) */
        @media (min-width: 1280px) {
          #quick-feedback-widget {
            font-size: 17px;
          }
        }

        /* Override widget colors if needed */
        #quick-feedback-widget a {
          color: #1393c4 !important;
        }

        #quick-feedback-widget button {
          background-color: #1393c4 !important;
          transition: background-color 0.3s ease;
        }

        #quick-feedback-widget button:hover {
          background-color: #0d7aa3 !important;
        }

        /* Ensure images are responsive */
        #quick-feedback-widget img {
          max-width: 100%;
          height: auto;
        }

        /* Responsive iframe if widget uses it */
        #quick-feedback-widget iframe {
          width: 100% !important;
          max-width: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default CustomerReview;
