import Image from "next/image";
import Link from "next/link";
import React from "react";

export const links = [
  { name: "Career roles", href: "/career" },
  { name: "Internship programs", href: "/career" },
  { name: "Our vision", href: "/press" },
  { name: "Meet our leadership", href: "/press" },
];
export const stats = [
  { name: "Clients worldwide", value: "89,897" },
  { name: "Full-time employees", value: "50+" },
  { name: "Stores", value: "200+" },
  { name: "Hirings", value: "100+" },
];

const AboutHero = () => {
  return (
    <div className='relative py-24 overflow-hidden bg-emerald-900 isolate sm:py-32'>
      <Image
        src='https://images.unsplash.com/photo-1628178693557-0269334ffbe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdvcmslMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=80&blend=064e3b&sat=0&exp=5&blend-mode=multiply'
        alt='ABout Us backdrop image'
        height={100}
        width={100}
        unoptimized
        priority
        className='absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center'
      />
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            About SN Silos
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Soil Sense collects soil and environment data around the farm and
            transforms it into useful information with the help of IoT based
            devices and sensors to monitor the soil health (crop field). The
            information is easy to access and provides a wide sense of field
            conditions.
          </p>
        </div>
        <div className='max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none'>
          <div className='grid grid-cols-1 text-base font-semibold leading-7 text-white gap-y-6 gap-x-8 sm:grid-cols-2 md:flex lg:gap-x-10'>
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name} <span aria-hidden='true'>&rarr;</span>
              </Link>
            ))}
          </div>
          <dl className='grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4'>
            {stats.map((stat) => (
              <div key={stat.name} className='flex flex-col-reverse'>
                <dt className='text-base leading-7 text-gray-300'>
                  {stat.name}
                </dt>
                <dd className='text-3xl font-bold leading-9 tracking-tight text-white'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
