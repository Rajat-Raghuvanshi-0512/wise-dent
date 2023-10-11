import { galleryInfo, galleryInfoSm } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';
import Heading from './custom/Heading';
import ServiceAccordianMobile from './custom/ServiceAccordianMobile';

const GalleryItem = ({
  link1,
  link2,
  link3,
  heading1,
  heading2,
  heading3,
  desc1,
  desc2,
  width1,
  width2,
  width3,
  isThree,
  section1Data,
  section2Data,
  section3Data,
}) => {
  return (
    <div className="flex gap-5 mb-5">
      <div
        className={`relative h-[300px] hover:z-10 hover:!w-full group duration-300 rounded-xl overflow-clip`}
        style={{ width: `${width1}%` }}
      >
        <Image
          src={link1}
          alt="img1"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          unoptimized
        />
        <div className="absolute bottom-0 w-full px-5 pb-3 bg-black/30 flex flex-col justify-end min-h-full translate-y-[20%] hover:translate-y-0 duration-500 pt-[550px]">
          <h5 className="font-semibold text-3xl mt-auto">{heading1}</h5>
          <p className="text-sm mt-2">{desc1}</p>
          <ul className="flex flex-col flex-wrap group-hover:translate-y-0 duration-300 translate-y-[120%] h-[170px] mt-5 list-disc ml-5 hover:flex pb-10">
            {section1Data?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`relative h-[300px] peer-hover:!w-0 hover:z-10 hover:!w-full duration-300 rounded-xl overflow-clip`}
        style={{ width: `${width2}%` }}
      >
        <Image
          src={link2}
          alt="img1"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          unoptimized
        />
        <div className="absolute bottom-0 w-full px-5 pb-3 bg-black/30 flex flex-col justify-end min-h-full translate-y-[20%] hover:translate-y-0 duration-500 pt-[550px]">
          <h5 className="font-semibold text-3xl">{heading2}</h5>
          <p className="text-sm mt-2">{desc2}</p>
          <ul className="flex flex-col flex-wrap group-hover:translate-y-0 duration-300 translate-y-[10%] hover:translate-y-0 h-[170px] mt-5 list-disc ml-5 hover:flex pb-10">
            {section2Data?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {isThree && (
        <div
          className={`relative h-[300px] peer-hover:!w-0 hover:z-10 hover:!w-full duration-300 rounded-xl overflow-clip`}
          style={{ width: `${width3}%` }}
        >
          <Image
            src={link3}
            alt="img1"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            unoptimized
          />
          <div className="absolute bottom-0 w-full px-5 pb-3 bg-black/30 flex flex-col justify-end min-h-full translate-y-[20%] hover:translate-y-0 duration-500 pt-[550px]">
            <h5 className="font-semibold text-3xl">{heading3}</h5>
            <p className="text-sm mt-2">{desc1}</p>
            <ul className="flex flex-col flex-wrap group-hover:translate-y-0 duration-300 translate-y-[10%] h-[170px] mt-5 list-disc ml-5 hover:flex hover:translate-y-0 pb-10">
              {section3Data.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const ImageGallery = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="p-5 md:px-10" id="services">
      <Heading content={'What can we do for you?'} />
      <div className="hidden md:block border-2 border-green-base rounded-xl p-5 flex-wrap text-white">
        {galleryInfo.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
      <div className="bg-[#EFF0F2] md:hidden rounded-lg px-4 py-7">
        <h3 className="text-2xl font-semibold mb-3 text-green-base">
          Residential Services
        </h3>
        <div className="h-[1px] w-full bg-gray-500" />
        {galleryInfoSm.map((item, id) => (
          <ServiceAccordianMobile
            key={item.heading}
            heading={item.heading}
            list={item.list}
            active={active}
            setActive={setActive}
            id={id}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
