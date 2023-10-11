import { sendMail } from '@/helpers/sendMail';
import Image from 'next/image';
import React, { useState } from 'react';

const CallSection = ({ setShowThankyou }) => {
  const [data, setData] = useState({
    name: '',
    phone: '',
  });

  const onChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail({
      to_name: '',
      from_name: data.name,
      from_number: data.phone,
      from_reason: 'Request for call',
    });
    setData({
      name: '',
      phone: '',
    });
    setShowThankyou(true);
  };
  return (
    <section
      className="m-5 md:m-10 bg-green-base rounded-lg md:rounded-2xl flex flex-col justify-center items-center h-[330px] text-white px-5 md:p-0 relative"
      id="prices"
    >
      <Image
        src={'/texture.webp'}
        alt="texture"
        width={100}
        height={100}
        className="w-full h-full absolute top-0 left-0 md:object-cover"
      />
      <h3 className="text-2xl md:text-4xl lg:text-5xl !leading-snug text-center md:text-left font-semibold md:w-[60%]">
        Let us cultivate beauty right at your doorstep.
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col z-10 md:flex-row gap-5 w-full md:w-fit mt-5"
      >
        <input
          type="text"
          className="outline-none border md:border-[1.5px] border-white bg-transparent p-2 rounded-lg md:rounded-2xl placeholder:text-white/90 text-sm placeholder:text-xs md:min-w-[210px] "
          placeholder="NAME"
          onChange={onChange}
          value={data.name}
          required
          name="name"
        />
        <input
          type="text"
          className="outline-none border md:border-[1.5px] border-white bg-transparent p-2 rounded-lg md:rounded-2xl placeholder:text-white/90 text-sm placeholder:text-xs md:min-w-[210px] "
          placeholder="NUMBER"
          onChange={onChange}
          value={data.phone}
          required
          name="phone"
        />
        <button
          type="submit"
          className="text-green-base bg-[#D9D9D9] rounded-lg md:rounded-3xl uppercase md:min-w-[210px] px-10 py-2 font-semibold"
        >
          Request a call
        </button>
      </form>
      <p className="text-xs ml-auto w-28 md:w-40 md:ml-[450px] mt-3 md:font-light flex justify-center gap-1 md:gap-2 z-10">
        <span className="">
          <Image
            src={'/tick-circle.svg'}
            alt="tick"
            width={25}
            height={25}
            className="mt-[2px]"
          />
        </span>
        I agree to terms and conditions.
      </p>
    </section>
  );
};

export default CallSection;
