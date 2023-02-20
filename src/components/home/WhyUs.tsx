import React from "react";
import { nanoid } from "nanoid";
import { RiServiceLine, RiProjector2Line } from "react-icons/ri";
import { CgPerformance } from "react-icons/cg";
import { TbArrowRight } from "react-icons/tb";

export const whyusData = [
  {
    id: nanoid(),
    name: "Exceptional Service",
    about:
      "We think providing exceptional customer service is our USP, our main strength. We take pride in providing outstanding services to our clients.",
    image: "",
    Icon: RiServiceLine,
  },
  {
    id: nanoid(),
    name: "High performance solutions",
    about:
      "We think providing exceptional customer service is our USP, our main strength. We take pride in providing outstanding services to our clients.",
    image: "",
    Icon: CgPerformance,
  },
  {
    id: nanoid(),
    name: "Market Specialist",
    about:
      "We think providing exceptional customer service is our USP, our main strength. We take pride in providing outstanding services to our clients.",
    image: "",
    Icon: RiProjector2Line,
  },
];

const WhyUs = () => {
  return (
    <section className='text-white bg-gradient-to-br from-emerald-900 to-emerald-800'>
      <div className='px-6 py-16 mx-auto max-w-7xl lg:px-0'>
        <div className='max-w-lg mx-auto text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl'>Why Choose Us?</h2>

          <p className='mt-4 text-gray-200'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3'>
          {whyusData.map((item, index) => (
            <div
              key={"Why-us-" + item.id}
              className='block p-8 transition duration-200 bg-white border shadow-xl border-emerald-400 rounded-xl hover:border-emerald-500/10 hover:shadow-yellow-400/20 hover:scale-105'
            >
              <item.Icon className='w-20 h-20 text-emerald-800' />

              <h2 className='mt-4 text-xl font-bold text-black'>{item.name}</h2>

              <p className='mt-1 text-sm text-gray-500'>{item.about}</p>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <a
            href='#'
            className='inline-flex items-center gap-1 px-8 py-3 mt-8 text-black bg-white border rounded-md hover:bg-gray-100 focus:outline-none focus:ring active:text-emerald-700'
          >
            <span className='text-sm font-medium'> Get Started </span>

            <TbArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
