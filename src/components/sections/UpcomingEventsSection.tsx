import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import slideOneImg from '@/assets/images/slide-one-img.svg';
import slideTwoImg from '@/assets/images/slide-two-img.svg';
import slideThreeImg from '@/assets/images/slide-three-img.svg';
import slideOneBackground from '@/assets/images/slide-one-background.svg';
import slideTwoBackground from '@/assets/images/slide-two-background.svg';
import slideThreeBackground from '@/assets/images/slide-three-background.svg';

const slides = [
  {
    id: 1,
    title: 'Flirt & fire',
    description: `This Valentine’s, step into a night of passion, energy, and elite entertainment. “Flirt & Fire” is more than just a party—it’s an electrifying experience with premium cocktails, VIP exclusives, and a curated atmosphere designed for unforgettable moments.`,
    image: slideOneImg,
    background: slideOneBackground,
  },
  {
    id: 2,
    title: 'Escapades',
    description: `This Valentine’s, step into a night of passion, energy, and elite entertainment. “Flirt & Fire” is more than just a party—it’s an electrifying experience with premium cocktails, VIP exclusives, and a curated atmosphere designed for unforgettable moments.`,
    image: slideTwoImg,
    background: slideTwoBackground,
  },
  {
    id: 3,
    title: 'All White Mask',
    description: `This Valentine’s, step into a night of passion, energy, and elite entertainment. “Flirt & Fire” is more than just a party—it’s an electrifying experience with premium cocktails, VIP exclusives, and a curated atmosphere designed for unforgettable moments.`,
    image: slideThreeImg,
    background: slideThreeBackground,
  },
];

export default function UpcomingEventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const current = slides[currentSlide];

  return (
    <section className='relative min-h-screen overflow-hidden'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `url(${current.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.3s ease-in-out',
        }}
      />

      <div className='relative z-10 min-h-screen flex flex-col md:flex-row items-end justify-between px-6 md:px-12 lg:px-20 py-8 md:py-12'>
        {/* Left: Event Poster */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={`image-${currentSlide}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className='w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0'
          >
            <img
              src={current.image}
              alt={current.title}
              className='w-full md:w-full md:max-w-lg rounded-2xl shadow-2xl'
            />
          </motion.div>
        </AnimatePresence>

        {/* Right: Event Details */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6'>
          {/* Pagination Dots */}
          <div className='w-full  flex justify-between items-center'>
            <div className='flex gap-3'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-semibold transition-all cursor-pointer ${
                    index === currentSlide
                      ? 'bg-primary text-white scale-110'
                      : 'bg-white text-text border border-text/20'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className='flex gap-4'>
              <button
                onClick={handlePrev}
                disabled={currentSlide === 0}
                className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                  currentSlide === 0
                    ? 'bg-text/10 text-text/30 cursor-not-allowed'
                    : 'bg-white text-text shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer'
                }`}
                aria-label='Previous slide'
              >
                <IoChevronBack size={24} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentSlide === slides.length - 1}
                className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                  currentSlide === slides.length - 1
                    ? 'bg-text/10 text-text/30 cursor-not-allowed'
                    : 'bg-white text-text shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer'
                }`}
                aria-label='Next slide'
              >
                <IoChevronForward size={24} />
              </button>
            </div>
          </div>

          {/* Content Card */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className='bg-[#FFF6F0B5] backdrop-blur-sm rounded-3xl p-4 md:p-10 shadow-2xl'
            >
              <p className='text-xs md:text-sm uppercase tracking-widest text-text mb-2 font-bold font-montserrat'>
                Upcoming Event
              </p>
              <h2 className='text-base md:text-4xl sm:font-extralight text-text mb-4 font-mooli'>
                {current.title}
              </h2>
              <p className='text-xs md:text-lg text-text/80 leading-relaxed mb-6 font-mali'>
                {current.description}
              </p>
              <button className='px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary/95 hover:text-primary transition-colors'>
                Reserve Your Spot
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
