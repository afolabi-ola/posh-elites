import { useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import {
  staggerContainer,
  staggerItem,
} from '@/animations/variants/commonVariants';
import { DURATION, EASING } from '@/animations/utils/animationConfig';
import { Logo } from '@/components/Logo';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'How we work', href: '#how-we-work' },
  { label: 'What we Offer', href: '#what-we-offer' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Past Events', href: '#past-events' },
  { label: 'Gallery', href: '#gallery' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  );
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const handleNavClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(href);
          setIsMenuOpen(false);
        }
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.target.id === 'hero') {
          setActiveSection('');
          return;
        }

        setActiveSection(`#${entry.target.id}`);
      });
    }, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) {
        observer.observe(element);
      }
    });

    const heroEl = document.getElementById('hero');
    if (heroEl) {
      observer.observe(heroEl);
    }

    return () => observer.disconnect();
  }, []);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`relative md:fixed md:top-0 md:left-0 md:right-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-primary backdrop-blur-md shadow-sm'
            : ' bg-primary backdrop-blur-sm'
        }`}
        style={{
          opacity: scrolled ? 1 : 0.95,
        }}
        initial={{ y: isMobile ? 0 : -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: DURATION.normal,
          ease: EASING.smooth,
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo Section */}
            <motion.div
              className='shrink-0 flex items-center gap-2'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: DURATION.normal,
                ease: EASING.smooth,
              }}
            >
              <Logo onClick={handleLogoClick} />
            </motion.div>

            {/* Desktop Navigation Items */}
            <motion.div
              className='hidden md:flex items-center gap-1'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: DURATION.normal,
                ease: EASING.smooth,
                delay: 0.1,
              }}
            >
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium relative transition-colors ${
                    activeSection === item.href
                      ? 'text-accent'
                      : 'text-secondary/70 hover:text-accent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                  {/* {activeSection === item.href && (
                    <motion.div
                      className='absolute bottom-0 left-0 right-0 h-0.5 bg-accent'
                      layoutId='navbar-indicator'
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: DURATION.normal,
                        ease: EASING.smooth,
                      }}
                    />
                  )} */}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className='hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-primary font-semibold text-sm shadow-sm hover:shadow-md border border-primary/20 transition-all cursor-pointer'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: DURATION.normal,
                ease: EASING.smooth,
                delay: 0.2,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'var(--color-secondary)',
                color: 'white',
              }}
              whileTap={{ scale: 0.98 }}
              aria-label='Join the community'
            >
              Join the community
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={handleMenuToggle}
              className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary/10 transition-colors cursor-pointer'
              aria-label='Toggle navigation menu'
              aria-expanded={isMenuOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 bg-black/40 backdrop-blur-sm z-30'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: DURATION.fast,
              }}
              onClick={handleCloseMenu}
              aria-hidden='true'
            />

            {/* Menu Drawer */}
            <motion.div
              className='fixed top-0 right-0 bottom-0 w-full max-w-xs bg-primary shadow-2xl z-40 flex flex-col'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: DURATION.normal,
                ease: EASING.smooth,
              }}
            >
              {/* Close Button */}
              <div className='flex justify-between items-center pt-6'>
                <motion.button
                  onClick={handleCloseMenu}
                  className='p-2 rounded-md text-secondary transition-colors w-full flex justify-end cursor-pointer'
                  aria-label='Close menu'
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <motion.div
                className='flex-1 overflow-y-auto p-6'
                variants={staggerContainer}
                initial='initial'
                animate='animate'
              >
                {NAV_ITEMS.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      activeSection === item.href
                        ? 'bg-secondary/10 text-accent'
                        : 'text-white hover:bg-primary/5 hover:text-accent'
                    }`}
                    variants={staggerItem}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCloseMenu}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Mobile CTA Button */}
              <motion.div
                className='p-6 border-t border-secondary/10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: DURATION.normal,
                  delay: 0.4,
                }}
              >
                <motion.button
                  className='w-full px-6 py-3 rounded-full bg-white text-primary font-semibold text-sm transition-all cursor-pointer'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label='Join the community'
                  onClick={handleCloseMenu}
                >
                  Join the community
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
