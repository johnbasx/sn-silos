import Image from "next/image";
import React from "react";
import { nanoid } from "nanoid";
import Link from "next/link";

export const offersData = [
  {
    id: nanoid(),
    title: "Veggies - Starting @₹129/-",
    about:
      "Add color to your garden 4000+ veggies of different variety of vegetables",
    image: "/images/cards/veggies.jpg",
    link: "#!",
  },
  {
    id: nanoid(),
    title: "Wheat - Starting just @₹19/-",
    about:
      "Add color to your garden 4000+ veggies of different variety of vegetables",
    image: "/images/cards/wheat.jpg",
    link: "#!",
  },
  {
    id: nanoid(),
    title: "Potato - Starting @₹39/-",
    about:
      "Add color to your garden 4000+ veggies of different variety of vegetables",
    image: "/images/cards/potato.jpg",
    link: "#!",
  },
  {
    id: nanoid(),
    title: "Healthy Veg - Starting @₹149/-",
    about:
      "Add color to your garden 4000+ veggies of different variety of vegetables",
    image: "/images/cards/healthyveg.jpg",
    link: "#!",
  },
];

const Offers = () => {
  return (
    <section className='px-6 py-20 lg:py-32 '>
      <div className='flex flex-col items-center justify-center max-w-3xl gap-2 mx-auto mb-12 text-center'>
        <h2 className='text-4xl font-bold text-black lg:text-5xl'>
          Our offers
        </h2>
        <p className='text-gray-500'>
          We aim to become one of Indi&apos;s leading marketplace in the field
          of agriculture, real-estate and much more. Check out our various
          offers
        </p>
      </div>
      <div className='grid grid-cols-1 gap-4 mx-auto max-w-7xl lg:gap-6 md:grid-cols-2'>
        {offersData.map((item, index) => (
          <div
            key={"Offer-card-" + item.id}
            className='relative block p-6 overflow-hidden border shadow-xl lg:p-10 bg-gradient-to-tr from-black/75 to-transparent rounded-xl'
          >
            <Image
              src={item.image}
              height={100}
              width={100}
              alt='card-image'
              className='absolute inset-0 object-cover w-full h-full -z-10'
            />
            <h3 className='text-xl font-bold text-white drop-shadow'>
              {item.title}
            </h3>

            <p className='mt-3 text-sm text-gray-300 drop-shadow'>
              {item.about}
            </p>
            <div className='mt-6 mb-3'>
              <Link
                href={item.link}
                className='px-4 py-2 text-sm font-semibold rounded-md bg-gray-50 text-emerald-900'
              >
                Check out
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
