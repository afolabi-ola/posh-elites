import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { Logo } from '@/components/Logo';
import GalleryCTASection from './sections/GalleryCTASection';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'How we work', href: '#how-we-work' },
  { label: 'What we Offer', href: '#what-we-offer' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Past Events', href: '#past-events' },
  { label: 'Gallery', href: '#gallery' },
];

const offers = [
  'SIGNATURE EXPERIENCES',
  'CURATED VIBES',
  'ELITE COMMUNITY',
  'EXCLUSIVE ACCESS',
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: <FaInstagram className='h-5 w-5' />,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com',
    icon: <FaTiktok className='h-5 w-5' />,
  },
  {
    label: 'X',
    href: 'https://twitter.com',
    icon: <FaXTwitter className='h-5 w-5' />,
  },
];

export function Footer() {
  return (
    <>
      <GalleryCTASection />
      <footer className='bg-primary text-white pt-40  font-montserrat'>
        <div className='max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Company Info */}
          <div className='space-y-4'>
            <Logo
              onClick={() =>
                document
                  .getElementById('hero')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            />
            <p className='text-sm text-white/80'>Where vibes meet elegance</p>
          </div>

          {/* Quick Access */}
          <div className='space-y-3'>
            <h4 className='text-lg font-semibold'>Quick Access</h4>
            <div className='flex flex-col space-y-2'>
              {quickLinks.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className='text-sm text-white/80 hover:text-accent inline-flex items-center gap-2'
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className='relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full'>
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* What We Offer */}
          <div className='space-y-3'>
            <h4 className='text-lg font-semibold'>What We Offer</h4>
            <div className='flex flex-col space-y-2'>
              {offers.map((item) => (
                <motion.span
                  key={item}
                  className='text-sm text-white/80 hover:text-accent uppercase tracking-[0.12em]'
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className='relative inline-block after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full'>
                    {item}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>

          {/* Stay Connected */}
          <div className='space-y-3'>
            <h4 className='text-lg font-semibold'>Stay Connected</h4>
            <div className='space-y-3 text-sm text-white/80'>
              <div className='flex items-center gap-3'>
                <FiMapPin className='h-5 w-5' />
                <span>Lagos, Nigeria</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiMail className='h-5 w-5' />
                <span>theposhelites@gmail.com</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiPhone className='h-5 w-5' />
                <span>+234-7040379701</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/15'>
          <div className='max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/80'>
            <span className='order-2 sm:order-1'>
              Copyright © 2025 The Posh Elites. All rights reserved.
            </span>

            <div className='order-1 sm:order-2 flex items-center gap-3'>
              <span className='uppercase tracking-[0.18em] text-xs text-white/70'>
                Follow us
              </span>
              <div className='flex items-center gap-2'>
                {socials.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors'
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: idx * 0.15,
                    }}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
