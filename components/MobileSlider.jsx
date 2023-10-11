import React, { useEffect, useRef } from 'react';

const firstSlide = [
  'SECOND SERVICE FREE',
  'SECOND SERVICE FREE',
  'SECOND SERVICE FREE',
  'SECOND SERVICE FREE',
  'SECOND SERVICE FREE',
  'SECOND SERVICE FREE',
];

const secondSlide = [
  'NO CALL OUT FEES',
  'NO CALL OUT FEES',
  'NO CALL OUT FEES',
  'NO CALL OUT FEES',
  'NO CALL OUT FEES',
  'NO CALL OUT FEES',
];

const thirdSlide = [
  '100% SATISFACTION GUARANTEE',
  '100% SATISFACTION GUARANTEE',
  '100% SATISFACTION GUARANTEE',
  '100% SATISFACTION GUARANTEE',
  '100% SATISFACTION GUARANTEE',
];

const MobileSlider = () => {
  const firstSlideRef = useRef();
  const secondSlideRef = useRef();
  const thirdSlideRef = useRef();

  const getScrollOffset = () => {
    firstSlideRef.current.style.transform = `translateX(${
      window.scrollY.toFixed(1) / 2.9
    }px)`;
    secondSlideRef.current.style.transform = `translateX(-${
      window.scrollY.toFixed(1) / 2.9
    }px)`;
    thirdSlideRef.current.style.transform = `translateX(${
      window.scrollY.toFixed(1) / 2.9
    }px)`;
    firstSlideRef.current.style.transition = ' all 0.4s';
    secondSlideRef.current.style.transition = ' all 0.4s';
    thirdSlideRef.current.style.transition = ' all 0.4s';
  };
  useEffect(() => {
    window.addEventListener('scroll', getScrollOffset, { passive: true });
    return () =>
      window.removeEventListener('scroll', getScrollOffset, { passive: true });
  }, []);
  return (
    <section className="w-screen overflow-hidden">
      <div className="bg-green-base flex flex-col gap-5 pt-10 pb-14 text-white/70">
        <div className="animate-infinite">
          <div
            className="flex items-center justify-center relative -left-[425vw]"
            ref={firstSlideRef}
          >
            {firstSlide.map((item, idx) => (
              <div className="flex w-[150vw]" key={item + idx}>
                <span className={` text-5xl md:text-7xl px-5`}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" animate-infinite-2">
          <div
            className="flex justify-center -left-[70vw]"
            ref={secondSlideRef}
          >
            {secondSlide.map((item, idx) => (
              <div className="w-[120vw]" key={item + idx}>
                <span className={`text-5xl md:text-7xl px-5`}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-infinite-1">
          <div
            className="flex justify-center relative -left-[500vw]"
            ref={thirdSlideRef}
          >
            {thirdSlide.map((item, idx) => (
              <div className="flex w-[210vw]" key={item + idx}>
                <span className={`text-5xl md:text-7xl `}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSlider;
