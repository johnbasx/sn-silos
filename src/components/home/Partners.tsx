import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";

const Partners = () => {
  const { t } = useTranslation("home");

  return (
    <div className='bg-gray-50'>
      <div className='px-6 py-24 flex justify-center items-center flex-col min-h-[50vh] md:min-h-[60vh] mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32'>
        <h3 className='text-4xl font-bold text-center lg:text-5xl'>
          {/* Our supporters and partners */}
          {t("partners.heading")}
        </h3>
        <p className='mt-3 font-medium text-center text-gray-500'>
          {/* Trusted by multiple businesses all over India */}
          {t("partners.tagline")}
        </p>
        <div className='grid grid-cols-2 gap-8 mt-16 md:mt-24 md:gap-12 md:grid-cols-6 lg:grid-cols-5'>
          <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-1'>
            <Image
              height={100}
              width={100}
              className='object-contain w-auto h-16 md:h-24'
              src='/images/logo/soilsense.png'
              alt='Tuple'
            />
          </div>
          <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-1'>
            <Image
              height={100}
              width={100}
              className='object-contain w-auto h-16 md:h-24'
              src='/images/logo/techland.png'
              alt='Tuple'
            />
          </div>

          <div className='flex justify-center col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1'>
            <Image
              height={100}
              width={100}
              className='object-contain w-auto h-16 md:h-24'
              src='/images/icons/architect.png'
              alt='Tuple'
            />
          </div>
          <div className='flex justify-center col-span-1 md:col-span-2 lg:col-span-1'>
            <Image
              height={100}
              width={100}
              className='object-contain w-auto h-16 md:h-24'
              src='/images/logo/organicchef.png'
              alt='Tuple'
            />
          </div>
          <div className='flex justify-center col-span-2 md:col-span-2 md:col-start-4 lg:col-span-1'>
            <Image
              height={100}
              width={100}
              className='object-contain w-auto h-16 md:h-24'
              src='/images/icons/cauliflower.png'
              alt='Tuple'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
