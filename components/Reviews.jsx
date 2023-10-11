import React, { useRef, useState } from 'react';
import Heading from './custom/Heading';
import Image from 'next/image';
import { reviews } from '@/constants';
import Navigation from './custom/Navigation';

const ReviewCard = ({ imageUrl, name, type, desc }) => {
  return (
    <div className="border border-green-base min-w-[280px] md:min-w-[320px] p-5 rounded-2xl flex-1">
      <div className="flex gap-3 p-1 !w-full">
        <Image src={imageUrl} alt="review" width={50} height={50} />
        <div>
          <h6 className="font-bold uppercase">{name}</h6>
          <p className="text-xs capitalize">{type}</p>
        </div>
      </div>
      <p className="hidden md:block text-lg md:text-sm md:font-normal py-2">
        {desc}
      </p>
      <p className="md:hidden text-lg md:text-sm md:font-normal py-2">
        {desc.slice(0, 160)}
      </p>
      <div className="flex w-full">
        <Image src={'/icons/facebook.svg'} alt="fb" width={20} height={20} />
        <Image src={'/icons/linkedin.svg'} alt="fb" width={20} height={20} />
      </div>
    </div>
  );
};

const Reviews = () => {
  const [xPos, setXpos] = useState(0);
  const [currSlide, setCurrSlide] = useState(3);
  const slidesLen = reviews.length;

  const ref = useRef();
  const prevFn = (e) => {
    if (currSlide < 4) {
      return;
    }
    setCurrSlide(currSlide - 1);
    ref.current.scrollLeft -= 310;
  };
  const nextFn = (e) => {
    if (currSlide >= slidesLen) {
      return;
    }
    setCurrSlide(currSlide + 1);
    ref.current.scrollLeft += 310;
  };
  return (
    <section className="sm:px-5 ">
      <div className="flex justify-between px-3 py-4 md:py-0 md:px-10">
        <Heading content={'What do our clients say?'} />
        <Navigation
          prevClick={prevFn}
          nextClick={nextFn}
          currSlide={currSlide}
          totalSlide={slidesLen}
        />
      </div>
      <div
        className={`review-box md:pl-10 duration-300 px-5 flex gap-6 md:gap-[50px] md:w-full 2xl:w-[75vw] !overflow-x-auto`}
        ref={ref}
      >
        {reviews.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
