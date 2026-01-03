import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import signatureExpImg from '@/assets/images/what-we-offer-img-1.svg';
import partyImg from '@/assets/images/what-we-offer-img-2.svg';
import beachImg from '@/assets/images/what-we-offer-img-3.svg';
import vipPassImg from '@/assets/images/what-we-offer-img-4.svg';
import signatureExpImgMobile from '@/assets/images/what-we-offer-img-1-mobile.svg';
import partyImgMobile from '@/assets/images/what-we-offer-img-2-mobile.svg';
import beachImgMobile from '@/assets/images/what-we-offer-img-3-mobile.svg';
import vipPassImgMobile from '@/assets/images/what-we-offer-img-4-mobile.svg';

const offers = [
  {
    id: 1,
    title: 'Signature Experiences',
    description: `We don’t just host events — we set the tone for the season. From our legendary Sails & Tales party to rooftop rendezvous and sunset pool affairs, expect premium vibes only.`,
    image: signatureExpImg,
  },
  {
    id: 2,
    title: 'Curated Vibes',
    description:
      'Think aesthetics on point. From invites that pop to dress codes that slay — we make sure every detail delivers a Pinterest-worthy experience with a sprinkle of Posh magic.',
    image: partyImg,
  },
  {
    id: 3,
    title: 'Elite Community',
    description:
      'We attract the kind of people who know how to show up and show out — entrepreneurs, creatives, lovers of life. Our events are where the real ones link up and the bold ones stand out.',
    image: beachImg,
  },
  {
    id: 4,
    title: 'Exclusive Access',
    description: `Our experiences are more than just events—they’re exclusive invitations to unforgettable moments. By joining us, you gain access to luxury gatherings, one-of-a-kind vibes, and a community that thrives on connection, creativity, and elegance. If you’re here, you’re in the right circle.`,
    image: vipPassImg,
  },
];

export default function WhatWeOfferSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' && window.innerWidth >= 768,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMobileImages = () => {
    return [
      signatureExpImgMobile,
      partyImgMobile,
      beachImgMobile,
      vipPassImgMobile,
    ];
  };

  const getDesktopImages = () => {
    return [signatureExpImg, partyImg, beachImg, vipPassImg];
  };

  return (
    <section
      id='what-we-offer'
      className='bg-secondary py-12 md:py-20 px-4 md:px-6'
    >
      <div className='max-w-7xl mx-auto w-full'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-4xl md:text-5xl text-text mb-4 font-miama'>
            What We Offer
          </h2>
        </div>

        {/* Grid Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
          {offers.map((offer) => {
            const isHovered = hoveredId === offer.id;
            const shouldShowText = isHovered || !isDesktop;
            const imageList = isDesktop
              ? getDesktopImages()
              : getMobileImages();
            const displayImage = imageList[offer.id - 1];

            return (
              <motion.div
                key={offer.id}
                onMouseEnter={() => setHoveredId(offer.id)}
                onMouseLeave={() => setHoveredId(null)}
                className='relative h-screen max-h-125 md:h-screen rounded-2xl overflow-hidden cursor-pointer group'
              >
                {/* Image */}
                <img
                  src={displayImage}
                  alt={offer.title}
                  className='absolute inset-0 w-full h-full object-cover'
                />

                {/* Clip */}
                <motion.div
                  animate={{
                    backgroundColor: shouldShowText
                      ? 'var(--color-primary)'
                      : '#a1a1a1',
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-full h-full rounded-br-2xl border border-white ${
                    shouldShowText ? 'bg-primary' : 'bg-neutral-400'
                  }`}
                />

                {/* Overlay - always visible on mobile, on hover on desktop */}
                <motion.div
                  animate={{
                    opacity: shouldShowText ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6'
                >
                  <motion.div
                    className='bg-neutral-400 p-4 lg:p-10 rounded-2xl text-text  font-mooli'
                    animate={{
                      opacity: shouldShowText ? 1 : 0,
                      y: shouldShowText ? 0 : 50,
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    <h3 className='text-xl md:text-3xl mb-2 text-center font-light'>
                      {offer.title}
                    </h3>
                    <p className='text-sm md:text-lg line-clamp-3'>
                      {offer.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
