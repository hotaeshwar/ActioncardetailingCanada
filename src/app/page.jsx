"use client";

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Service from '../components/Service';
import CustomerReview from '../components/CustomerReview';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEO
        title="Car Detailing Near Me in Winnipeg | Action Car Detailing"
        description="Best car detailing Winnipeg. Interior and exterior deep clean including PPF, window tinting, and ceramic coating. We are the best car detailers near you."
        canonical="https://actioncardetailing.ca"
      />
      <Hero />
      <Service />
      <CustomerReview />
      <ContactForm />
      <Footer />
    </>
  );
}
