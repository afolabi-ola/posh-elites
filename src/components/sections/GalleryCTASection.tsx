import { motion } from 'framer-motion';
import footerCTAImg from '@/assets/images/footer-cta-img.svg';
import footerCTAImgMobile from '@/assets/images/footer-cta-img-mobile.svg';

export default function GalleryCTASection() {
  return (
    <section className='px-4 md:px-6 py-12 md:py-16 min-h-60 relative'>
      <div className='max-w-[90%] mx-auto absolute -bottom-30 left-[5%]'>
        <div className='bg-linear-to-r from-white to-secondary rounded-3xl  relative min-h-80 md:min-h-80 shadow-2xl'>
          {/* Content Container */}
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8 md:p-12'>
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
              className='space-y-6 relative z-10'
            >
              <h2 className='text-lg md:text-4xl font-bricolage text-text leading-tight'>
                Step Into a World of Bold Luxury & Elevated Experiences — With
                Us
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className='bg-primary text-white px-3 md:px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition'
              >
                Join the community
              </motion.button>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
              className='h-80 md:h-96 hidden md:block absolute -right-10'
            >
              <motion.div
                animate={{ rotate: [0, -3, 0, 3, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='w-full h-full'
                style={{ transformOrigin: '50% 50%' }}
              >
                <img
                  src={footerCTAImg}
                  alt='Community Experience'
                  className='w-full h-full object-cover rounded-3xl'
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Image - Below text */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className='h-56 md:hidden pb-8 absolute'
          >
            <motion.div
              animate={{ rotate: [0, -3, 0, 3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className='w-full h-full'
              style={{ transformOrigin: '50% 50%' }}
            >
              <img
                src={footerCTAImgMobile}
                alt='Community Experience'
                className='w-full h-full object-cover'
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
