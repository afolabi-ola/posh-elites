import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id='about'
      ref={ref}
      className='bg-secondary text-text px-12 py-8 md:py-12 mt-8'
    >
      <div className='w-full mx-auto text-center space-y-8'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='text-3xl md:text-5xl font-display text-primary'
        >
          About us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
          className='mx-auto max-full text-lg md:text-xl leading-relaxed text-text/90'
        >
          More Than Events — It’s a Lifestyle (With a Dash of Drama and
          Champagne) The Posh Elites is your favorite luxury lifestyle brand —
          the one that curates experiences so fabulous, you’ll be talking about
          them for months. We believe fun should sparkle, laughter should echo,
          and every moment should be Instagram-worthy (without even trying).
          <br />
          <br />
          We’re the creative minds behind those yacht parties you wish you
          didn’t miss, the penthouse affairs that feel like a movie, and the
          poolside scenes where strangers become besties over cocktails and
          curated playlists. We don't follow trends. We set them — then toast to
          them with a glass of something bubbly. If it’s not giving iconic, we
          don’t do it'
        </motion.p>
      </div>
    </section>
  );
}
