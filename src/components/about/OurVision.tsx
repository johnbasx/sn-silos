import React from "react";
import { TbEye, TbFocus2, TbTarget, TbTelescope } from "react-icons/tb";

const OurVision = () => {
  return (
    <div className='py-24 mx-auto max-w-7xl lg:py-32'>
      <section className='px-6 lg:px-0'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-4xl font-bold lg:text-5xl'>
            What we aim to provide
          </h1>
          <p className='text-gray-600'>
            IoT based devices and sensors to monitor the soil health (crop
            field). The information is easy to access and provides a wide sense
            of field conditions.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-10 md:grid-cols-2'>
          <div className='flex flex-col items-center justify-center gap-3 p-6 text-center border rounded-2xl'>
            <TbEye className='w-16 h-16 text-emerald-700' />
            <h2 className='text-2xl font-bold text-emerald-900'>Our Vision</h2>
            <p className='text-lg line-clamp-2'>
              To make a sustainable future in agriculture Industry with the
              right inclusion of technology and innovation
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3 p-6 text-center border rounded-2xl'>
            <TbTarget className='w-16 h-16 text-emerald-700' />

            <h2 className='text-2xl font-bold text-emerald-900'>Our Mission</h2>
            <p className='text-lg line-clamp-2'>
              To provide a cost effective method to increase the yeild with the
              help of organic means and technology
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3 p-6 text-center border rounded-2xl'>
            <TbFocus2 className='w-16 h-16 text-emerald-700' />

            <h2 className='text-2xl font-bold text-emerald-900'>Our Future</h2>
            <p className='text-lg line-clamp-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              nulla necessitatibus voluptates praesentium quas maiores
              aspernatur voluptate sequi enim eveniet illo id ut natus, dolores
              cumque hic alias est facilis?
            </p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3 p-6 text-center border rounded-2xl'>
            <TbTelescope className='w-16 h-16 text-emerald-700' />

            <h2 className='text-2xl font-bold text-emerald-900'>Our Drive</h2>
            <p className='text-lg line-clamp-2'>
              Sequi enim eveniet illo id ut natus, dolores cumque hic alias est
              facilis. aspernatur voluptate sequi enim eveniet illo id ut natus,
              dolores cumque hic alias est facili
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision;
