'use client';
import AboutUs from '@/components/AboutUs';
import CallSection from '@/components/CallSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Input } from '@/components/Form';
import Hero from '@/components/Hero';
import ImageGallery from '@/components/ImageGallery';
import LastForm from '@/components/LastForm';
import MapForm from '@/components/MapBottom';
import MobileSlider from '@/components/MobileSlider';
import Modal from '@/components/Modal';
import Navbar from '@/components/Navbar';
import PricePage from '@/components/PricePage';
import Reviews from '@/components/Reviews';
import ThankYouModal from '@/components/ThankYouModal';
import { useModal } from '@/helpers/custom-hooks';
import { sendMail } from '@/helpers/sendMail';
import { useState } from 'react';

const PopUpModal = ({ isOpen, closeModal, setShowThankyou }) => {
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
      to_name: '',
      from_name: data.name,
      from_number: data.phone,
      from_email: data.email,
      from_address: data.address,
      from_reason: 'Request for free quote',
    });
    closeModal();
    setData({
      name: '',
      phone: '',
      email: '',
      address: '',
    });
    setShowThankyou(true);
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title={'WISEDENT'}>
      <div className="p-5 px-10 pb-10 text-white">
        <div className="text-sm  mb-10">
          WE OFFER A NUMBER OF GENERAL AND SPECIALIZED DENTISTRY OPTIONS TO SUIT
          ALL AGES AND NEEDS
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder={'name'}
            onChange={onChange}
            value={data.name}
            required
          />
          <div className="flex gap-2 my-4">
            <Input
              type="number"
              name="phone"
              placeholder={'phone number'}
              required
              onChange={onChange}
              value={data.phone}
            />
            <Input
              type="email"
              name="email"
              placeholder={'email address'}
              required
              onChange={onChange}
              value={data.email}
            />
          </div>
          <Input
            type="text"
            name="address"
            placeholder={'address and pin code'}
            required
            onChange={onChange}
            value={data.address}
          />
          <button
            className="uppercase bg-white font-semibold text-xs w-full rounded-xl py-3 mt-5 text-green-base"
            type="submit"
          >
            get an appointment
          </button>
        </form>
      </div>
    </Modal>
  );
};

const libraries = ['places'];

const Home = () => {
  const { isOpen, closeModal, openModal } = useModal();

  const [showThankyou, setShowThankyou] = useState(false);
  return (
    <>
      <ThankYouModal
        setShowThankyou={setShowThankyou}
        showThankyou={showThankyou}
      />
      <Navbar openModal={openModal} />
      <PopUpModal
        isOpen={isOpen}
        closeModal={closeModal}
        setShowThankyou={setShowThankyou}
      />
      <main className="2xl:px-32">
        <Hero setShowThankyou={setShowThankyou} />
        <ImageGallery />
        <CallSection setShowThankyou={setShowThankyou} />
        <AboutUs openModal={openModal} />
        <PricePage openModal={openModal} />
        <Reviews />
        <FAQ openModal={openModal} />
        <div className="md:hidden">
          <MobileSlider />
        </div>
        <div className="hidden md:block">
          <MapForm setShowThankyou={setShowThankyou} />
        </div>
        <LastForm setShowThankyou={setShowThankyou} />
      </main>
      <Footer openModal={openModal} />
    </>
  );
};

export default Home;
