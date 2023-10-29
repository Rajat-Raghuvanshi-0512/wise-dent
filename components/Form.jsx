import Image from 'next/image';
import React, { useState } from 'react';
import { sendMail } from '@/helpers/sendMail';

export const Input = ({ type, placeholder, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none border-[1.5px] rounded-md md:rounded-xl placeholder:uppercase w-full placeholder:text-white/90 border-white bg-transparent p-2 text-sm placeholder:text-xs"
      {...props}
    />
  );
};

const Form = ({
  title = 'We Create Beautiful Smiles',
  desc = 'WE OFFER A NUMBER OF GENERAL AND SPECIALIZED DENTISTRY OPTIONS TO SUIT ALL AGES AND NEEDS',
  bgImg,
  btnText = 'get an appointment',
  setShowThankyou,
  className,
}) => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const onChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail({
      to_name: 'Dakshay Singla',
      from_name: data.name,
      from_number: data.phone,
      from_email: data.email,
      from_address: data.address,
      from_reason: 'Request for free quote',
    });
    setData({
      name: '',
      phone: '',
      email: '',
      address: '',
    });
    setShowThankyou(true);
  };
  return (
    <div
      className={`drop-shadow ${
        bgImg ? 'bg-transparent' : 'bg-black/50'
      } w-[33vw] text-white z-20 rounded-3xl px-7 lg:px-10 relative py-10 min-h-[455px] ${className}`}
    >
      {bgImg && (
        <>
          <Image
            src={bgImg}
            alt="bg"
            width={300}
            height={300}
            className="absolute w-full -z-20 h-full left-0 top-0"
          />
        </>
      )}
      <h5 className="uppercase text-xl font-semibold mt-5">{title}</h5>
      <p className="my-5 text-sm">{desc}</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder={'name'}
          name="name"
          onChange={onChange}
          value={data.name}
          required
        />
        <div className="flex gap-2 my-4">
          <Input
            type="number"
            placeholder={'phone number'}
            name="phone"
            onChange={onChange}
            value={data.phone}
            required
          />
          <Input
            type="email"
            placeholder={'email address'}
            name="email"
            onChange={onChange}
            value={data.email}
            required
          />
        </div>
        <input
          className="outline-none border-[1.5px] rounded-md md:rounded-xl placeholder:uppercase w-full placeholder:text-white/90 border-white bg-transparent p-2 text-sm placeholder:text-xs "
          type="date"
          placeholder={'address and pin code'}
          name="Date"
          // onChange={onChange}
          // value={data.address}
          required
        />
        <button
          type="submit"
          className="uppercase bg-white font-semibold text-xs text-black w-full rounded-xl py-3 mt-5"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default Form;
