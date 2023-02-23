import Image from "next/image";
import React from "react";

const OurJourney = () => {
  return (
    <div className='px-6 py-24 mx-auto max-w-7xl lg:py-32'>
      <section className='lg:px-0'>
        <div className='flex flex-col items-center justify-center gap-4 px-6 mx-auto text-center'>
          <h1 className='text-4xl font-bold lg:text-5xl'>Our Journey</h1>
          <p className='text-gray-600'>
            Let&apos;s have an insight look to thr journey we had over the years
            to reach this point.
          </p>
        </div>
        <div className='py-6 mt-6 lg:mt-12'>
          <Image
            className='object-contain w-full h-full aspect-auto'
            alt='Timeline image'
            src='/images/illustration/timeline.svg'
            height={100}
            width={100}
            unoptimized
          />
        </div>
      </section>
    </div>
  );
};

export default OurJourney;
