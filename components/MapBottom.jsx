import Image from 'next/image';
import Form from './Form';
import Button from './custom/Button';

const MapForm = ({ setShowThankyou }) => {
  return (
    <section className="m-3 md:m-6 bg-green-base md:bg-white lg:m-10 md:border-2 md:border-green-base rounded-2xl lg:rounded-3xl p-5 md:p-0 md:pr-5">
      <div className="flex gap-5">
        <div className="flex-[0.7] gap-16 hidden md:flex">
          <Form
            className="min-w-[460px]"
            setShowThankyou={setShowThankyou}
            bgImg={'/form-bg.webp'}
            title="Let us Craft Your Stunning Smile."
            desc="Let us Craft Your Stunning Smile."
            btnText="get a free appointment"
          />
        </div>
        <div className="md:flex-[1.3]">
          <div className="flex flex-col items-end md:mt-20 lg:mt-32 text-right md:p-5 text-sm md:text-2xl lg:text-3xl gap-10 text-white md:text-green-base mt-5">
            <p>
              SMILE BRIGHTER WITH{' '}
              <strong className="block">OUR SERVICES</strong>
            </p>
            <p>
              NO CALL OUT <strong className="block">FEES</strong>
            </p>
            <p>
              100% SATISFACTION <br />{' '}
              <strong className="block">GUARANTEE</strong>
            </p>
          </div>
        </div>
      </div>
      <Button className="w-full bg-white py-3 !text-green-base md:hidden">
        get a free appointment
      </Button>
    </section>
  );
};

export default MapForm;
