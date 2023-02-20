import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandDescription = () => {
  return (
    <section className='overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2'>
      <div className='p-6 py-20 md:p-12 lg:px-16 max-w-7xl lg:py-32'>
        <div className='max-w-lg mx-auto text-center lg:pl-16 sm:text-left'>
          <h2 className='text-4xl font-bold text-gray-900 md:text-5xl'>
            Land Description
          </h2>
          <h3 className='mt-3 text-2xl font-bold text-gray-900 md:text-3xl'>
            87 Mausami Point Rd
          </h3>

          <p className='mt-4 text-gray-500 md:block'>
            Real estate is real property that consists of land and improvements,
            which include buildings, fixtures, roads, structures, and utility
            systems. Property rights give a title of ownership to the land,
            improvements, and natural resources such as minerals, plants,
            animals, water, etc
          </p>

          <div className='mt-8'>
            <Link
              href='#!'
              className='inline-block px-8 py-3 text-sm font-semibold text-white transition rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      <Image
        alt='Tech Land real estate'
        src='https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80'
        height={200}
        width={200}
        unoptimized
        priority
        className='object-cover w-full h-56 sm:h-full'
      />
    </section>
  );
};

export default LandDescription;
