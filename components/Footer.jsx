import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const FooterSm = () => {
  return (
    <div className="md:hidden">
      <div className="flex justify-between items-center">
        <h2 className="uppercase text-5xl text-center font-extrabold font-futura">
          WD
        </h2>
        <div className="flex gap-3">
          <Link href="https://www.instagram.com" target="_blank">
            <Image
              src={'/fb-icon.webp'}
              alt="socials"
              width={30}
              height={30}
              className="w-[20px] h-[20px] object-contain"
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <Image
              src={'/insta.webp'}
              alt="socials"
              width={30}
              height={30}
              className="w-[20px] h-[20px] object-contain"
            />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <Image
              src={'/yt.webp'}
              alt="socials"
              width={30}
              height={30}
              className="w-[20px] h-[20px] object-contain"
            />
          </Link>
          <a href="tel:8595731667">
            <Image
              src={'/call-icon.webp'}
              alt="socials"
              width={30}
              height={30}
              className="w-[20px] h-[20px] object-contain"
            />
          </a>
        </div>
      </div>
      <div className="flex gap-1 justify-between my-5">
        <div>
          SK- 197,
          <br />
          Near Gate No-1 ,
          <br />
          SEC – 116, NOIDA
        </div>
        <div>
          <p>wisedent1@gmail.com</p>
          <p>
            <a href="tel:8595731667">8595731667</a>
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
      <div className="justify-between flex my-5">
        <ul className="flex flex-col gap-3 justify-evenly my-5">
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#services"> Services</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#prices"> FAQ</a>
          </li>
          <li>
            <a href="#city"> Suburps</a>
          </li>
        </ul>
        <div className="flex flex-col gap-4">
          <h2 className="uppercase font-bold text-3xl font-futura">
            Wise dent
          </h2>
          <p className="w-40 text-xs font-light">
            © 2023 Copyright Wisedent{' '}
            <a
              href="https://pixysquare.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Website by PixySquare.
            </a>
          </p>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
    </div>
  );
};
const FooterLg = ({ openModal }) => {
  const router = useRouter();
  return (
    <div className="hidden md:grid md:grid-cols-3">
      <div className="flex flex-col gap-4 py-5">
        <h2 className="uppercase font-bold font-futura">wisedent</h2>
        <p className="text-xs font-extralight">
          SK- 197,
          <br />
          Near Gate No-1 ,
          <br />
          SEC – 116, NOIDA
        </p>
        <p className="uppercase text-xs">Let&apos;s Team Up!</p>
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-10 text-sm">
          <div>wisedent1@gmail.com</div> <div>8595731667</div>
        </div>
      </div>
      <div className="flex flex-col justify-end py-5">
        <h6 className="text-xs my-3 uppercase font-light">Navigation</h6>
        <div className="flex">
          <ul className="flex gap-5 text-sm">
            <li>
              <a href="#"> Home</a>
            </li>
            <li>
              <a href="#services"> Services</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#prices"> FAQ</a>
            </li>
            <li>
              <a href="#city"> Suburps</a>
            </li>
          </ul>
          <button
            className="bg-white px-4 uppercase text-xs rounded-2xl text-green-base mx-5 -mr-10"
            onClick={() => openModal()}
          >
            get an appointment
          </button>
        </div>
      </div>
      <div className="py-5 flex gap-4 justify-end">
        <button
          className="rounded-2xl border border-white hover:text-green-base hover:bg-white duration-300 uppercase px-3 py-1 text-xs h-min"
          onClick={() => router.push('https://www.instagram.com')}
        >
          instagram
        </button>
        <button
          className="rounded-2xl border border-white hover:text-green-base hover:bg-white duration-300 uppercase px-3 py-1 text-xs h-min"
          onClick={() => router.push('https://www.instagram.com')}
        >
          facebook
        </button>
      </div>
    </div>
  );
};

const Footer = ({ openModal }) => {
  return (
    <footer className="bg-green-base text-white p-5 md:p-10 lg:p-16">
      <div className="w-full h-[2px] md:bg-white" />
      <FooterSm />
      <FooterLg openModal={openModal} />
      <div className="w-full h-[2px] md:bg-white" />
      <div className="flex justify-center md:justify-between font-extralight md:font-normal text-xs pt-5">
        <div>
          <a
            href="https://pixysquare.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2023 website by PixySquare.
          </a>
        </div>
        <div className="hidden md:block">
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
