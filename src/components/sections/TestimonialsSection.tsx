import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import testimonialImg1 from '@/assets/images/testimonial-img-1.svg';
import testimonialImg2 from '@/assets/images/testimonial-img-2.svg';
import testimonialImg3 from '@/assets/images/testimonial-img-3.svg';
import testimonialImg4 from '@/assets/images/testimonial-img-4.svg';
import testimonialImg5 from '@/assets/images/testimonial-img-5.svg';
import testimonialImg6 from '@/assets/images/testimonial-img-6.svg';
import testimonialImg7 from '@/assets/images/testimonial-img-7.svg';
import testimonialImg8 from '@/assets/images/testimonial-img-8.svg';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aisha O.',
    role: 'Corporate Event Host',
    quote:
      'From start to finish, everything was seamless. The attention to detail and ambiance were beyond expectations. Truly a night to remember!',
    image: testimonialImg1,
  },
  {
    id: 2,
    name: 'Samantha L.',
    role: 'Club Guest',
    quote: `The energy, the music, the vibe—everything was on another level. Hands down, the best nightlife experience I’ve had!`,
    image: testimonialImg2,
  },
  {
    id: 3,
    name: 'David K.',
    role: 'Brand Manager',
    quote:
      'Our brand activation event was flawless. The Posh Elites team brought our vision to life with elegance and creativity. Absolutely top-tier!',
    image: testimonialImg3,
  },
  {
    id: 4,
    name: 'Tunde A.',
    role: 'After-Party Guest',
    quote:
      'The VIP treatment was unmatched! From the Red Room experience to the poolside vibe, it felt like a scene from a movie.',
    image: testimonialImg4,
  },
  {
    id: 5,
    name: 'Michael E.',
    role: 'Event Attendee',
    quote:
      'Sails & Tales Party was the perfect blend of music, networking, and breathtaking views. Can’t wait for the next one!',
    image: testimonialImg5,
  },
  {
    id: 6,
    name: 'Linda C.',
    role: 'Repeat Client',
    quote:
      'Every event is a work of art—flawless execution, high-end aesthetics, and an unforgettable experience every single time.',
    image: testimonialImg6,
  },
  {
    id: 7,
    name: 'Jessica M.',
    role: 'Luxury Event Guest',
    quote:
      'From the music to the ambiance, everything was curated to perfection. It wasn’t just an event; it was an experience!',
    image: testimonialImg7,
  },
  {
    id: 8,
    name: 'Emeka D.',
    role: 'VIP Guest',
    quote:
      'Every event is a work of art—flawless execution, high-end aesthetics, and an unforgettable experience every single time.',
    image: testimonialImg8,
  },
];

const pairVariants = {
  initial: { opacity: 0, scale: 0.78 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.55, ease: 'easeIn' as const },
  },
};

const leftCardExit = {
  x: -220,
  transition: { duration: 0.7, ease: 'easeInOut' as const },
};
const rightCardExit = {
  x: 220,
  transition: { duration: 0.7, ease: 'easeInOut' as const },
};

function TestimonialCard({
  testimonial,
  isLeft,
}: {
  testimonial: Testimonial;
  isLeft: boolean;
}) {
  return (
    <motion.div
      className='bg-white rounded-3xl shadow-lg p-4 md:p-8 flex gap-5 md:gap-8 items-stretch min-h-76 md:min-h-112'
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: 'easeOut' },
      }}
      exit={isLeft ? leftCardExit : rightCardExit}
      layout
    >
      <div className='w-28 md:w-1/2 rounded-2xl overflow-hidden shrink-0 relative min-h-72 md:min-h-88'>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>
      <div className='space-y-8 text-text flex-1 flex flex-col justify-start'>
        <div className='space-y-1'>
          <h3 className='text-lg md:text-2xl font-bold text-text font-montserrat'>
            {testimonial.name}
          </h3>
          <p className='text-sm md:text-base text-text/70 italic font-montserrat'>
            {testimonial.role}
          </p>
        </div>
        <p className='text-sm md:text-base leading-relaxed text-text/80 font-mooli'>
          {testimonial.quote}
        </p>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);

  const totalPages = useMemo(() => Math.ceil(testimonials.length / 2), []);

  const currentPair = useMemo(() => {
    const start = page * 2;
    return testimonials.slice(start, start + 2);
  }, [page]);

  const goTo = (next: number) => {
    const safe = ((next % totalPages) + totalPages) % totalPages;
    setPage(safe);
  };

  // Auto-advance through pages
  useEffect(() => {
    const id = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6500);

    return () => clearInterval(id);
  }, [totalPages]);

  return (
    <section
      id='testimonials'
      className='bg-primary text-white px-4 md:px-6 py-14 md:py-20'
    >
      <div className='w-full mx-auto relative'>
        <div className='text-center max-w-3xl mx-auto space-y-4 mb-10 md:mb-14'>
          <h2 className='text-3xl md:text-4xl font-miama'>
            Voices of Experience
          </h2>
          <p className='text-sm md:text-base text-white/90 leading-relaxed font-mali'>
            The Posh Elites isn&apos;t just about our own experience; From
            jaw-dropping vibes to the kind of fun that lasts way after the
            party&apos;s over, our guests always leave with memories worth a
            lifetime. And let&apos;s be real, they&apos;ll tell you it was the
            best time they&apos;ve ever had. But, of course, we&apos;re not ones
            to brag… we&apos;ll just let the rave reviews speak for themselves.
          </p>
        </div>

        {/* Desktop dots (vertical) */}
        <div className='hidden md:flex flex-col gap-3 absolute right-0 top-0 -translate-y-1/2 pr-2'>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to testimonials set ${idx + 1}`}
              className={`w-4 h-4 rounded-full border border-white transition ${
                idx === page ? 'bg-white' : 'bg-transparent hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className='relative'>
          {/* Mobile dots (horizontal) */}
          <div className='md:hidden flex justify-center gap-2 mb-6'>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to testimonials set ${idx + 1}`}
                className={`w-3.5 h-3.5 rounded-full border border-white transition ${
                  idx === page ? 'bg-white' : 'bg-transparent hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className='bg-primary/50 rounded-[28px] md:rounded-4xl md:p-6 min-h-[65vh] md:min-h-[75vh] flex items-center'>
            <AnimatePresence mode='popLayout'>
              <motion.div
                key={page}
                variants={pairVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'
              >
                {currentPair.map((testimonial, idx) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    isLeft={idx === 0}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
