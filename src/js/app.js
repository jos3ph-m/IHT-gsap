import barba from '@barba/core';
import gsap from 'gsap';

const animationEnter = (container) => {
  return gsap.from(container, {
    autoAlpha: 0,
    duration: 2,
    clearProps: 'all',
    ease: 'none',
  });
};

const animationLeave = (container) => {
  return gsap.to(container, {
    autoAlpha: 0,
    duration: 2,
    clearProps: 'all',
    ease: 'none',
  });
};

// we need to wait for the animation to finish before enter animation plays
barba.init({
  transitions: [
    {
      once({ next }) {
        animationEnter(next.container);
      },
      leave: ({ current }) => animationLeave(current.container),
      enter({ next }) {
        animationEnter(next.container);
      },
    },
  ],
});
