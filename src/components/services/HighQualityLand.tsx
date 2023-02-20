import Image from "next/image";
import React from "react";

const HighQualityLand = () => {
  return (
    <section className='pt-20 overflow-hidden bg-emerald-900 lg:px-0 lg:py-0'>
      <div className='mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='grid order-2 grid-cols-1 lg:order-1'>
            <Image
              width={100}
              height={100}
              alt='helloooo'
              src='https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              priority
              unoptimized
              className='object-cover w-full h-auto overflow-hidden aspect-square'
            />
          </div>

          <div className='px-6 py-8 lg:order-2 bg-emerald-900 md:p-12 lg:px-8 lg:py-24'>
            <div className='mx-auto text-left lg:pl-20'>
              <h2 className='text-4xl font-bold text-white md:text-5xl'>
                High Quality Land
              </h2>

              <p className='max-w-lg mt-4 text-white/90'>
                Land quality may be defined as the ability of the land to
                perform specific functions without becoming degraded. It should
                be noted that this definition contains an element of time as it
                implies the sustainability of performance functions. This is a
                marked departure from previous definitions, which consider land
                quality as a static attribute. Among the numerous functions that
                land must perform are to produce food and fiber, maintain or
                enhance water quality, support human habitation, partition water
                flow, and sequester carbon. For the purpose of the present
                study, we selected the function of the land to sustain grain
                production, which presumes that the land responds positively to
                cultural practices conducive to sustainable land management. We
                chose grain production because it is a decisive factor that
                controls food security, which is emerging as a major
                geopolitical issue.
              </p>

              <div className='mt-8 md:mt-8'>
                <a
                  href='#'
                  className='inline-block px-8 py-2.5 text-sm font-semibold transition bg-white border border-white rounded text-emerald-800 hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400'
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighQualityLand;
