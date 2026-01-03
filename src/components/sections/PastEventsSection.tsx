import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pastEventsImg1 from '@/assets/images/past-events-img-1.svg';
import pastEventsImg2 from '@/assets/images/past-events-img-2.svg';
import pastEventsImg3 from '@/assets/images/slide-two-img.svg';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

type PastEvent = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const pastEvents: PastEvent[] = [
  {
    id: 1,
    title: 'Sails & Tales: The After Party',
    subtitle: 'Luxury Private Gatherings',
    description: `After an unforgettable yacht experience, the night continued with an exclusive after-party. Guests indulged in the Red Room’s intimate ambiance, vibed by the poolside, and danced to electrifying sets from top DJs. A perfect fusion of luxury, music, and late-night energy.`,
    image: pastEventsImg1,
  },
  {
    id: 2,
    title: 'Sails & Tales',
    subtitle: 'Luxury Private Gatherings',
    description:
      'A premium 3-hour yacht experience blending live percussion performances, immersive gaming, and high-profile networking. Guests indulged in seamless mix of luxury entertainment and vibrant social connections against breathtaking ocean views.',
    image: pastEventsImg2,
  },
  {
    id: 3,
    title: 'Escapades',
    subtitle: 'Club & Nightlife',
    description: `An electrifying club experience where luxury met high-energy entertainment. With immersive lighting, pulsating beats, and a crowd that lived for the moment, Escapades was the ultimate escape into the night.`,
    image: pastEventsImg3,
  },
];

const textSlotVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeInOut' as const },
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeInOut' as const },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: { duration: 0.45, ease: 'easeInOut' as const },
  }),
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeInOut' as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.45, ease: 'easeInOut' as const },
  },
};

export default function PastEventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  const currentEvent = pastEvents[currentIndex];
  const totalEvents = pastEvents.length;
  const direction = currentIndex > prevIndex ? 1 : -1;

  const goNext = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % totalEvents);
  };

  const goPrev = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + totalEvents) % totalEvents);
  };

  return (
    <section id='past-events' className='py-12 md:py-20 px-4 md:px-6 mb-8'>
      <div className='max-w-7xl mx-auto w-full bg-secondary rounded-2xl py-12 md:py-20 px-4 md:px-6'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-5xl font-miama text-text mb-4'>
            Look What We've Made Happen
          </h2>
          <p className='text-xs md:text-lg text-text/70 max-w-4xl mx-auto font-mali'>
            From electric rooftop parties to our signature Sails & Tales
            extravaganza, we&apos;ve made unforgettable memories that still have
            people talking. Our past events are a testament to the magic we
            create, the connections we spark, and the pure joy we bring to every
            experience. Scroll through our event highlights — you might just
            spot your future favorite moment. Every event is an epic story, and
            we&apos;re just getting started.
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`flex ${
            isDesktop ? 'flex-row gap-8' : 'flex-col gap-6'
          } items-stretch`}
        >
          {/* Left Side - Image */}
          {isDesktop && (
            <div className='flex-1 rounded-3xl overflow-hidden relative h-96 md:h-125 bg-secondary'>
              <AnimatePresence mode='sync' initial={false}>
                <motion.img
                  key={currentEvent.id}
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  variants={imageVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  className='absolute inset-0 w-full h-full object-cover'
                />
              </AnimatePresence>
            </div>
          )}

          {/* Right Side - Content */}
          <div className='flex-1 flex flex-col justify-center'>
            {isDesktop && (
              <div className='rounded-3xl overflow-hidden relative'>
                <AnimatePresence mode='popLayout' initial={false}>
                  <motion.div
                    key={currentEvent.id}
                    variants={textSlotVariants}
                    custom={direction}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    className='space-y-6 py-8 font-montserrat'
                  >
                    <h3 className='text-3xl md:text-4xl font-bold text-text'>
                      {currentEvent.title}
                    </h3>
                    <p className='text-lg md:text-xl text-primary font-semibold'>
                      {currentEvent.subtitle}
                    </p>
                    <p className='text-base md:text-2xl text-text/80 leading-loose font-mali'>
                      {currentEvent.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {/* Mobile Layout */}
            {!isDesktop && (
              <>
                <div className='rounded-3xl overflow-hidden relative h-80 mb-6 bg-secondary'>
                  <AnimatePresence mode='sync' initial={false}>
                    <motion.img
                      key={currentEvent.id}
                      src={currentEvent.image}
                      alt={currentEvent.title}
                      variants={imageVariants}
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      className='absolute inset-0 w-full h-full object-cover'
                    />
                  </AnimatePresence>
                </div>

                <div className='overflow-hidden'>
                  <AnimatePresence mode='popLayout' initial={false}>
                    <motion.div
                      key={currentEvent.id}
                      variants={textSlotVariants}
                      custom={direction}
                      initial='enter'
                      animate='center'
                      exit='exit'
                      className='space-y-4 font-montserrat'
                    >
                      <h3 className='text-xl font-bold text-text'>
                        {currentEvent.title}
                      </h3>
                      <p className='text-xs text-primary font-semibold'>
                        {currentEvent.subtitle}
                      </p>
                      <p className='text-sm text-text/80 leading-relaxed font-mali'>
                        {currentEvent.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </>
            )}

            {/* Navigation & Pagination */}
            <div className='flex items-center justify-end gap-12 mt-12 md:mt-16'>
              {/* Pagination dots */}
              <div className='flex gap-2 flex-1'>
                {pastEvents.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 rounded-full transition-all ${
                      idx === currentIndex
                        ? 'bg-primary w-15 lg:w-20'
                        : 'bg-text/30 w-8 lg:w-10 hover:bg-text/50'
                    }`}
                    aria-label={`Go to event ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <div className='flex items-center gap-4'>
                {(currentIndex === 0 ||
                  (currentIndex === 1 && direction > 0)) && (
                  <button
                    onClick={goNext}
                    className='flex items-center gap-2 text-primary hover:text-text transition font-semibold cursor-pointer'
                  >
                    Next <FaArrowRightLong size={20} />
                  </button>
                )}

                {(currentIndex === 2 ||
                  (currentIndex === 1 && direction < 0)) && (
                  <button
                    onClick={goPrev}
                    className='flex items-center gap-2 text-primary hover:text-text transition font-semibold cursor-pointer'
                  >
                    <FaArrowLeftLong size={20} /> Prev
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
