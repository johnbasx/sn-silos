import Image from "next/image";
import React from "react";

export type BlogType = {
  id: string;
  author: string;
  designation: string;
  headline: string;
  category: string;
  image: string;
  profile_image: string;
  about: string;
};
interface SingleBlogSideType extends BlogType {
  translatedData: Partial<BlogType>;
}

const SingleBlogSide = ({ translatedData, ...blog }: SingleBlogSideType) => {
  return (
    <div className='flex items-start justify-start gap-3 pt-4'>
      <Image
        src={blog.image}
        alt={blog.headline}
        width={100}
        height={100}
        className='object-contain border border-gray-200 min-w-64 aspect-square rounded-xl'
      />
      <div className='flex flex-col items-start justify-center'>
        <h3 className='text-sm font-medium capitalize text-emerald-600'>
          {/* {blog.category} */}
          {translatedData.category}
        </h3>

        <a
          href='#'
          className='block mt-1 text-lg font-semibold text-gray-900 duration-200 hover:underline hover:text-gray-500 line-clamp-2'
        >
          {/* {blog.headline} */}
          {translatedData.headline}
        </a>
        <p className='text-gray-500 line-clamp-2'>
          {/* {blog.about} */}
          {translatedData.about}
        </p>
      </div>
    </div>
  );
};

export default SingleBlogSide;
