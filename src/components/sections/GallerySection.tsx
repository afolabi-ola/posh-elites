import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import galleryOneFront from '@/assets/images/gallery-img-one-front.svg';
import galleryOneBack from '@/assets/images/gallery-img-one-back.svg';
import galleryTwoFront from '@/assets/images/gallery-img-two-front.svg';
import galleryTwoBack from '@/assets/images/gallery-img-two-back.svg';
import galleryThreeFront from '@/assets/images/gallery-img-three-front.svg';
import galleryThreeBack from '@/assets/images/gallery-img-three-back.svg';
import galleryFourFront from '@/assets/images/gallery-img-four-front.svg';
import galleryFourBack from '@/assets/images/gallery-img-four-back.svg';
import galleryFiveFront from '@/assets/images/gallery-img-five-front.svg';
import galleryFiveBack from '@/assets/images/gallery-img-five-back.svg';
import gallerySixFront from '@/assets/images/gallery-img-six-front.svg';
import gallerySixBack from '@/assets/images/gallery-img-six-back.svg';

type GalleryCard = {
  id: number;
  front: string;
  back: string;
};

const cards: GalleryCard[] = [
  { id: 1, front: galleryOneFront, back: galleryOneBack },
  { id: 2, front: galleryTwoFront, back: galleryTwoBack },
  { id: 3, front: galleryThreeFront, back: galleryThreeBack },
  { id: 4, front: galleryFourFront, back: galleryFourBack },
  { id: 5, front: galleryFiveFront, back: galleryFiveBack },
  { id: 6, front: gallerySixFront, back: gallerySixBack },
];

const FLIP_MS = 1000;
const SHIFT_MS = 800;
const HOLD_MS = 2000;

function preloadImages(srcs: string[]) {
  srcs.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    preloadImages(cards.flatMap((c) => [c.front, c.back]));
  }, []);

  useEffect(() => {
    let active = true;
    const run = async () => {
      while (active) {
        setIsFlipping(true);
        await new Promise((res) => setTimeout(res, FLIP_MS));
        if (!active) return;
        setIsFlipping(false);
        setCurrentIndex((prev) => (prev + 1) % cards.length);
        await new Promise((res) => setTimeout(res, SHIFT_MS + HOLD_MS));
      }
    };

    run();
    return () => {
      active = false;
    };
  }, []);

  const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;

  const visibleIds = [prevIndex, currentIndex, nextIndex];

  const getSlot = (id: number) => {
    if (id === currentIndex) {
      return { x: '0%', y: 0, scale: 1, opacity: 1, zIndex: 2 };
    }
    if (id === prevIndex) {
      return { x: '-95%', y: 16, scale: 0.9, opacity: 1, zIndex: 1 };
    }
    if (id === nextIndex) {
      return { x: '95%', y: 16, scale: 0.9, opacity: 1, zIndex: 1 };
    }
    return { x: '0%', y: 80, scale: 0.6, opacity: 0, zIndex: 0 };
  };

  const perspectiveStyle = { perspective: '1200px' } as const;

  return (
    <section id='gallery' className='bg-secondary py-12 md:py-20 px-4 md:px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-6 md:mb-14 space-y-3'>
          <h2 className='text-4xl md:text-5xl font-miama text-text'>
            Our World
          </h2>
          <p className='text-base md:text-lg text-text/70 font-mali'>
            Past moments, forever memories.
          </p>
          <p className='text-base md:text-lg text-text/70'>
            Past moments, forever memories. Peek into the glam, the glow, and
            the good vibes. Warning: may cause FOMO 😎
          </p>
        </div>

        {/* 3D Carousel (Desktop and Mobile) */}
        <div
          className='relative h-90 md:h-155 w-full flex items-center justify-center overflow-hidden'
          style={perspectiveStyle}
        >
          {visibleIds.map((id) => {
            const card = cards[id];
            const slot = getSlot(id);
            const isCurrent = id === currentIndex;

            return (
              <motion.div
                key={card.id}
                className='absolute w-[64%] md:w-[52%] aspect-4/3 rounded-[28px] shadow-2xl'
                animate={{
                  x: slot.x,
                  y: slot.y,
                  scale: slot.scale,
                  opacity: slot.opacity,
                  zIndex: slot.zIndex,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className='relative w-full h-full'
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className='absolute inset-0 rounded-[28px] overflow-hidden'
                    style={{ backfaceVisibility: 'hidden' }}
                    animate={{ rotateY: isCurrent && isFlipping ? 180 : 0 }}
                    transition={{
                      duration: FLIP_MS / 1000,
                      ease: 'easeInOut',
                    }}
                  >
                    <img
                      src={card.front}
                      alt={`Gallery ${card.id} front`}
                      className='w-full h-full object-cover'
                      draggable={false}
                    />
                  </motion.div>

                  <motion.div
                    className='absolute inset-0 rounded-[28px] overflow-hidden aspect-4/3'
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                    animate={{ rotateY: isCurrent && isFlipping ? 360 : 180 }}
                    transition={{
                      duration: FLIP_MS / 1000,
                      ease: 'easeInOut',
                    }}
                  >
                    <img
                      src={card.back}
                      alt={`Gallery ${card.id} back`}
                      className='w-full h-full object-cover'
                      draggable={false}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
