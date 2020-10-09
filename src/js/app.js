import barba from '@barba/core';
import { animationEnter, animationLeave } from './animations';

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
