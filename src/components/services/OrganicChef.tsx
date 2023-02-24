import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import { TbArrowRight, TbCheck, TbPin } from "react-icons/tb";

export const organicChefCardsData = [
  {
    id: nanoid(),
    name: "For Farmers",
    image:
      "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWElMjBmYXJtZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    points: [
      "Better value for your produce",
      "Timely Elecronic Payments",
      "Market Guidance",
    ],
    link: "/contact",
    linkLabel: "Sell to us",
  },
  {
    id: nanoid(),
    name: "For Businesses",
    image:
      "https://images.unsplash.com/photo-1646016858849-4721faea5069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwc2hvcCUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    points: [
      "Get fresh and better quality produce",
      "Fair and transparent pricing",
      "Convenient for business owners",
    ],
    link: "/contact",
    linkLabel: "Buy from us",
  },
  {
    id: nanoid(),
    name: "For Consumers",
    image:
      "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    points: [
      "Get fresh and best quality produce",
      "At farm gate prices",
      "Traceable to source",
    ],
    link: "/contact",
    linkLabel: "go to organicchef.com",
  },
];

const OrganicChef = () => {
  return (
    <section className='px-6 py-24 lg:py-32 lg:px-0'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col max-w-3xl gap-2 mx-auto text-left md:text-center'>
          <h2 className='text-4xl font-extrabold lg:text-5xl'>Organic Chef</h2>
          <p className='text-gray-600'>
            Organic Chef will help to bring the best agricultural products to
            your plate with the following services through internal operations
            in combination with our specialised partnership network.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-6 lg:grid-cols-3'>
          {organicChefCardsData.map((item, idx) => (
            <div
              key={item.id}
              className='block overflow-hidden shadow-lg rounded-2xl'
            >
              <Image
                width={100}
                height={100}
                unoptimized
                alt={item.name}
                src={item.image}
                className='object-cover w-full h-auto mt-4 overflow-hidden rounded-t-2xl aspect-square'
              />

              <div className='p-6 text-sm'>
                <span className='px-2 py-1.5 text-sm font-semibold rounded-full bg-yellow-500/20 text-yellow-800/90'>
                  {item.name}
                </span>
                <ul className='grid grid-cols-1 gap-3 mt-6'>
                  {item.points.map((point, index) => (
                    <li
                      className='flex items-center justify-start gap-2'
                      key={"card-point-" + index}
                    >
                      <span className='flex items-center justify-center w-5 h-5 font-semibold rounded-full bg-emerald-600/20'>
                        <TbCheck className='text-emerald-900/75' />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className='flex items-center gap-8 mt-6'>
                  <Link
                    href={item.link}
                    className='inline-flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-center text-white duration-150 rounded-md bg-emerald-800 hover:bg-emerald-700'
                  >
                    {item.linkLabel}
                    <TbArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganicChef;
