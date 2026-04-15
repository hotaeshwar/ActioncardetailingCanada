import React from 'react';
import beforeAfterVideo from '../assets/images/BEFOREANDAFTER.mp4';
import beforeVideo from '../assets/images/beforenew.mp4';
import afterVideo from '../assets/images/afternew.mp4';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const BeforeAfterVideo = () => {
  return (
    <div className="min-h-screen bg-snow">
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 pt-20 md:pt-24 lg:pt-28 pb-10">
        {/* Header Text */}
        <div className="text-center mb-8 md:mb-10">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold block mb-2" style={{ color: '#1393c4' }}>
            Before & After
          </span>
          <span className="text-lg md:text-xl lg:text-2xl font-semibold underline decoration-2 underline-offset-2" style={{ color: '#1393c4' }}>
            Here is Our Works
          </span>
        </div>

        {/* All Video Cards */}
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Original Before & After Video */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-lg md:text-xl font-bold mb-3" style={{ color: '#1393c4' }}>Before & After</span>
            <div className="w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
                webkit-playsinline="true"
              >
                <source src={beforeAfterVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Before Video */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-lg md:text-xl font-bold mb-3" style={{ color: '#1393c4' }}>Before</span>
            <div className="w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
                webkit-playsinline="true"
              >
                <source src={beforeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* After Video */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-lg md:text-xl font-bold mb-3" style={{ color: '#1393c4' }}>After</span>
            <div className="w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl lg:shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
                webkit-playsinline="true"
              >
                <source src={afterVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default BeforeAfterVideo;