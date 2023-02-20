import Image from "next/image";
import React from "react";
import { nanoid } from "nanoid";
import Link from "next/link";

export const servicesData = [
  {
    id: nanoid(),
    name: "Agriculture Products",
    link: "#!",
    about:
      "There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy fringilla vitae.",
    image:
      "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZ2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: nanoid(),
    name: "Fresh Vegetables",
    link: "#!",
    about:
      "There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy fringilla vitae.",
    image:
      "https://images.unsplash.com/photo-1593352769539-d7be34841f51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlZ2dpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: nanoid(),
    name: "Organic Items",
    link: "#!",
    about:
      "There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy fringilla vitae.",
    image:
      "https://images.unsplash.com/photo-1595398390459-9c646b6fb86d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVnZ2llc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: nanoid(),
    name: "Dairy Products",
    link: "#!",
    about:
      "There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy fringilla vitae.",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpcnklMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const IOTServices = () => {
  return (
    <section className='px-6 py-12 lg:py-32'>
      <div className='flex flex-col items-center justify-center max-w-3xl gap-2 mx-auto mb-12 text-center'>
        <h2 className='text-4xl font-bold text-black lg:text-5xl'>
          Services we are offering
        </h2>
        <p className='text-gray-500'>What we are doing and where we do</p>
      </div>
      <div className='grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl'>
        {servicesData.map((item, index) => (
          <div
            className='relative block overflow-hidden bg-black rounded-2xl group'
            key={"Services+" + item.id}
          >
            <Image
              width={100}
              height={100}
              unoptimized
              alt={item.name}
              src={item.image}
              className='absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50'
            />

            <div className='relative p-8 drop-shadow'>
              <p className='text-2xl font-semibold text-white'>{item.name}</p>

              <div className='mt-64'>
                <div className='transition-all duration-200 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>
                  <p className='text-sm text-white'>{item.about}</p>
                  <div className='mt-6 mb-3'>
                    <Link
                      href={item.link}
                      className='px-6 py-2 text-sm font-semibold rounded-md bg-gray-50 text-emerald-900'
                    >
                      Check out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IOTServices;
