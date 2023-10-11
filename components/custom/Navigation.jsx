'use client';
import Image from 'next/image';
import React from 'react';

const Navigation = ({
  prevClick,
  nextClick,
  currSlide = 3,
  totalSlide = 5,
}) => {
  return (
    <div className=" items-center gap-5 hidden md:flex">
      <button onClick={prevClick}>
        <Image src={'/left-arrow.webp'} alt="larrow" width={45} height={10} />
      </button>
      <div className="text-2xl md:text-3xl font-light text-green-base">
        {currSlide}/{totalSlide}
      </div>
      <button onClick={nextClick}>
        <Image src={'/right-arrow.webp'} alt="larrow" width={45} height={10} />
      </button>
    </div>
  );
};

export default Navigation;
