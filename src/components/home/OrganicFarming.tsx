import Image from "next/image";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { TbArrowRight, TbCheck } from "react-icons/tb";

const OrganicFarming = () => {
  return (
    <section>
      <div className='flex flex-col items-center justify-center max-w-3xl gap-2 px-6 mx-auto mb-12 text-center'>
        <h2 className='text-4xl font-bold text-black lg:text-5xl'>
          Learn more of our Organic Farming
        </h2>
        <p className='text-gray-500'>
          SN Silos deals to become one of Indi&apos;s leading marketplace in the
          field of agriculture, real-estate and much more
        </p>
      </div>
      <div className='px-6 py-2 mx-auto lg:px-0 max-w-7xl'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <div className='col-span-2 p-8 rounded-3xl bg-emerald-900 md:p-12 lg:px-16 lg:py-24'>
            <div className='max-w-xl mx-auto text-left drop-shadow'>
              <h2 className='text-2xl font-bold text-white md:text-3xl'>
                About our organic farming
              </h2>

              <p className='hidden text-white/90 sm:mt-4 sm:block'>
                SN Silos organic farming, agricultural system that uses
                ecologically based pest controls and biological fertilizers
                derived largely from animal and plant wastes and nitrogen-fixing
                cover crops. Modern organic farming was developed as a response
                to the environmental harm caused by the use of chemical
                pesticides and synthetic fertilizers in conventional
                agriculture, and it has numerous ecological benefits.
              </p>
              <div className='mt-5 text-gray-100'>
                <h5 className='text-lg font-bold'>
                  Objectives of adopting organic farming
                </h5>
                <ul className='flex flex-col items-start justify-start gap-2 mt-3'>
                  <li className='inline-flex items-baseline justify-start gap-1'>
                    <TbCheck className='text-lg text-yellow-400' />
                    Increase genetic diversity.
                  </li>
                  <li className='inline-flex items-baseline justify-start gap-1'>
                    <TbCheck className='text-lg text-yellow-400' />
                    Promote more usage of natural pesticides
                  </li>
                  <li className='inline-flex items-baseline justify-start gap-1'>
                    <TbCheck className='text-lg text-yellow-400' />
                    Make sure the right soil cultivation at the right time
                  </li>
                  <li className='inline-flex items-baseline justify-start gap-1'>
                    <TbCheck className='text-lg text-yellow-400' />
                    Keep and build good soil structure and soil fertility
                  </li>
                  <li className='inline-flex items-baseline justify-start gap-1'>
                    <TbCheck className='text-lg text-yellow-400' />
                    Control pests, diseases and weeds
                  </li>
                </ul>
              </div>

              <div className='mt-4 md:mt-8'>
                <a
                  href='#'
                  className='inline-flex items-center gap-2 px-8 py-3 text-sm font-medium transition bg-white border border-white rounded-full text-emerald-700 hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-emarald-400'
                >
                  Learn more
                  <TbArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className='relative grid grid-cols-1 gap-4'>
            <div className='absolute left-0 z-20 flex items-center justify-center w-full lg:justify-start lg:-left-20 top-1/3'>
              <div className='relative'>
                <span className='absolute bg-transparent border-[1.5rem] border-yellow-400 rounded-full -top-1/6 -left-1/6 drop-shadow-2xl h-40 w-40 animate-ping' />
                <span className='absolute w-40 h-40 bg-gray-800 rounded-full -top-1/6 -left-1/6' />
                <BsFillPlayCircleFill className='w-40 h-40 text-yellow-400 drop-shadow-2xl' />
              </div>
            </div>

            <Image
              width={100}
              height={100}
              alt='Student'
              unoptimized
              src='https://images.unsplash.com/photo-1592332297790-c7c27c38ecb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwY2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              className='object-cover w-full h-full rounded-3xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicFarming;
