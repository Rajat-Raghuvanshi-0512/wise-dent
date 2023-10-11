import Image from 'next/image';
import React from 'react';

const Modal = ({
  children,
  isOpen,
  closeModal,
  submitText,
  onClick,
  title,
  closeText,
}) => {
  return (
    <>
      <div
        className={` fixed w-screen top-0 left-0 h-screen z-50 select-none bg-black bg-opacity-40 ${
          !isOpen ? 'bg-transparent !-z-50' : 'bg-black'
        }`}
      >
        <div
          className={`relative max-w-sm md:max-w-md h-auto shadow border-2 lg:border-4 border-white/50 bg-[#036C66] rounded-3xl  top-[50%] left-[50%] duration-200 translate-y-[-50%] translate-x-[-50%] ease-out scale-100 ${
            !isOpen ? '!scale-0' : '!scale-100'
          }`}
        >
          <div className="px-10 py-4 rounded-t flex justify-between">
            <h3 className="text-4xl lg:text-5xl uppercase font-medium md:font-bold !leading-snug text-white font-futura">
              {title}
            </h3>
            <div>
              <Image
                src={'/cross.svg'}
                alt="cross"
                width={40}
                height={40}
                className="mt-4 cursor-pointer"
                onClick={closeModal}
              />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
