import { motion } from 'framer-motion';
import miniGallery1 from '@/assets/images/mini-gallery-img-1.svg';
import miniGallery2 from '@/assets/images/mini-gallery-img-2.svg';
import miniGallery3 from '@/assets/images/mini-gallery-img-3.svg';
import miniGallery4 from '@/assets/images/mini-gallery-img-4.svg';

const images = [
  { src: miniGallery1, alt: 'Club party scene' },
  { src: miniGallery2, alt: 'Luxury party night' },
  { src: miniGallery3, alt: 'Yacht party in Dubai' },
  { src: miniGallery4, alt: 'Beach scene with Dubai skyline' },
];

export default function MiniGallerySection() {
  return (
    <section className='py-12 md:py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
          {images.map((image, index) => {
            const startY = index % 2 === 0 ? 0 : 40;
            const endY = index % 2 === 0 ? 40 : 0;

            return (
              <motion.div
                key={index}
                className='relative rounded-3xl overflow-hidden shadow-lg'
                animate={{
                  y: [startY, startY, endY, endY, startY],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.333, 0.5, 0.833, 1],
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-full object-cover'
                  loading='lazy'
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
