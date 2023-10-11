import Image from 'next/image';
import React from 'react';

const ServiceAccordianMobile = ({ heading, list, active, setActive, id }) => {
  return (
    <div>
      <div
        className="flex justify-between text-green-base items-center p-2"
        onClick={() => {
          active === id ? setActive(-1) : setActive(id);
        }}
      >
        <h2 className="font-semibold py-1">{heading}</h2>
        <div>
          {active === id ? (
            <Image
              src={'/minus.svg'}
              alt="plus"
              width={15}
              height={15}
              className="w-[14px] md:w-[20px]"
            />
          ) : (
            <Image
              src={'/plus.svg'}
              alt="plus"
              width={15}
              height={15}
              className="w-[14px] md:w-[20px]"
            />
          )}
        </div>
      </div>
      <div
        className={`font-montserrat !duration-500 !transition-all h-auto overflow-auto font-semibold md:text-base text-[#6F6C90] accord${
          active !== id && '!h-0 !overflow-hidden accord'
        } `}
      >
        <div
          className={`${
            active === id
              ? 'opacity-140 h-auto overflow-auto'
              : 'opacity-0 h-0 overflow-hidden'
          } duration-500`}
        >
          <ul className="list-disc text-green-base font-normal ml-10 py-5">
            {list.map((item) => (
              <li key={item} className="py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-500" />
    </div>
  );
};

export default ServiceAccordianMobile;
