import React from "react";
import { TbArrowRight } from "react-icons/tb";

const LetsTalk = () => {
  return (
    <section className='overflow-hidden bg-[url(https://images.unsplash.com/photo-1630394257979-0104638432aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYxfHxwdW5qYWJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60)] bg-cover bg-center bg-no-repeat'>
      <div className='px-6 py-20 bg-black/25 md:p-12 lg:px-16 lg:py-32'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-white drop-shadow sm:text-4xl md:text-5xl'>
            Let&apos;s talk about what growth means to you
          </h2>
          <p className='mt-4 text-sm font-semibold tracking-widest text-center text-gray-200 uppercase drop-shadow'>
            Have questions about our product&apos;s or growing in general
          </p>
          <p className='mt-6 text-center text-white/90 md:text-lg md:leading-relaxed drop-shadow'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto quae voluptatum
            beatae excepturi dolores.
          </p>

          <div className='flex items-center justify-center gap-6 mt-10 sm:mt-8'>
            <a
              href='#!'
              className='inline-flex items-center gap-1 px-4 py-2 text-white transition rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring'
            >
              <span className='text-sm font-medium'> Retailers </span>
              <TbArrowRight />
            </a>
            <a
              href='#!'
              className='inline-flex items-center gap-1 px-4 py-2 text-white transition rounded-full shadow-lg bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring'
            >
              <span className='text-sm font-medium'>Commercial Growers</span>
              <TbArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
