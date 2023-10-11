import Image from 'next/image';
import React from 'react';

const LoadingPage = () => {
  return (
    <section className="flex justify-center items-center w-screen py-10 h-[100svh] top-0 left-0 fixed bg-white z-50">
      <div className="border-green-base flex-col flex items-center rounded-2xl justify-center border-2 p-10 m-10 w-full h-full">
        <h1 className="text-5xl text-center text-green-base font-futura font-bold">
          WISEDENT
        </h1>
        <div className="w-[250px]">
          <Image
            src={'/loading-cart.svg'}
            alt="loader"
            width={50}
            height={50}
            className="loader-animation w-[50px] h-[40px] object-contain"
          />
          <div className="w-full h-1 bg-green-base"></div>
        </div>
        <div className="text-green-base text-xl md:text-2xl pt-3 uppercase font-semibold md:pt-7">
          Loading
        </div>
      </div>
    </section>
  );
};

export default LoadingPage;
