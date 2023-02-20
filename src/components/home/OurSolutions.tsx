import Image from "next/image";
import React from "react";

const OurSolutions = () => {
  return (
    <section className='px-6 py-20 overflow-hidden bg-white lg:px-0 lg:py-32'>
      <div className='flex flex-col max-w-3xl gap-2 mx-auto text-left md:text-center'>
        <h2 className='text-4xl font-bold lg:text-5xl'>
          Our <span className='text-emerald-500'>Solutions</span>
        </h2>
        <p className='text-gray-600'>
          SN Silos has helped to create a marketplace to provide alll of the
          following services through internal operations in combination with our
          specialised partnership network.
        </p>
      </div>
      <div className='py-8 mx-auto max-w-7xl'>
        <Image
          src='/images/hero/oursolutions.png'
          alt='our-solutions'
          unoptimized
          width={100}
          height={100}
          className='object-cover w-full h-auto drop-shadow-xl'
        />
      </div>
    </section>
  );
};

export default OurSolutions;
