import gsap from 'gsap';

const revealProject = (container) => {
  const headerLink = container.querySelector('header a');
  const images = container.querySelectoAll('.image');
  const content = container.querySelectoAll('.content');
  const h1 = container.querySelectoAll('h1');
  const img = container.querySelectoAll('img');
  const hero = container.querySelector('.hero');
  const tl = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: 'power4.out',
    },
  });

  tl
    .set(hero, { autoAlpha: 1 })
    .from(images, { xPercent: -101,
      stagger: 0.1 }, 0)
    .from(img, { xPercent: 101,
      stagger: 0.1 }, 0)
    .from(h1, { xPercent: 70,
      autoAlpha: 0 }, 0)
    .from(headerLink, { yPercent: 100 }, 0)
    .from(content, { autoAlpha: 0,
      y: 20 }, 0.2);

  return tl;
};

export default revealProject;