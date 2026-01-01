/**
 * Global animation configuration for luxury aesthetic
 * Provides consistent timing, easing, and spring configurations
 */

export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  slower: 1.2,
} as const;

export const EASING = {
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  luxury: [0.25, 0.46, 0.45, 0.94],
  smooth: [0.43, 0.13, 0.23, 0.96],
} as const;

export const SPRING = {
  gentle: {
    stiffness: 60,
    damping: 20,
    mass: 1,
  },
  smooth: {
    stiffness: 100,
    damping: 15,
    mass: 1,
  },
  bouncy: {
    stiffness: 120,
    damping: 12,
    mass: 1,
  },
} as const;

export const ANIMATION_CONFIG = {
  duration: DURATION,
  easing: EASING,
  spring: SPRING,
} as const;

export type AnimationDuration = keyof typeof DURATION;
export type EasingType = keyof typeof EASING;
export type SpringType = keyof typeof SPRING;
