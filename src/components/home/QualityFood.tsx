import Image from "next/image";
import React from "react";
import { nanoid } from "nanoid";
import Link from "next/link";
import { clsx } from "clsx";
import { useTranslation } from "next-i18next";

export const qualityFoodsData = [
  {
    id: nanoid(),
    name: "Fresh Veggies",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus animi, pariatur.",
    image: "/images/icons/vegetables.png",
  },
  {
    id: nanoid(),
    name: "Organic Fruits",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus animi, pariatur.",
    image: "/images/icons/fruits.png",
  },
  {
    id: nanoid(),
    name: "Fresh fruits",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus animi, pariatur.",
    image: "/images/icons/fruit-salad.png",
  },
  {
    id: nanoid(),
    name: "Spinach",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus animi, pariatur.",
    image: "/images/icons/spinach.png",
  },
  {
    id: nanoid(),
    name: "Cauliflower",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus animi, pariatur.",
    image: "/images/icons/cauliflower.png",
  },
  {
    id: nanoid(),
    name: "Fruit Tree",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, temporibus animi, pariatur.",
    image: "/images/icons/fruit-tree.png",
  },
];

const QualityFood = () => {
  const { t } = useTranslation("home");
  const qualityFoodsTranslations = t("quality-food.quality-foods-data", {
    returnObjects: true,
  });
  const firstThreeQuality = qualityFoodsTranslations.slice(0, 3);
  const endThreeQuality = qualityFoodsTranslations.slice(3, 6);
  return (
    <section className='px-6 py-12 lg:py-32'>
      <div className='flex flex-col items-center justify-center max-w-3xl gap-2 mx-auto mb-12 text-center'>
        <h2 className='text-4xl font-bold text-black lg:text-5xl'>
          {/* Quality Food and Ingredients */}
          {t("quality-food.heading")}
        </h2>
        <p className='text-gray-500'>
          {/* What we are doing and where we do */}
          {t("quality-food.tagline")}
        </p>
      </div>
      <div className='grid grid-cols-1 mx-auto lg:gap-6 gap-y-6 md:grid-cols-3 lg:grid-cols-5 max-w-7xl'>
        <div className='flex flex-col col-span-2 gap-6 lg:gap-10'>
          {qualityFoodsData.slice(0, 3).map((item, index) => (
            <ServicesGroup
              key={"Quality-food-" + item.id}
              translatedName={firstThreeQuality[index].name}
              translatedAbout={firstThreeQuality[index].about}
              {...item}
              index={index}
              left
            />
          ))}
        </div>
        <div className='col-span-1 overflow-hidden'>
          <Image
            src='https://images.unsplash.com/photo-1628272107134-c66c4b580952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHVuamFiJTIwZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
            className='object-cover w-full h-full aspect-square md:aspect-auto rounded-2xl'
            unoptimized
            alt='Services offering image'
            width={100}
            height={100}
          />
        </div>
        <div className='flex flex-col col-span-2 gap-6 lg:gap-10'>
          {qualityFoodsData.slice(3, 6).map((item, index) => (
            <ServicesGroup
              key={"Quality-food-" + item.id}
              {...item}
              translatedName={endThreeQuality[index].name}
              translatedAbout={endThreeQuality[index].about}
              index={index}
              left={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export type ServicesTypes = {
  left: boolean;
  id: string;
  name: string;
  translatedName: string;
  translatedAbout: string;
  about: string;
  image: string;
  index: number;
};

const ServicesGroup = ({ left = true, ...item }: ServicesTypes) => {
  return (
    <div
      className={clsx(
        "flex items-start justify-start gap-6",
        left ? "" : "lg:flex-row-reverse"
      )}
    >
      <div className='flex items-center justify-center p-4 overflow-hidden bg-gray-100 rounded-full aspect-square'>
        <Image
          width={100}
          height={100}
          unoptimized
          alt={item.name}
          src={item.image}
          className='object-contain w-20 h-20'
        />
      </div>
      <div
        className={clsx(
          "flex flex-col items-start justify-center",
          left ? "text-left" : "lg:text-right lg:items-end"
        )}
      >
        <h4 className='font-semibold'>
          {/* {item.name} */}
          {item.translatedName}
        </h4>
        <p>{item.translatedAbout}</p>
      </div>
    </div>
  );
};
export default QualityFood;
