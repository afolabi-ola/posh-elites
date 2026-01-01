import { useState } from 'react';
import { motion } from 'framer-motion';
import signatureExpImg from '@/assets/images/what-we-offer-img-1.svg';
import partyImg from '@/assets/images/what-we-offer-img-2.svg';
import beachImg from '@/assets/images/what-we-offer-img-3.svg';
import vipPassImg from '@/assets/images/what-we-offer-img-4.svg';

const offers = [
  {
    id: 1,
    title: 'Signature Experiences',
    description:
      "We don't just host events — we set the tone for the season. From our legendary Sails & Tales party to rooftop rendezvous and sunset pool affairs, expect premium vibes only.",
    image: signatureExpImg,
  },
  {
    id: 2,
    title: 'Private Parties',
    description:
      "Your vibe, amplified. Whether it's an intimate gathering or an all-out celebration, we curate the perfect atmosphere with premium drinks, killer music, and unforgettable company.",
    image: partyImg,
  },
  {
    id: 3,
    title: 'Luxury Retreats',
    description:
      'Escape the ordinary and immerse yourself in pure luxury. From yacht getaways to exclusive villa experiences, we bring the glam wherever you want to go.',
    image: beachImg,
  },
  {
    id: 4,
    title: 'VIP Access',
    description:
      'Behind the velvet rope and beyond. Get exclusive access to the hottest venues, private clubs, and invitation-only events that only The Posh Elites can deliver.',
    image: vipPassImg,
  },
];

export default function WhatWeOfferSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
    <section
      id='what-we-offer'
      className='bg-secondary py-12 md:py-20 px-4 md:px-6'
    >
      <div className='max-w-7xl mx-auto w-full'>
        {/* Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-4xl md:text-5xl font-display text-text mb-4'>
            What We Offer
          </h2>
          <p className='text-base md:text-lg text-text/70 max-w-3xl mx-auto'>
            At The Posh Elites, luxury isn't just an experience—it's a
            lifestyle. Discover our curated collection of premium offerings
            designed to elevate every moment.
          </p>
        </div>

        {/* Grid Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
          {offers.map((offer) => {
            const isHovered = hoveredId === offer.id;
            const shouldShowText = isHovered || !isDesktop;

            return (
              <motion.div
                key={offer.id}
                onMouseEnter={() => setHoveredId(offer.id)}
                onMouseLeave={() => setHoveredId(null)}
                className='relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer group'
              >
                {/* Image */}
                <img
                  src={offer.image}
                  alt={offer.title}
                  className='absolute inset-0 w-full h-full object-cover'
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
                    animate={{
                      opacity: shouldShowText ? 1 : 0,
                      y: shouldShowText ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    <h3 className='text-xl md:text-2xl font-bold text-white mb-2'>
                      {offer.title}
                    </h3>
                    <p className='text-sm md:text-base text-white/90 line-clamp-3'>
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
