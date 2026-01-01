import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MiniGallerySection from '@/components/sections/MiniGallerySection';
import UpcomingEventsSection from '@/components/sections/UpcomingEventsSection';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import WhatWeOfferSection from '@/components/sections/WhatWeOfferSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PastEventsSection from '@/components/sections/PastEventsSection';
import GallerySection from '@/components/sections/GallerySection';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <HeroSection />
              <AboutSection />
              <MiniGallerySection />
              <UpcomingEventsSection />
              <HowWeWorkSection />
              <WhatWeOfferSection />
              <TestimonialsSection />
              <PastEventsSection />
              <GallerySection />
            </>
          }
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </>
  );
}
