import Image from "next/image";
import React from "react";
import { nanoid } from "nanoid";

export const dealsData = [
  {
    id: nanoid(),
    name: "AgTech",
    description: "",
    link: "#!",
    image: "/images/icons/buy.png",
  },
  {
    id: nanoid(),
    name: "PropTech",
    description: "",
    link: "#!",
    image: "/images/icons/field.png",
  },
  {
    id: nanoid(),
    name: "Smart Cities",
    description: "",
    link: "#!",
    image: "/images/icons/silo.png",
  },
  {
    id: nanoid(),
    name: "Industry 4.0",
    description: "",
    link: "#!",
    image: "/images/icons/silo-64.png",
  },
  {
    id: nanoid(),
    name: "Infrastructure",
    description: "",
    link: "#!",
    image: "/images/icons/silo-2.png",
  },
  {
    id: nanoid(),
    name: "Metering",
    description: "",
    link: "#!",
    image: "/images/icons/ingredients.png",
  },
  {
    id: nanoid(),
    name: "Dual Use",
    description: "",
    link: "#!",
    image: "/images/icons/recycle.png",
  },
];

const Deals = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className='flex flex-col items-center justify-center max-w-3xl px-4 py-6 mx-auto text-center'>
        <div className='mt-4 mb-10'>
          <h1 className='text-4xl font-bold lg:text-5xl'>
            SN Silos deals with
          </h1>
          <p className='mt-2 text-gray-500'>
            Here are some of the sectors and fields SN Silos deals with
          </p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-10 lg:gap-14'>
          {dealsData.map((item, index) => (
            <div
              key={"deal-" + item.id + index}
              className='flex flex-col gap-2 duration-150 group'
            >
              <Image
                src={item.image}
                alt={item.name + "deal-image"}
                unoptimized
                width={100}
                height={100}
                className='object-contain w-auto h-16 duration-200 group-hover:saturate-100 group-hover:scale-110 saturate-0'
              />
              <h4 className='font-medium duration-200 group-hover:text-emerald-500'>
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;