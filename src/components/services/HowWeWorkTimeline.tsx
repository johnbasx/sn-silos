import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const HowWeWorkTimeline = () => {
  const { t } = useTranslation("home");
  const stepsTranslations = t("how-we-work-timeline.steps", {
    returnObjects: true,
  });
  return (
    <section className='mx-auto max-w-7xl'>
      <div className='py-8 text-black'>
        <div className='container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24'>
          <div className='sticky flex flex-col w-full px-8 mt-2 md:top-36 lg:w-1/3 md:mt-12'>
            <p className='text-sm font-semibold tracking-widest uppercase text-emerald-600'>
              {/* Working Process */}
              {t("how-we-work-timeline.sub-heading")}
            </p>
            <h3 className='mb-2 text-3xl font-bold leading-normal md:text-4xl'>
              {/* How do we work */}
              {t("how-we-work-timeline.heading")}
            </h3>
            <p className='mb-4 text-sm text-gray-800 md:text-base'>
              {/* Here’s your guide on how we work and how SN Silos strivesto meet
              the fertilizer, seed, feed and other agri-inputs needs of
              thousands of farmers in more than 80 cities in India. */}
              {t("how-we-work-timeline.description")}
            </p>
            <Link
              href='/press'
              className='px-6 py-2 mr-auto font-semibold text-white border rounded-md shadow bg-emerald-800 hover:bg-emerald-900 hover:shadow-lg'
            >
              {/* Explore Now */}
              {t("how-we-work-timeline.explore")}
            </Link>
          </div>
          <div className='sticky ml-0 md:ml-8 lg:w-2/3'>
            <div className='container w-full h-full mx-auto'>
              <div className='relative h-full p-10 overflow-hidden wrap'>
                <div className='absolute h-full border-4 border-emerald-500 right-1/2'></div>
                <div className='absolute h-full border-4 border-emerald-500 right-1/2'></div>
                <div className='flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline'>
                  <div className='order-1 w-5/12'></div>
                  <div className='order-1 w-5/12 px-1 py-4 text-right'>
                    <span className='inline-flex items-center justify-center w-12 h-12 mb-3 text-xl font-semibold text-center text-white rounded-full bg-emerald-800'>
                      1
                    </span>
                    <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                      {/* Download the app */}
                      {stepsTranslations[0].name}
                    </h4>
                    <p className='text-sm leading-snug text-gray-800 text-opacity-100 md:text-base'>
                      {/* Compare the latest seed, fertilizer and feed prices in
                      your area */}
                      {stepsTranslations[0].about}
                    </p>
                  </div>
                </div>
                <div className='flex items-center justify-between w-full mb-8 right-timeline'>
                  <div className='order-1 w-auto'></div>
                  <div className='order-1 w-5/12 px-1 py-4 text-left'>
                    <span className='inline-flex items-center justify-center w-12 h-12 mb-3 text-xl font-semibold text-center text-white rounded-full bg-emerald-800'>
                      2
                    </span>
                    <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                      {/* Apply and get approved instantly! */}
                      {stepsTranslations[1].name}
                    </h4>
                    <p className='text-sm leading-snug text-gray-800 md:text-base'>
                      {/* Receive the best prices, whether you plan to pay at
                      harvest or today with cash. */}
                      {stepsTranslations[1].about}
                    </p>
                  </div>
                </div>
                <div className='flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline'>
                  <div className='order-1 w-5/12'></div>
                  <div className='order-1 w-5/12 px-1 py-4 text-right'>
                    <span className='inline-flex items-center justify-center w-12 h-12 mb-3 text-xl font-semibold text-center text-white rounded-full bg-emerald-800'>
                      3
                    </span>
                    <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                      {/* Pick up from retailers */}
                      {stepsTranslations[2].name}
                    </h4>
                    <p className='text-sm leading-snug text-gray-800 text-opacity-100 md:text-base'>
                      {/* Pick your order up from the nearest authorised Sn Silos
                      retailers. */}
                      {stepsTranslations[2].about}
                    </p>
                  </div>
                </div>

                <div className='flex items-center justify-between w-full mb-8 right-timeline'>
                  <div className='order-1 w-5/12'></div>

                  <div className='order-1 w-5/12 px-1 py-4'>
                    <span className='inline-flex items-center justify-center w-12 h-12 mb-3 text-xl font-semibold text-center text-white rounded-full bg-emerald-800'>
                      4
                    </span>
                    <h4 className='mb-3 text-lg font-bold text-left md:text-2xl'>
                      {/* Online Marketplace */}
                      {stepsTranslations[3].name}
                    </h4>
                    <p className='text-sm leading-snug text-gray-800 text-opacity-100 md:text-base'>
                      {/* You can also easily shop from the comfort of your home
                      using our online e-commerce market platform for fast
                      checkouts and ultra fast deliveries. */}
                      {stepsTranslations[3].about}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                className='w-64 mx-auto'
                width={100}
                height={100}
                alt='Illustration image'
                src='/images/illustration/finance.svg'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkTimeline;
