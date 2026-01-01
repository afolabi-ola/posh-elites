import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bottomPartyImg from '@/assets/images/bottom-full-party.svg';
import overlayYachtImg from '@/assets/images/overlay-left-yatch-img.svg';
import overlayYachtImgMobile from '@/assets/images/overlay-left-yatch-img-mobile.svg';
import overlayLadyImg from '@/assets/images/overlay-right-lady-img.svg';
import overlayLadyImgMobile from '@/assets/images/overlay-right-lady-img-mobile.svg';
import { EventMarquee } from '@/components/EventMarquee';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const [initialMouse, setInitialMouse] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  useEffect(() => {
    const updatePadding = () => {
      const nav = document.querySelector('nav');
      if (nav && sectionRef.current) {
        const navHeight = nav.offsetHeight + 20;
        console.log({ navHeight });
        sectionRef.current.style.paddingTop = `${navHeight}px`;
      }
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  const leftOverlayImage = isMobile ? overlayYachtImgMobile : overlayYachtImg;
  const rightOverlayImage = isMobile ? overlayLadyImgMobile : overlayLadyImg;
  // Animation function
  const playAnimation = () => {
    if (
      hasAnimated ||
      prefersReducedMotion ||
      !leftPanelRef.current ||
      !rightPanelRef.current ||
      !bannerRef.current
    ) {
      return;
    }

    setHasAnimated(true);

    const leftExit = isMobile
      ? { y: '-100%', opacity: 0 }
      : { x: '-100%', opacity: 0 };

    const rightExit = isMobile
      ? { y: '100%', opacity: 0 }
      : { x: '100%', opacity: 0 };

    const tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: 'power2.inOut',
      },
    });

    tl.to(leftPanelRef.current, leftExit, 0)
      .to(rightPanelRef.current, rightExit, 0)
      .fromTo(bannerRef.current, { scale: 1.05 }, { scale: 1 }, 0);
  };

  // Trigger 1: Mouse movement
  useEffect(() => {
    if (prefersReducedMotion || hasAnimated) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!initialMouse) {
        setInitialMouse({ x: e.clientX, y: e.clientY });
        return;
      }

      const distance = Math.sqrt(
        Math.pow(e.clientX - initialMouse.x, 2) +
          Math.pow(e.clientY - initialMouse.y, 2),
      );

      if (distance > 100) {
        playAnimation();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [initialMouse, hasAnimated, prefersReducedMotion]);

  // Trigger 2: Scroll
  useEffect(() => {
    if (prefersReducedMotion || hasAnimated) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        playAnimation();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, prefersReducedMotion]);

  // Trigger 3: Auto after 3 seconds
  useEffect(() => {
    if (prefersReducedMotion || hasAnimated) return;

    const timer = setTimeout(() => {
      playAnimation();
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasAnimated, prefersReducedMotion]);

  return (
    <>
      <section
        ref={sectionRef}
        id='hero'
        className='relative min-h-[70vh] md:h-screen overflow-hidden text-text'
      >
        {/* Layer 2: Banner Underneath */}
        <div
          ref={bannerRef}
          className='absolute inset-0 z-1'
          style={{ willChange: 'transform' }}
        >
          <img
            src={bottomPartyImg}
            alt='Guests enjoying a luxury event'
            className='h-full w-full object-cover'
            loading='lazy'
          />
        </div>

        {/* Layer 1: Pink Curtain Overlay */}
        <div className='absolute inset-0 z-2 flex md:block'>
          <div className='relative h-full w-full flex md:block flex-col md:flex-row'>
            {/* Left panel */}
            <div
              ref={leftPanelRef}
              className='w-full flex-1 h-full md:h-full md:absolute md:inset-y-0 md:left-0 md:w-1/2 bg-secondary flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-4 md:py-0 items-end'
              style={{ willChange: 'transform, opacity' }}
            >
              <div className='max-w-lg space-y-4 h-full md:h-auto'>
                <div className='w-full md:h-86'>
                  <img
                    src={leftOverlayImage}
                    alt='Yacht party scene'
                    className='w-full object-contain h-full'
                    loading='lazy'
                  />
                </div>
                <div className='space-y-1 text-center flex items-center flex-col'>
                  <h1 className='text-primary text-sm sm:text-4xl lg:text-xl uppercase font-semibold'>
                    Unforgettable Experiences
                  </h1>
                  <p className='text-xs sm:text-lg text-text max-w-62.5'>
                    Carefully curated moments. Always elite.
                  </p>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div
              ref={rightPanelRef}
              className='w-full flex-1 h-full md:h-full md:absolute md:inset-y-0 md:right-0 md:w-1/2 bg-secondary flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-4 md:py-0 items-start'
              style={{ willChange: 'transform, opacity' }}
            >
              <div className='ml-auto w-full space-y-2 md:space-y-6 text-right h-full md:h-auto'>
                <div className='flex w-full items-center justify-center md:justify-between gap-2'>
                  <div className='md:h-86 h-[100px] grow'>
                    <img
                      src={rightOverlayImage}
                      alt='Elegant lady with umbrella'
                      className='w-full max-w-xs object-contain h-full'
                      loading='lazy'
                    />
                  </div>

                  <div className='text-center flex items-center flex-col'>
                    <div className='inline-flex flex-col items-center justify-center gap-2 px-4 py-2 border-y border-primary text-primary text-sm sm:text-xl font-semibold tracking-[0.18em] uppercase'>
                      LA VELOTUS
                    </div>
                    <p className='text-xs sm:text-lg text-text max-w-40 mt-2'>
                      Where vibes meet elegance
                    </p>
                  </div>
                </div>

                <div className='text-left'>
                  <p className='text-[10px] sm:text-base text-text leading-relaxed'>
                    At The Posh Elites, we don&apos;t just throw parties — we
                    create experiences that stay with you. Each event is an
                    expression of class, connection, and curated luxury. The
                    kind that has your group chat buzzing and your IG feed
                    glowing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Marquee Section */}
      <EventMarquee />
    </>
  );
}
