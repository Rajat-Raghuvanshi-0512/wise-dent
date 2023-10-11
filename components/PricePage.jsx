'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './custom/Button';
import { pricePageData } from '@/constants';

const PricePage = ({ openModal }) => {
  const [selected, setSelected] = useState('Experience');
  return (
    <section>
      <div className="bg-green-base mx-5 md:mx-6 lg:mx-10 mt-4 md:mt-20 rounded-lg md:rounded-xl lg:rounded-3xl p-4 md:p-7 lg:p-10 md:min-h-[300px]">
        <div className="flex justify-between md:justify-center  lg:gap-20 w-full items-start text-white text-xs md:text-2xl lg:text-4xl uppercase min-h-[200px] md:min-h-0">
          <button
            className={`${
              selected === 'Experience' &&
              'md:font-bold bg-white text-green-base md:bg-transparent md:text-white'
            } border md:border-none px-2 py-1 rounded-lg w-24 md:w-[30%] lg:w-[20%]`}
            onClick={() => setSelected('Experience')}
          >
            EXPERIENCE
          </button>
          <div className="h-16 md:w-1 lg:w-[6px] bg-white"></div>
          <button
            className={`${
              selected === 'Reliability' &&
              'md:font-bold bg-white text-green-base md:bg-transparent md:text-white'
            } border md:border-none px-2 py-1 rounded-lg w-24 md:w-[30%] lg:w-[20%]`}
            onClick={() => setSelected('Reliability')}
          >
            RELIABILITY
          </button>
          <div className="h-16 md:w-1 lg:w-[6px] bg-white"></div>
          <button
            className={`${
              selected === 'Quality' &&
              'md:font-bold bg-white text-green-base md:bg-transparent md:text-white'
            } border md:border-none px-2 py-1 rounded-lg w-24 md:w-[30%] lg:w-[20%]`}
            onClick={() => setSelected('Quality')}
          >
            QUALITY
          </button>
        </div>
        <div className="w-[45%] ml-auto lg:text-xl text-white pr-5 mt-10 hidden md:block">
          {pricePageData[selected]}
        </div>
      </div>
      <div className="mx-3 md:mx-14 flex flex-col md:flex-row">
        <div className="md:flex-1 lg:flex-[1.2]">
          <div className="flex justify-center md:justify-normal -mt-40 md:mt-0">
            <Image
              src={
                selected === 'Experience'
                  ? pricePageData.img1
                  : selected === 'Reliability'
                  ? pricePageData.img2
                  : pricePageData.img3
              }
              alt="price"
              width={200}
              height={200}
              className="md:ml-7 md:-mt-14 lg:-mt-28 w-[330px] md:w-[400px] lg:w-[550px]"
            />
          </div>
        </div>
        <div className="flex flex-[1] mt-10 flex-col mx-3">
          <h4 className="md:text-center lg:-ml-10 text-green-base font-bold text-2xl lg:text-3xl">
            Get things done the right way.
          </h4>
          <ul className="text-[#455330] lg:mt-10 font-bold md:font-semibold  md:text-xs lg:text-lg flex flex-col gap-3 mt-5 lg:gap-5 lg:font-bold md:ml-10">
            <li className="flex items-center gap-3">
              <Image
                src={'/icons/dollar.svg'}
                alt="dollar"
                width={30}
                height={30}
                className="md:w-[20px] lg:w-[30px]"
              />
              Affordable and Upfront Pricing
            </li>
            <li className="flex items-center gap-3">
              <Image
                src={'/icons/badge.svg'}
                alt="dollar"
                width={30}
                height={30}
                className="md:w-[20px] lg:w-[30px]"
              />
              First-Class Service
            </li>
            <li className="flex items-center gap-3">
              <Image
                src={'/icons/smiley.svg'}
                alt="dollar"
                width={30}
                height={30}
                className="md:w-[20px] lg:w-[30px]"
              />
              Customer Satisfaction Guaranteed
            </li>
          </ul>
          <p className="md:hidden p-2 mt-4 text-green-base font-semibold leading-4">
            We understand each participants needs are different and will work
            with you to provide the gardening you require.
          </p>
          <Button
            className="w-full py-3 md:w-72 lg:w-80 !md:px-6 lg:!px-10 ml-auto"
            onClick={openModal}
          >
            get an instant price
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricePage;
