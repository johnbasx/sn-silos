import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { nanoid } from "nanoid";

export const diseaseControlData = [
  {
    id: nanoid(),
    heading: "Optimize Spray Timing",
    about:
      "The most effective way to manage plant disease is by prevention. Know exactly where, what and when to spray, even down to the best time of day. Save costs on chemicals and spraying while you maximize protection.",
    image:
      "https://images.unsplash.com/photo-1624957866311-a58983bc5b2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRpc2Vhc2UlMjBjb250cm9sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: nanoid(),
    heading: "Reduce Chemical Use",
    about:
      "The system calculates a dynamic, daily infection risk that takes into account conditions for fungal growth, plant growth, crop type, and previous crop protection applications. The system also recommends the day and time to minimize environmental loss.",
    image:
      "https://images.unsplash.com/photo-1637500980709-6e65a6c2418a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmVydGlsaXplcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: nanoid(),
    heading: "Prevent Disease Outbreak",
    about:
      "At the end of the growing season, you can review your plant protection activities. This allows you to evaluate the effectiveness of your spraying for future seasons.",
    image:
      "https://images.unsplash.com/photo-1656232489895-deb2db8dd059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGZlcnRpbGl6ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
];

const DiseaseControl = () => {
  return (
    <>
      <div className='pt-12 lg:pt-32 bg-yellow-50'>
        <div className='px-6 mx-auto max-w-7xl'>
          <div className='flex flex-col items-center justify-center max-w-2xl gap-4 py-8 mx-auto text-center'>
            <h2 className='text-4xl font-bold lg:text-5xl'>Disease Control</h2>
            <p className='text-gray-700'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              a expedita? Sed laudantium saepe quod. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </div>
          <article>
            {diseaseControlData.map((item, index) => (
              <section key={item.id}>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  <div
                    className={clsx(
                      "w-full",
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    )}
                  >
                    <div className='flex lg:py-12'>
                      <Image
                        src={item.image}
                        className='object-cover w-full shadow-lg aspect-video rounded-2xl'
                        width={200}
                        height={200}
                        alt={item.heading}
                      />
                    </div>
                  </div>

                  <div
                    className={clsx(
                      "w-full",
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    )}
                  >
                    <div className='flex items-center h-full py-8 text-left text-black rounded-lg lg:p-6 lg:pl-12 lg:text-left'>
                      <div className='flex flex-col gap-3 lg:pl-12'>
                        <h2 className='text-2xl font-bold lg:text-3xl'>
                          {item.heading}
                        </h2>

                        <p>{item.about}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
      <section className='relative px-6 py-12 bg-fixed bg-center bg-no-repeat bg-cover bg-blend-luminosity bg-none md:bg-leaves bg-emerald-900'>
        <article className='mx-auto text-white drop-shadow-lg max-w-7xl'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className={clsx("w-full")}>
              <div className='flex'>
                <Image
                  src='https://images.unsplash.com/photo-1582560474992-385ebb9b29a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzZWFzZSUyMGNvbnRyb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
                  className='object-cover w-full shadow-2xl aspect-video rounded-2xl'
                  width={200}
                  height={200}
                  alt='disease control'
                />
              </div>
            </div>

            <div className='w-full'>
              <div className='flex items-center h-full py-8 text-left text-white rounded-lg lg:p-6 lg:pl-12 lg:text-left'>
                <div className='flex flex-col gap-3 lg:pl-12'>
                  <h2 className='text-2xl font-bold lg:text-3xl'>
                    Research & Validation
                  </h2>
                  <p className='text-gray-100'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga debitis in optio excepturi iusto quos iste,
                    voluptatibus unde odit quo nulla commodi eius impedit
                    provident fugiat quae atque! Amet, vel?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default DiseaseControl;
