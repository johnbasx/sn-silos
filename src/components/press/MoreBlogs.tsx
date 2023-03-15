import Image from "next/image";
import React from "react";
import { nanoid } from "nanoid";
import { useTranslation } from "next-i18next";

export const moreBlogsData = [
  {
    id: nanoid(),
    author: "Himanshu Soni",
    date: "25 November 2023",
    designation: "Senior App Developer",
    headline: "Smart Irrigation",
    category: "SN Silos",
    image: "/images/press/smart-irrigation.png",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },

  {
    id: nanoid(),
    author: "Raj Soni",
    date: "5 October 2023",
    designation: "Junior App Developer",
    headline: "Drones and robots",
    category: "Soil Sense",
    image: "/images/press/drone-robots.jpg",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: nanoid(),
    author: "Ashish Soni",
    date: "13 November 2023",
    designation: "Chief Technician",
    headline: "Soil Health monitoring",
    category: "Organic Chef",
    image: "/images/press/soil-health.jpg",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: nanoid(),
    author: "Ashish Soni",
    date: "13 November 2023",
    designation: "Disease Forecasting",
    headline: "How to deal with insects in farms and not to use pesticides",
    category: "Soil Sense",
    image: "/images/press/disease-forecast.jpg",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: nanoid(),
    author: "Ashish Soni",
    date: "13 November 2023",
    designation: "Chief Technician",
    headline: "Remote Farming",
    category: "Soil Sense",
    image: "/images/press/remote-farming.png",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: nanoid(),
    author: "Pranav Soni",
    date: "19 December 2023",
    designation: "Chief Officer",
    headline: "How to yield more produce in a year?",
    category: "Soil Sense",
    image:
      "https://images.unsplash.com/photo-1615873627859-ddc921550353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHx3b3JrJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    profile_image:
      "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];

const MoreBlogs = () => {
  const { t } = useTranslation("press");
  const blogDataTranslations = t("more-blogs.blog-data", {
    returnObjects: true,
  });
  return (
    <section className='bg-white'>
      <div className='px-6 py-10 pb-16 mx-auto max-w-7xl md:pb-32'>
        <h1 className='text-4xl font-bold text-gray-800 capitalize lg:text-5xl'>
          {/* Precise agriculture includes */}
          {t("more-blogs.heading")}
        </h1>

        <div className='grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2'>
          {moreBlogsData.map((blog, idx) => (
            <div className='lg:flex' key={"more-blog-" + blog.id}>
              <Image
                className='object-cover w-full rounded-lg aspect-square min-h-56 lg:w-64'
                src={blog.image}
                alt={blog.headline}
                width={200}
                height={200}
              />

              <div className='flex flex-col justify-start gap-2 py-6 md:pt-0 lg:mx-6'>
                <p className='text-sm font-semibold tracking-wide uppercase text-emerald-600'>
                  {/* {blog.category} */}
                  {blogDataTranslations[idx].category}
                </p>
                <a
                  href='#!'
                  className='text-xl font-semibold text-gray-800 transition-all duration-200 hover:underline hover:text-emerald-600'
                >
                  {/* {blog.headline} */}
                  {blogDataTranslations[idx].headline}
                </a>
                <span className='mt-4 font-medium text-gray-500'>
                  {/* {blog.author} */}
                  {blogDataTranslations[idx].author}

                  <br />
                  {/* {blog.designation} */}
                  {blogDataTranslations[idx].designation}
                </span>
                <span className='text-xs text-gray-500'>
                  {t("more-blogs.published-on")}
                  {/* {blog.date} */}
                  {blogDataTranslations[idx].date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreBlogs;
