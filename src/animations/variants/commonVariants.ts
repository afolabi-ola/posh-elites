/**
 * Framer Motion animation variants library
 * Designed for luxury aesthetic with smooth, slower transitions
 */

import type { Variants } from 'framer-motion';
import { DURATION, EASING, SPRING } from '../utils/animationConfig';

/**
 * Fade in animation
 * Simple opacity transition
 */
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.luxury,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.fast,
    },
  },
};

/**
 * Fade in with upward movement
 * Elegant entrance from bottom
 */
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: {
      duration: DURATION.fast,
    },
  },
};

/**
 * Fade in with downward movement
 * Elegant entrance from top
 */
export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: DURATION.fast,
    },
  },
};

/**
 * Scale in with fade
 * Subtle entrance with zoom effect
 */
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.luxury,
      ...SPRING.smooth,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: DURATION.fast,
    },
  },
};

/**
 * Stagger container for child animations
 * Coordinates animation timing across multiple elements
 */
export const staggerContainer: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

/**
 * Stagger item for use within staggerContainer
 * Each child animates with staggered timing
 */
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.luxury,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
  },
};

/**
 * Combined fade in up with spring animation
 * Bouncy but controlled entrance
 */
export const bounceInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ...SPRING.bouncy,
    },
  },
  exit: {
    opacity: 0,
    y: 60,
    transition: {
      duration: DURATION.fast,
    },
  },
};

/**
 * Rotate in with fade
 * Elegant rotational entrance
 */
export const rotateIn: Variants = {
  initial: {
    opacity: 0,
    rotate: -10,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    rotate: -10,
    transition: {
      duration: DURATION.fast,
    },
  },
};

/**
 * Slide in from left
 * Horizontal entrance animation
 */
export const slideInFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    x: -60,
    transition: {
      duration: DURATION.fast,
    },
  },
};

/**
 * Slide in from right
 * Horizontal entrance animation
 */
export const slideInFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    x: 60,
    transition: {
      duration: DURATION.fast,
    },
  },
};
