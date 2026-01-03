import { useState } from 'react';
import { motion } from 'framer-motion';
import howWeWorkSlideOneImg from '@/assets/images/how-we-work-slide-one-img.svg';
import howWeWorkSlideTwoImg from '@/assets/images/how-we-work-slide-two-img.svg';
import howWeWorkSlideThreeImg from '@/assets/images/how-we-work-slide-three-img.svg';

const panels = [
  {
    id: 1,
    number: 1,
    title: 'Inspiration & Concept',
    subtitle: 'We dream bigger, so you can live larger',
    description: `Every great experience starts with a spark of imagination. We gather inspiration from everywhere — from the latest luxe trends to timeless vibes that scream elegance with a side of fun. Whether it’s a moonlit yacht cruise or a chic penthouse hangout, we dream up experiences that make you say, “Where do I sign up?`,
    image: howWeWorkSlideOneImg,
  },
  {
    id: 2,
    number: 2,
    title: 'Design & Curate',
    subtitle: 'Details That Speak Louder Than Words',
    description: `Once the dream is born, we get our hands dirty (in the best way possible!). From setting the perfect mood with stunning décor to curating just the right playlist, every little detail is treated like a work of art. We collaborate with top-tier vendors, designers, and creatives to ensure that everything fits seamlessly. The result? An experience so chic, it’s almost art. This is where we blend luxury with personality — all the glitz and glam, plus a sprinkle of surprise. Because when it comes to luxury, every detail matters.`,
    image: howWeWorkSlideTwoImg,
  },
  {
    id: 3,
    number: 3,
    title: 'Execution & Experience',
    subtitle: 'The Fun Starts Here, and You Just Show Up',
    description: `We make magic happen — behind the scenes, you won’t see the hustle because, well, we’ve got it covered while you sip champagne and enjoy the vibe. From flawless setups to effortless coordination, we take care of everything, so all you need to do is show up, be the star of the show and let the fun begin. The vibe is lit, and the music is on point — you just bring your best self and let us leave you with nothing but good memories, a few new friends, and possibly a hangover (worth it).`,
    image: howWeWorkSlideThreeImg,
  },
];

export default function HowWeWorkSection() {
  const [expandedPanel, setExpandedPanel] = useState(0);

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
    <section
      id='how-we-work'
      className='bg-secondary py-12 md:py-20 px-4 md:px-6'
    >
      <div className='max-w-7xl mx-auto w-full'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-4xl md:text-5xl font-display text-text mb-4 font-miama'>
            How We Work
          </h2>
          <p className='text-base md:text-lg text-text/70 max-w-3xl mx-auto font-mali'>
            At The Posh Elites, we don't just put up events — we craft moments
            that make you feel like you're living your best life. Here’s how we
            make it happen:
          </p>
        </div>

        {/* Desktop Accordion Container */}
        {isDesktop && (
          <div className='flex gap-2 flex-row h-[80vh] rounded-2xl overflow-hidden'>
            {panels.map((panel, index) => {
              const isExpanded = expandedPanel === index;
              const width = isExpanded ? 90 : 5;

              return (
                <motion.div
                  key={panel.id}
                  layout
                  onClick={() => setExpandedPanel(index)}
                  onMouseEnter={() => setExpandedPanel(index)}
                  className='relative cursor-pointer rounded-xl overflow-hidden group transition-all shrink-0'
                  animate={{ flex: width }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  role='button'
                  tabIndex={0}
                  aria-label={`${panel.title} - Step ${panel.number}`}
                >
                  {/* Background - Image if expanded, solid color if shrunk */}
                  {isExpanded ? (
                    <img
                      src={panel.image}
                      alt={panel.title}
                      className='absolute inset-0 w-full h-full object-cover'
                    />
                  ) : (
                    <div className='absolute inset-0 bg-primary/10' />
                  )}

                  {/* Gradient Overlay - only show on expanded */}
                  {isExpanded && (
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent' />
                  )}

                  {/* Content */}
                  <div className='absolute inset-0 flex flex-col justify-end p-8 text-white'>
                    {/* Number Badge */}
                    <motion.div
                      className={`rounded-full bg-white text-primary flex items-center justify-center font-bold w-14 h-14 text-xl mb-4 top-10 absolute ${
                        !isExpanded ? 'inset-0' : ''
                      }`}
                      animate={{ opacity: 1 }}
                    >
                      {panel.number}
                    </motion.div>

                    {/* Text Content - only show when expanded */}
                    {isExpanded && (
                      <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className='pointer-events-none'
                      >
                        <h3 className='text-2xl font-bold mb-2 font-maiandra'>
                          {panel.title}
                        </h3>
                        <p className='text-base text-secondary font-semibold mb-3 font-bricolage'>
                          {panel.subtitle}
                        </p>
                        <p className='text-sm text-white/90 line-clamp-4 font-mooli'>
                          {panel.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Mobile Accordion Container */}
        {!isDesktop && (
          <div className='flex flex-col gap-4'>
            {panels.map((panel, index) => {
              const isExpanded = expandedPanel === index;

              return (
                <motion.div
                  key={panel.id}
                  layout
                  onClick={() => setExpandedPanel(index)}
                  className='rounded-xl overflow-hidden'
                  role='button'
                  tabIndex={0}
                  aria-label={`${panel.title} - Step ${panel.number}`}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {/* Shrunk State */}
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className='h-20 bg-primary/10 flex items-center justify-start rounded-xl cursor-pointer'
                    >
                      <div className='rounded-full bg-white text-primary flex items-center justify-center font-bold w-10 h-10 text-base'>
                        {panel.number}
                      </div>
                    </motion.div>
                  )}

                  {/* Expanded State - Image on top, text below */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className='flex flex-col'
                    >
                      {/* Image Section with Number Badge */}
                      <div className='relative h-64 rounded-t-xl overflow-hidden'>
                        <img
                          src={panel.image}
                          alt={panel.title}
                          className='w-full h-full object-cover'
                        />
                        {/* Number Badge on Image */}
                        <div className='absolute top-4 left-4 rounded-full bg-white text-primary flex items-center justify-center font-bold w-12 h-12 text-lg'>
                          {panel.number}
                        </div>
                      </div>

                      {/* Text Content Section */}
                      <div className='bg-secondary p-6 rounded-b-xl'>
                        <div className='mb-4'>
                          <h3 className='text-lg font-bold text-text mb-1 font-maiandra'>
                            {panel.title}
                          </h3>
                          <p className='text-sm text-primary font-semibold font-bricolage'>
                            {panel.subtitle}
                          </p>
                        </div>
                        <p className='text-sm text-text/80 font-mooli'>
                          {panel.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
      {/* </div> */}
    </section>
  );
}
