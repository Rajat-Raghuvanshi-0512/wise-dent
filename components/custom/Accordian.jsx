'use client';
import Image from 'next/image';

const Accordion = ({ heading, body, active, setActive, id }) => {
  return (
    <div>
      <div className="md:py-10 py-5">
        <div className="flex justify-between gap-5">
          <h3
            className={`font-metropolis text-base md:text-xl lg:text-2xl text-green-base font-semibold hover:cursor-pointer flex-[1.8]`}
            onClick={() => setActive(id)}
          >
            {heading}
          </h3>
          <div
            className="flex flex-[0.2] md:flex-none cursor-pointer items-center justify-center"
            onClick={() => {
              active === id ? setActive(-1) : setActive(id);
            }}
          >
            {active === id ? (
              <Image
                src={'/minus.svg'}
                alt="plus"
                width={40}
                height={40}
                className="w-[14px] md:w-[20px]"
              />
            ) : (
              <Image
                src={'/plus.svg'}
                alt="plus"
                width={40}
                height={40}
                className="w-[14px] md:w-[20px]"
              />
            )}
          </div>
        </div>
        <div
          className={`py-5 font-montserrat !duration-500 !transition-all h-auto overflow-auto text-xs font-semibold md:text-base text-[#6F6C90] accord${
            active !== id && '!h-0 !overflow-hidden accord !py-0'
          } `}
        >
          <div
            className={`${
              active === id
                ? 'opacity-140 h-auto overflow-auto'
                : 'opacity-0 h-0 overflow-hidden'
            } delay-75 duration-300`}
          >
            {body}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Accordion;
