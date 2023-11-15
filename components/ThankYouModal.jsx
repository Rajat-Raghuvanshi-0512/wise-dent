import React, { useEffect } from 'react';

const ThankYouModal = ({ showThankyou = false, setShowThankyou }) => {
  useEffect(() => {
    let timeout;
    if (showThankyou) {
      timeout = setTimeout(() => {
        setShowThankyou(false);
      }, 2000);
    }
    () => clearTimeout(timeout);
  }, [showThankyou, setShowThankyou]);
  return (
    <div
      className={` fixed w-screen top-0 left-0 h-screen z-50 select-none bg-opacity-40 ${
        !showThankyou ? 'bg-transparent !-z-50' : 'bg-black'
      }`}
    >
      <div
        className={`relative max-w-sm h-auto shadow rounded-3xl overflow-clip  top-[50%] left-[50%] duration-200 border-2 border-slate-300 !bg-green-base translate-y-[-50%] translate-x-[-50%] ease-out  ${
          !showThankyou ? '!scale-0' : '!scale-100'
        } `}
      >
        <div>
          <div className="p-5 text-3xl md:text-4xl lg:text-5xl uppercase text-white font-bold">
            <h2 className="font-futura p-4">WiseDent</h2>
          </div>
          <div className="flex px-10 py-4 md:pb-14 text-white text-lg md:text-xl w-[85%] flex-col">
            <h3>Thank you for choosing WiseDent for your dental care.</h3>
            <h3 className="my-16 md:my-10">
              Your form has been successfully submitted.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
