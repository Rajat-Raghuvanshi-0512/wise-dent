import Image from 'next/image';
import React, { useState } from 'react';
import Form from './Form';
import GetInTouchForm from './GetInTouchForm';

const HeroLg = ({ setShowThankyou }) => {
  return (
    <section className="p-5 md:px-10 lg:px-14 md:pt-10 relative overflow-x-hidden">
      <Image
        src={'/stamp.webp'}
        className="object-contain absolute lg:-right-10 2xl:right-0 top-10 z-10 md:w-[180px] lg:w-[240px]"
        alt="banner"
        height={240}
        width={240}
      />
      <div className="w-[75%] md:mb-10">
        <h2 className="md:text-4xl lg:text-5xl font-semibold !leading-snug">
          &quot;Discover Your Smile&apos;s Secret: Your Trusted Dental Experts
        </h2>
        <p className="md:text-3xl font-light md:pt-5">
          Experience Unparalleled Dental Care and Radiant Smiles Through Our
          Expertise and Compassion.
        </p>
      </div>
      <div className="relative h-[455px]">
        <Image
          src={'/home-banner.webp'}
          className="object-cover w-full h-full rounded-3xl"
          alt="banner"
          height={550}
          width={1200}
          loading="eager"
          priority={true}
        />
        <div className="absolute right-0 h-full top-0">
          <Form setShowThankyou={setShowThankyou} />
        </div>
      </div>
    </section>
  );
};

const HeroSm = ({ setShowThankyou }) => {
  const [increaseSize, setIncreaseSize] = useState(false);
  return (
    <section
      className={`${increaseSize ? 'h-[105svh]' : 'h-[93svh]'} pt-16 px-5`}
    >
      <Image
        src={'/mobile-banner-bg.webp'}
        alt="banner"
        width={100}
        height={400}
        className={`w-full ${
          increaseSize ? 'h-[105svh]' : 'h-[93svh]'
        } object-cover -z-20 absolute left-0 top-0`}
        priority
      />
      <div
        className={`bg-black/50 w-full ${
          increaseSize ? 'h-[105svh]' : 'h-[93svh]'
        } absolute top-0 left-0 -z-10`}
      ></div>
      <h1 className="text-[2.5rem] !leading-tight font-bold mt-3 text-[#FFFADE] uppercase">
        Professional Dental Care clinic
      </h1>
      <ul className="flex flex-col gap-3  my-10 uppercase text-[#FFFADE]">
        <li className="flex gap-5 items-center ">
          <Image
            src={'/checkmark.webp'}
            alt="checkmark"
            width={30}
            height={30}
          />
          <div>Award Winning dental Clinic</div>
        </li>
        <li className="flex gap-5 items-center">
          <Image
            src={'/checkmark.webp'}
            alt="checkmark"
            width={30}
            height={30}
          />
          <div>High Quality Equipment</div>
        </li>
        <li className="flex gap-5 items-center">
          <Image
            src={'/checkmark.webp'}
            alt="checkmark"
            width={30}
            height={30}
          />
          <div>15+ years experience</div>
        </li>
      </ul>
      <GetInTouchForm
        setShowThankyou={setShowThankyou}
        setIncreaseSize={setIncreaseSize}
      />
    </section>
  );
};

const Hero = ({ setShowThankyou }) => {
  return (
    <div>
      <div className="md:hidden">
        <HeroSm setShowThankyou={setShowThankyou} />
      </div>
      <div className="hidden md:block">
        <HeroLg setShowThankyou={setShowThankyou} />
      </div>
    </div>
  );
};

export default Hero;
