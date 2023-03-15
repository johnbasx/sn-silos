import Image from "next/image";
import React from "react";
import SingleBlogSide from "./SingleBlogSide";
import { nanoid } from "nanoid";
import { useTranslation } from "next-i18next";

export const blogData = [
  {
    id: nanoid(),
    author: " Manish Soni",
    designation: "Lead Developer",
    headline: "Electrical Conductivity sensor",
    category: "Electrical Sensor",
    image: "/images/sensors/electrical-sensor.png",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam eos temporibus, quam ab perferendis quae beatae adipisci, impedit rem mollitia sunt facilis vitae dolores assumenda nobis vel odit voluptates.",
  },
  {
    id: nanoid(),
    author: " Manish Soni",
    designation: "Lead Developer",
    headline: "Sensor to detect Ph level of soil",
    category: "Ph sensor",
    image: "/images/sensors/ph-sensor.png",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam eos temporibus, quam ab perferendis quae beatae adipisci, impedit rem mollitia sunt facilis vitae dolores assumenda nobis vel odit voluptates.",
  },
  {
    id: nanoid(),
    author: " Pravish Soni",
    designation: "Junior Developer",
    headline: "NPK sensor",
    category: "Premium Collection",
    image: "/images/sensors/npk-sensor.png",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam eos temporibus, quam ab perferendis quae beatae adipisci, impedit rem mollitia sunt facilis vitae dolores assumenda nobis vel odit voluptates.",
  },
  {
    id: nanoid(),
    author: " Himanshu Soni",
    designation: "Senior App Developer",
    headline: "Moisture sensor",
    category: "Premium Kits",
    image: "/images/sensors/moisture-sensor.png",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam eos temporibus, quam ab perferendis quae beatae adipisci, impedit rem mollitia sunt facilis vitae dolores assumenda nobis vel odit voluptates.",
  },
  {
    id: nanoid(),
    author: " Himanshu Soni",
    designation: "Senior App Developer",
    headline: "Temerature & Humidity sensor",
    category: "Premium Kits",
    image: "/images/sensors/temp-sensor.png",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam eos temporibus, quam ab perferendis quae beatae adipisci, impedit rem mollitia sunt facilis vitae dolores assumenda nobis vel odit voluptates.",
  },
];

const SingleBlogPost = () => {
  const { t } = useTranslation("press");
  const blogDataTranslations = t("single-blog-post.blog-data", {
    returnObjects: true,
  });

  return (
    <section className='bg-white'>
      <div className='container px-6 py-6 mx-auto max-w-7xl'>
        <div className='py-4 mb-6'>
          <h2 className='text-4xl font-bold lg:text-5xl'>
            {/* Our Soil Sense kit contains */}
            {t("single-blog-post.heading")}
          </h2>
          <p className='mt-3 text-lg text-gray-600'>
            {/* Let&apos;s have a lokk at our various technologies to support
            farmers in monitoring their yield and farms */}
            {t("single-blog-post.description")}
          </p>
        </div>
        <div className='lg:flex lg:-mx-6'>
          <div className='lg:w-3/4 lg:px-6'>
            <Image
              height={100}
              width={100}
              className='object-contain overflow-hidden object-center w-full h-80 xl:h-[28rem] rounded-2xl border'
              src={blogData[0].image}
              alt='Blog Image'
            />

            <div>
              <p className='mt-6 text-sm font-medium uppercase text-emerald-600'>
                {/* {blogData[0].category} */}
                {blogDataTranslations[0].category}
              </p>
              <h1 className='max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800'>
                {/* {blogData[0].headline} */}
                {blogDataTranslations[0].headline}
              </h1>

              <div className='flex items-center mt-4'>
                <Image
                  width={100}
                  height={100}
                  className='object-cover object-center w-10 h-10 rounded-full'
                  src={blogData[0].profile_image}
                  alt='Profile Image'
                />

                <div className='mx-4'>
                  <h1 className='text-sm text-gray-700'>
                    {/* {blogData[0].author} */}
                    {blogDataTranslations[0].author}
                  </h1>
                  <p className='text-sm text-gray-500'>
                    {/* {blogData[0].designation} */}
                    {blogDataTranslations[0].designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='grid max-w-sm grid-cols-1 gap-4 my-12 divide-y md:my-0 lg:px-6'>
            {blogData.slice(1, blogData.length).map((blog, idx) => (
              <SingleBlogSide
                translatedData={blogDataTranslations[idx]}
                {...blog}
                key={"Single-blog-side-" + blog.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPost;
