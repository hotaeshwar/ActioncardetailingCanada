import React, { useEffect } from 'react';

const CustomerReview = () => {
  useEffect(() => {
    // Check if widget script already exists
    const existingScript = document.getElementById('quick-feedback-reviews-widget-script-loader');
    if (existingScript) {
      return;
    }

    // Create the async loader function exactly as provided by Quick Feedback
    const asyncLoad = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://quick-feedback.co/reviews-widget/widget.js?merchant_id=5eb41f8bfe7bb71278fa0366';
      script.id = 'quick-feedback-reviews-widget-script-loader';
      
      // Append to document head
      document.head.appendChild(script);
    };

    // Load the widget
    if (document.readyState === 'complete') {
      asyncLoad();
    } else {
      window.addEventListener('load', asyncLoad);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-12 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4"
            style={{ color: '#1393c4' }}
          >
            Customer Reviews
          </h1>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl px-4"
            style={{ color: '#1393c4' }}
          >
            See what our customers have to say about us
          </p>
        </div>

        {/* Widget Container */}
        <div 
          className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 
                     hover:shadow-xl transition-shadow duration-300 mx-auto w-full"
          style={{ borderTop: `4px solid #1393c4` }}
        >
          {/* Quick Feedback Widget Container */}
          <div 
            id="quick-feedback-reviews-widget" 
            className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
            style={{ height: '100%' }}
          >
            {/* Widget will be injected here by the script */}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <p className="text-xs sm:text-sm md:text-base" style={{ color: '#1393c4' }}>
            Powered by One Local
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        /* Style the widget container */
        #quick-feedback-reviews-widget {
          width: 100%;
        }

        /* Force all text to use brand color */
        #quick-feedback-reviews-widget,
        #quick-feedback-reviews-widget * {
          color: #1393c4 !important;
        }

        /* Responsive font sizes */
        #quick-feedback-reviews-widget {
          font-size: 14px;
        }

        @media (min-width: 640px) {
          #quick-feedback-reviews-widget {
            font-size: 15px;
          }
        }

        @media (min-width: 768px) {
          #quick-feedback-reviews-widget {
            font-size: 16px;
          }
        }

        @media (min-width: 1024px) {
          #quick-feedback-reviews-widget {
            font-size: 16px;
          }
        }

        @media (min-width: 1280px) {
          #quick-feedback-reviews-widget {
            font-size: 17px;
          }
        }

        /* Style links */
        #quick-feedback-reviews-widget a {
          color: #1393c4 !important;
          text-decoration: none;
        }

        #quick-feedback-reviews-widget a:hover {
          color: #0d7aa3 !important;
          text-decoration: underline;
        }

        /* Style buttons */
        #quick-feedback-reviews-widget button {
          background-color: #1393c4 !important;
          transition: background-color 0.3s ease;
          border: none;
          cursor: pointer;
        }

        #quick-feedback-reviews-widget button:hover {
          background-color: #0d7aa3 !important;
        }

        /* Ensure images are responsive */
        #quick-feedback-reviews-widget img {
          max-width: 100%;
          height: auto;
        }

        /* Style any star ratings */
        #quick-feedback-reviews-widget .rating,
        #quick-feedback-reviews-widget [class*="star"] {
          color: #1393c4 !important;
        }

        /* Style review cards */
        #quick-feedback-reviews-widget .review-card,
        #quick-feedback-reviews-widget [class*="card"],
        #quick-feedback-reviews-widget [class*="review"] {
          border-color: #1393c4 !important;
        }

        /* Mobile responsiveness */
        @media (max-width: 640px) {
          #quick-feedback-reviews-widget {
            padding: 0.5rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          #quick-feedback-reviews-widget {
            padding: 1rem;
          }
        }

        @media (min-width: 769px) {
          #quick-feedback-reviews-widget {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomerReview;
