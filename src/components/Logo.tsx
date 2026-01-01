import { motion } from 'framer-motion';
import logo from '@/assets/logo.svg';

type LogoProps = {
  onClick?: () => void;
};

export function Logo({ onClick }: LogoProps) {
  return (
    <motion.button
      type='button'
      onClick={onClick}
      className='flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-md'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label='Go to hero section'
    >
      <img src={logo} alt='The Posh Elites' className='h-10 w-auto' />
      <span className='sr-only'>The Posh Elites - La Velotus</span>
    </motion.button>
  );
}
