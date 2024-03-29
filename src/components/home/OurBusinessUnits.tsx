import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const OurBusinessUnits = () => {
  const { t } = useTranslation("services");
  const unitsSectionsTranslations = t("our-business-units.sections", {
    returnObjects: true,
  });
  return (
    <section className='px-6 py-12 overflow-hidden bg-gradient-to-br to-transparent from-white lg:px-0 lg:py-24'>
      <div className='flex flex-col gap-2 text-left md:text-center'>
        <h2 className='text-4xl font-bold lg:text-5xl'>
          {/* Our Business Units */}
          {t("our-business-units.heading")}
        </h2>
      </div>
      {/* Soil Sense Unit */}
      <article className='mx-auto md:py-8 sm:grid sm:grid-cols-2 max-w-7xl sm:items-center'>
        <div className='py-8 lg:py-24'>
          <div className='max-w-xl mx-auto text-left'>
            <Image
              className='w-auto h-16'
              src='/images/logo/soilsense.png'
              alt='soilsense-logo'
              width={100}
              height={100}
            />
            <h2 className='mt-4 text-2xl font-bold text-gray-900 md:text-3xl'>
              {/* Soil Sense */}
              {unitsSectionsTranslations[0].name}
            </h2>

            <p className='mt-2 font-medium text-gray-700'>
              {/* Major sustainability impact in agriculture farming */}
              {unitsSectionsTranslations[0].tagline}
            </p>
            <p className='mt-4 text-gray-500 md:'>
              {/* There is a concentrated effort to modernize the agriculture
              industry, and data-driven weather intelligence is the key to
              sustainability. Managing the decision-making processes of farming
              has always been complex because there are so many different
              limiting factors that aren’t within a farmer’s control. The
              weather itself being chief among them. */}
              {unitsSectionsTranslations[0].about}
            </p>

            <div className='mt-4 md:mt-8'>
              <a
                href='#!'
                className='inline-block px-12 py-3 text-sm font-semibold text-white transition rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
              >
                {/* Learn More */}
                {t("our-business-units.learn-more")}
              </a>
            </div>
          </div>
        </div>

        <Image
          alt='SoilSense Flowchart'
          src='https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
          width={100}
          unoptimized
          height={100}
          className='object-cover w-full h-full sm:self-end rounded-3xl'
        />
      </article>
      {/* Tech Land Unit */}
      <article className='mx-auto mt-16 sm:grid sm:grid-cols-2 sm:items-center max-w-7xl'>
        <div className='order-2 py-8 lg:py-24'>
          <div className='max-w-xl mx-auto text-left'>
            <Image
              className='w-auto h-16'
              src='/images/logo/techland.png'
              alt='techland-logo'
              width={100}
              height={100}
            />
            <h2 className='mt-4 text-2xl font-bold text-gray-900 md:text-3xl'>
              {/* Tech Land */}
              {unitsSectionsTranslations[1].name}
            </h2>

            <p className='mt-2 font-medium text-gray-700'>
              {/* Costs and Energy savings for commercial properties */}
              {unitsSectionsTranslations[1].tagline}
            </p>
            <p className='mt-4 text-gray-500 md:'>
              {/* TechLand is a concentrated effort to modernize the land buying and
              selling industry, and data-driven intelligence is the key to
              sustainability. Managing the decision-making processes of
              real-estate has always been complex because there are so many
              different limiting factors that aren’t within a somone&apos;s
              control. The uncertainity itself being chief among them. */}
              {unitsSectionsTranslations[1].about}
            </p>

            <div className='mt-4 md:mt-8'>
              <Link
                href='/about'
                className='inline-block px-12 py-3 text-sm font-semibold text-white transition rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
              >
                {/* Learn More */}
                {t("our-business-units.learn-more")}
              </Link>
            </div>
          </div>
        </div>

        <Image
          alt='TechLand Flowchart'
          src='/images/flowchart/techland-flow.png'
          width={100}
          unoptimized
          height={100}
          className='object-contain w-full h-full overflow-hidden aspect-auto sm:self-end rounded-3xl'
        />
      </article>
      {/* Organic Chef Unit */}
      <article className='mx-auto mt-16 md:py-8 sm:grid sm:grid-cols-2 max-w-7xl sm:items-center'>
        <div className='py-8 lg:py-24'>
          <div className='max-w-xl mx-auto text-left'>
            <Image
              className='w-auto h-16'
              src='/images/logo/organicchef.png'
              alt='organic-chef-logo'
              width={100}
              height={100}
            />
            <h2 className='mt-4 text-2xl font-bold text-gray-900 md:text-3xl'>
              {/* Organic Chef */}
              {unitsSectionsTranslations[2].name}
            </h2>

            <p className='mt-2 font-medium text-gray-700'>
              {/* Major sustainability impact in agriculture farming */}
              {unitsSectionsTranslations[2].tagline}
            </p>
            <p className='mt-4 text-gray-500 md:'>
              {/* There is a concentrated effort to modernize the agriculture
              industry, and data-driven weather intelligence is the key to
              sustainability. Managing the decision-making processes of farming
              has always been complex because there are so many different
              limiting factors that aren’t within a farmer’s control. The
              weather itself being chief among them. */}
              {unitsSectionsTranslations[2].about}
            </p>

            <div className='mt-4 md:mt-8'>
              <a
                href='#!'
                className='inline-block px-12 py-3 text-sm font-semibold text-white transition rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
              >
                {/* Learn More */}
                {t("our-business-units.learn-more")}
              </a>
            </div>
          </div>
        </div>

        <Image
          alt='Organic Chef'
          src='/images/flowchart/organicchef-flow.png'
          width={100}
          unoptimized
          height={100}
          className='object-contain w-full h-full overflow-hidden sm:self-end rounded-3xl'
        />
      </article>
    </section>
  );
};

export default OurBusinessUnits;
