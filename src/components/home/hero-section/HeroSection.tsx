import { Dialog } from "@headlessui/react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Navbar from "../Navbar";
import clsx from "clsx";

// import snsilosIcon from "@public/images/icons/silo.png";
// import soilSenseIcon from "@public/images/icons/field.png";
// import techLandIcon from "@public/images/icons/buy.png";
// import organicChefIcon from "@public/images/icons/ingredients.png";
import snsilosIcon from "@public/images/logo/snsilos.png";
import soilSenseIcon from "@public/images/logo/soilsense.png";
import techLandIcon from "@public/images/logo/techland.png";
import organicChefIcon from "@public/images/logo/organicchef.png";
import Link from "next/link";

export const headerCardsData = [
  {
    id: nanoid(),
    name: "Soil Sense",
    description: "Organic and high tech farming",
    image: soilSenseIcon,
  },
  {
    id: nanoid(),
    name: "Tech Land",
    description: "Buy and sell land with advanced technology",
    image: techLandIcon,
  },
  {
    id: nanoid(),
    name: "Organic Chef",
    description: "Marketplace for all organic products",
    image: organicChefIcon,
  },
  {
    id: nanoid(),
    name: "SN Silos",
    description: "All in one package platform",
    image: snsilosIcon,
  },
];

const HeroSection = () => {
  return (
    <main>
      <div className='relative flex items-center justify-center overflow-hidden isolate h-2/3'>
        <Image
          src='https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxkcm9uZSUyMGZhcm1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=80&blend=064e3b&sat=0&exp=5&blend-mode=multiply'
          alt='ABout Us backdrop image'
          height={100}
          width={100}
          unoptimized
          priority
          className='absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center'
        />
        <div className='relative px-6 lg:px-8'>
          <div className='max-w-2xl pt-24 pb-32 mx-auto sm:py-48 lg:py-46'>
            <div className='flex justify-center mb-8'>
              <div className='relative px-3 py-1 text-xs font-medium leading-6 text-gray-100 rounded-full bg-gray-800/50 backdrop-blur-md ring-1 ring-gray-100/10 hover:ring-gray-100/20'>
                The future of technology.
                <a href='#!' className='ml-1 font-semibold text-emerald-400'>
                  Read more <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight drop-shadow text-gray-50 sm:text-6xl'>
                SN Silos to enrich your business
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-200 drop-shadow'>
                Let&apos;s rebuild with the best technologies and our people
              </p>
              <div className='flex items-center justify-center mt-10 gap-x-6'>
                <Link
                  href='/about'
                  className='px-4 py-2 text-base font-semibold leading-7 text-white duration-150 rounded-md shadow-sm bg-emerald-600 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
                >
                  Join us now
                </Link>
                <Link
                  href='/press'
                  className='text-base font-semibold leading-7 text-gray-100 drop-shadow'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='px-4 mx-auto -mt-20 rounded-lg max-w-7xl'>
          <div className='grid items-center grid-cols-3 text-gray-900 bg-white rounded-lg shadow-lg sm:grid-cols-4'>
            {headerCardsData.map((item, index) => (
              <Link
                href='#!'
                key={"Header Card" + item.id + index}
                className={clsx(
                  index >= 3
                    ? "hidden sm:flex sm:flex-col items-center justify-center text-center"
                    : "flex flex-col items-center justify-center text-center  border-r border-gray-200",
                  index == 2 && "border-transparent sm:border-gray-200",
                  "hover:scale-110 hover:border-transparent p-2 hover:bg-emerald-500 duration-150 hover:rounded-xl hover:text-white group hover:shadow-2xl h-44"
                )}
              >
                <Image
                  src={item.image}
                  alt='SN Silos'
                  width={100}
                  height={100}
                  unoptimized
                  className='object-contain w-12 h-12 group-hover:saturate-0 group-hover:brightness-200 drop-shadow lg:w-auto lg:h-14'
                />
                <h3 className='mt-2 text-lg font-semibold'>{item.name}</h3>
                <p className='text-xs'>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <div className='relative px-6 lg:px-8'>
          <div className='max-w-2xl py-32 mx-auto sm:py-48 lg:py-56'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              <div className='relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                Announcing our next round of funding.{" "}
                <a href='#' className='font-semibold text-indigo-600'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  Read more <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                Data to enrich your online business
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='flex items-center justify-center mt-10 gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get started
                </a>
                <a
                  href='#'
                  className='text-base font-semibold leading-7 text-gray-900'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
          <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
            <svg
              className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
              viewBox='0 0 1155 678'
            >
              <path
                fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                fillOpacity='.3'
                d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
              />
              <defs>
                <linearGradient
                  id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                  x1='1155.49'
                  x2='-78.208'
                  y1='.177'
                  y2='474.645'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#9089FC' />
                  <stop offset={1} stopColor='#FF80B5' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div> */}
    </main>
  );
};
export default HeroSection;
