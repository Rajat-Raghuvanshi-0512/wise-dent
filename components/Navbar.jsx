'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState, forwardRef } from 'react';
import LoadingPage from './Loader';
import Link from 'next/link';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import Button from './custom/Button';

const NavModal = forwardRef(({ isOpen, setIsOpen, openModal }, ref) => {
  return (
    <div
      className={`fixed duration-500 top-0 left-0 h-[65svh] bg-[#036C66] w-full text-white px-5 py-2 ${
        isOpen ? 'opacity-100' : 'opacity-0 invisible -z-50'
      }`}
      ref={ref}
    >
      <div className="flex justify-between items-center py-3">
        <div className="font-futura text-3xl uppercase">Wisedent</div>
        <Image
          src={'/cross.svg'}
          alt="cross"
          width={40}
          height={40}
          className=" cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <Button
        className={'!bg-white !text-green-base w-full py-2 !my-4'}
        onClick={() => {
          setIsOpen(false);
          openModal(true);
        }}
      >
        get an appointment
      </Button>
      <ul className="text-3xl flex flex-col gap-6 mt-3 justify-center">
        <li>
          <Link onClick={() => setIsOpen(false)} href={'#'}>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(false)} href={'#services'}>
            Services
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(false)} href={'#about'}>
            About
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(false)} href={'#faq'}>
            FAQ
          </Link>
        </li>
        <li className="flex justify-between">
          <Link onClick={() => setIsOpen(false)} href={'#city'}>
            Suburps
          </Link>
          <div className="flex gap-3">
            <Image
              src={'/call-icon.webp'}
              alt="call"
              width={20}
              height={20}
              className="object-contain"
            />
            <div>
              <p className="text-xs">Call us today !</p>
              <p className="text-base font-semibold">
                <a href="tel:8595731667">8595731667</a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
});
NavModal.displayName = 'MyComponent';

const Navbar = ({ openModal }) => {
  const [showLoading, setShowLoading] = useState(true);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  useMotionValueEvent(scrollY, 'change', (currScroll) => {
    if (currScroll <= 0) {
      setHide(false);
      setIsScrolled(false);
      return;
    }
    if (currScroll > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    if (prevScroll > currScroll) {
      setHide(false);
    } else {
      setHide(true);
    }
    setPrevScroll(currScroll);
  });

  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [setOpenMenu]);
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 1500);
  }, []);
  if (showLoading) {
    return <LoadingPage />;
  }
  return (
    <nav
      className={`p-5 md:px-10 lg:px-14 md:py-2 flex justify-between md:border-b-[1.5px] md:border-green-base fixed top-0 left-0 md:static w-full z-50 ${
        isScrolled ? 'bg-white shadow-2xl md:shadow-none duration-500' : ''
      }`}
    >
      <div className="hidden md:flex items-center">
        <Image
          src={'/logo.webp'}
          alt="logo"
          unoptimized
          height={70}
          width={70}
          className="w-[80px] md:w-[70px] object-contain lg:w-[60px]"
        />
      </div>
      <div className="flex md:invisible items-center">
        <Image
          src={'/logo.webp'}
          alt="logo"
          height={55}
          width={100}
          className="w-[40px] object-contain md:w-[70px] lg:w-[70px]"
          unoptimized
        />
      </div>
      <div className="flex gap-5 md:hidden">
        <div className="flex items-center gap-2 bg-green-base px-2 rounded-md">
          <Image
            src={'/call-white.webp'}
            alt="menu"
            width={20}
            height={20}
            unoptimized
          />
          <div className="text-xs text-white">
            <a href="tel:8595731667">CALL US</a>
          </div>
        </div>
        {isScrolled ? (
          <Image
            src={'/burger-menu-green.svg'}
            alt="menu"
            width={30}
            height={30}
            className="object-contain"
            unoptimized
            onClick={() => setOpenMenu(true)}
          />
        ) : (
          <Image
            src={'/burger-menu.webp'}
            alt="menu"
            width={30}
            height={30}
            className="object-contain"
            unoptimized
            onClick={() => setOpenMenu(true)}
          />
        )}
      </div>
      <div className="hidden md:flex gap-10 items-center">
        <ul className="flex gap-10 md:text-sm lg:text-xl text-[#757575]">
          <li className="cursor-pointer">
            <Link href="#services">Services</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#gallery">Gallery</Link>
          </li>
        </ul>
        <button
          onClick={openModal}
          className=" bg-green-base hover:text-green-base hover:bg-white text-white px-5 rounded-2xl uppercase text-xs md:py-2 lg:py-3 border-[1.5px] border-green-base hover:duration-300"
        >
          get an appointment
        </button>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <Image
          src={'/call.webp'}
          className="object-contain w-[20px] lg:w-[35px]"
          alt="phone"
          height={15}
          width={35}
        />
        <div className="text-green-base">
          <p className="text-xs">Call us today !</p>
          <p className="md:text-lg font-semibold">
            <a href="tel:8595731667">8595731667</a>
          </p>
        </div>
      </div>
      <NavModal
        isOpen={openMenu}
        setIsOpen={setOpenMenu}
        openModal={openModal}
        ref={ref}
      />
    </nav>
  );
};

export default Navbar;
