import React, { useRef, useState } from 'react';
import Button from './custom/Button';
import { sendMail } from '@/helpers/sendMail';

const GetInTouchForm = ({ setShowThankyou, setIncreaseSize = () => {} }) => {
  const [data, setData] = useState({
    name: '',
    address: '',
    phone: '',
  });
  const [showInputs, setShowInputs] = useState(false);
  const inputRef = useRef();

  const onChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMail({
      to_name: 'WiseDent',
      from_name: data.name,
      from_number: data.phone,
      from_address: data.address,
      from_reason: 'Request for free quote',
    });
    setShowThankyou(true);
    setData((prev) => ({ ...prev, name: '', address: '', phone: '' }));
  };

  return (
    <div className="bg-white rounded-lg p-3">
      <h2 className="text-green-base font-bold text-3xl">Get in touch</h2>
      <p className="leading-[1.15] text-[#636363] font-normal my-2">
        Keep Your Property Looking Beautiful with Our professional Lawn Care &
        Gardening Services.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="address and pincode"
          ref={inputRef}
          onChange={onChange}
          value={data.address}
          required
          name="address"
          className="outline-none mt-2 border-[1.5px] rounded-md md:rounded-xl placeholder:uppercase w-full placeholder:text-green-base/90 border-green-base bg-transparent p-2 text-sm placeholder:text-xs"
        />
        {showInputs && (
          <>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={onChange}
              value={data.name}
              required
              className="outline-none mt-2 border-[1.5px] rounded-md md:rounded-xl placeholder:uppercase w-full placeholder:text-green-base/90 border-green-base bg-transparent p-2 text-sm placeholder:text-xs"
            />
            <input
              type="tel"
              placeholder="phone number"
              name="phone"
              required
              onChange={onChange}
              value={data.phone}
              className="outline-none mt-2 border-[1.5px] rounded-md md:rounded-xl placeholder:uppercase w-full placeholder:text-green-base/90 border-green-base bg-transparent p-2 text-sm placeholder:text-xs"
            />
          </>
        )}
        <Button className={'!mt-2 py-2 md:py-3 w-full'} type="submit">
          get an appointment
        </Button>
      </form>
    </div>
  );
};

export default GetInTouchForm;
