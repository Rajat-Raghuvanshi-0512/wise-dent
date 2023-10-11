import Image from 'next/image';
import React from 'react';
import GetInTouchForm from './GetInTouchForm';

const LastForm = ({ setShowThankyou }) => {
  return (
    <section className="md:hidden flex justify-center items-center h-[431px] relative p-10">
      <Image
        src={'/last-form-bg.webp'}
        alt="form-bg"
        width={100}
        height={100}
        className="w-full h-full object-cover -z-10 absolute top-0 left-0"
        unoptimized
      />
      <GetInTouchForm setShowThankyou={setShowThankyou} />
    </section>
  );
};

export default LastForm;
