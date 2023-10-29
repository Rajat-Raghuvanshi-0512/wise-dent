'use client';
import Accordion from '@/components/custom/Accordian';
import Heading from './custom/Heading';
import Button from './custom/Button';
import { useState } from 'react';

const ImplantFaqData = [
  {
    heading: 'How long does the dental implant procedure take?',
    body: 'The dental implant procedure can take several months to complete, including the initial consultation, implant placement surgery, osseointegration, and the placement of the permanent restoration. Typically, the implant placement surgery itself takes around 1-2 hours per implant.',
  },
  {
    heading: 'Does getting a dental implant hurt?',
    body: 'During a dental implant procedure, the patient is given local anesthesia to numb the area around the implant site, so there should not be any pain during the procedure.',
  },
  {
    heading: 'How much do dental implants cost?',
    body: 'The cost of dental implants can vary depending on several factors, including the number of implants needed, the type of implant used, and any additional procedures that may be required (such as bone grafting or tooth extraction). The exact cost is only after a proper assessment by a specialist.',
  },
  {
    heading:
      'What are the advantages of dental implants over other tooth replacement options?',
    body: ' 1. Durability: Dental implants are designed to be a permanent tooth replacement solution and can last for many years with proper care and maintenance.<br> 2. Natural look and feel: Because dental implants are designed to look and function like natural teeth, they can provide a more natural-looking and feeling tooth replacement option compared to other alternatives like dentures or bridges.<br> 3. Improved oral health: Dental implants do not require any additional maintenance or special care, and they do not put any extra stress on surrounding teeth or gum tissue. This can help improve overall oral health and reduce the risk of future dental problems.<br>',
  },
  {
    heading: 'How long do dental implants last?',
    body: "With proper care and maintenance, dental implants can last for many years, even a lifetime. The longevity of dental implants largely depends on factors such as the patient's oral hygiene habits, the quality of the implant placement and restoration, and overall oral health.",
  },
];

const RCTFaqData = [
  {
    heading:
      'Will you remove garden waste after completing my garden care services?',
    body: 'Yes, we will! We understand that not everyone has the time or the inclination to take care of their garden waste, so we’re more than happy to do it for you. Simply let us know when you book your service and we’ll take care of it.',
  },
  {
    heading: 'Do you guarantee your services?',
    body: 'Yes, each of our services comes with a satisfaction guarantee, so you can be sure that your outdoor space will meet your highest standards of excellence when completed.',
  },
  {
    heading: 'Do you offer touch-ups if something is missed during a service?',
    body: 'If you notice any areas that were missed during the service, please inform us within 24 hours. We will schedule a re-service or touch-up as soon as possible to address the missed areas without any additional charges.',
  },
  {
    heading: 'How do I report damage caused during the service?',
    body: 'If any damage occurs during our service, please report it to us immediately. We want to assure you that we carry a 20 Million AUD public liability insurance policy, ensuring that you are fully covered in the unlikely event of any damage.',
  },
  {
    heading: 'Do you charge extra for after-service support or follow-up?',
    body: 'Our after-service support including follow-up visits for issues reported within the specified timeframe is free of cost. There are no additional charges for addressing concerns or providing after-service support.',
  },
];

const PricingFaqData = [
  {
    heading: 'How do you determine the cost of your services?',
    body: 'The cost of our services is determined based on factors such as the size of your lawn or garden, the services you require, the frequency of the service, and any additional services or special requests. We provide personalized quotes tailored to your specific needs.',
  },
  {
    heading: 'Are there any hidden fees or charges in your pricing?',
    body: 'No, we are committed to transparency in our pricing. There are no hidden fees or charges. The quoted price includes all the services and costs discussed during the initial consultation. We believe in clear communication and honesty with our customers',
  },
  {
    heading:
      'Do you offer refunds or discounts if I am not satisfied with the service?',
    body: 'If you are not satisfied with our service, please contact us within 24 hours and we will assess the situation. While refunds are issued on a case-by-case basis, we are committed to addressing any concerns and ensuring your satisfaction. Refunds or discounts may be offered based on the nature of the issue.',
  },
  {
    heading: 'Is there a minimum service charge?',
    body: 'Yes, there is a minimum service charge to cover our operational costs which is just 35AUD. This ensures that we can maintain our high-quality service standards even for smaller jobs. Please contact us for specific details on the minimum service charge.',
  },
  {
    heading:
      'Do you offer package deals or discounts for regular maintenance services?',
    body: 'Yes, we offer package deals and discounts for customers who opt for regular maintenance services. Our packages are designed to provide cost savings and added convenience for our customers. Contact us to learn more about our package deals and discounts.',
  },
];

const FAQ = ({ openModal }) => {
  const [selected, setSelected] = useState('Implant');
  const [FaqData, setFaqData] = useState(ImplantFaqData);
  const [active, setActive] = useState(0);
  return (
    <section className=" md:px-14" id="faq">
      <div className="px-5">
        <Heading content={'How it works?'} />
      </div>
      <div className="md:mx-5 mt-5 flex flex-col md:flex-row gap-5 md:mt-10 md:gap-10 md:pr-10 lg:gap-20 lg:pr-20 2xl:pr-40">
        <div className="md:text-2xl lg:text-4xl justify-center md:justify-normal flex md:flex-col items-start gap-5 md:gap-6 lg:gap-10 font-semibold md:flex-[0.6] mt-5 px-2">
          <button
            className={`
              ${
                selected === 'Implant' &&
                'bg-green-base text-white md:bg-transparent duration-300 md:translate-x-4 md:text-green-base border-transparent'
              }
                px-3 rounded-lg text-sm py-1 w-28 h-8 md:w-auto md:h-auto border border-black md:border-none md:text-2xl lg:text-3xl md:font-bold
            `}
            onClick={() => {
              setSelected('Implant');
              setFaqData(ImplantFaqData);
            }}
          >
            Implant
          </button>
          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <button
            className={`
           ${
             selected === 'RCT' &&
             'bg-green-base text-white md:bg-transparent duration-300 md:translate-x-4 md:text-green-base border-none'
           }
             px-1 rounded-lg text-sm py-1 w-28 h-8 md:w-auto md:h-auto border border-black md:border-none md:text-2xl lg:text-3xl md:font-bold
         `}
            onClick={() => {
              setSelected('RCT');
              setFaqData(RCTFaqData);
            }}
          >
            RCT
          </button>

          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <button
            className={`
            ${
              selected === 'Pricing' &&
              'bg-green-base text-white md:bg-transparent duration-300 md:translate-x-4 md:text-green-base border-none'
            }
              px-3 rounded-lg text-sm py-1 w-28 h-8 md:w-auto md:h-auto border border-black md:border-none md:text-2xl lg:text-3xl md:font-bold
          `}
            onClick={() => {
              setSelected('Pricing');
              setFaqData(PricingFaqData);
            }}
          >
            Pricing
          </button>

          <div className="w-full h-[2px] bg-green-base hidden md:block" />
          <Button
            className="text-base mt-0 md:w-full hidden md:block !px-0"
            onClick={openModal}
          >
            get an appointment
          </Button>
        </div>
        <div className="w-full flex-[1.4] px-5">
          {FaqData.map((item, id) => (
            <Accordion
              key={item.heading}
              {...item}
              active={active}
              id={id}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
      <div className="px-5 mb-5">
        <Button
          className="text-base mt-0 md:hidden w-full py-3"
          onClick={openModal}
        >
          get an appointment
        </Button>
      </div>
    </section>
  );
};

export default FAQ;
