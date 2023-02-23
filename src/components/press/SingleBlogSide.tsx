import React from "react";

const SingleBlogSide = ({ ...blog }) => {
  return (
    <>
      <div className='flex flex-col items-start justify-center pt-4'>
        <h3 className='font-medium capitalize text-emerald-600'>
          {blog.category}
        </h3>

        <a
          href='#'
          className='block mt-2 text-lg font-semibold text-gray-900 duration-200 hover:underline hover:text-gray-500 line-clamp-2'
        >
          {blog.headline}
        </a>
        <p className='text-gray-500 line-clamp-2'>{blog.about}</p>
      </div>
    </>
  );
};

export default SingleBlogSide;
