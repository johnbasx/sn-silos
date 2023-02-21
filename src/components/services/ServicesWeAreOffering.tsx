import React from "react";
import { nanoid } from "nanoid";
import {
  Tb3DCubeSphere,
  TbChartDots2,
  TbChartRadar,
  TbFileTime,
  TbLayout,
  TbSatellite,
} from "react-icons/tb";

export const servicesOfferingData = [
  {
    id: nanoid(),
    name: "Field Risk Map",
    about: "Visual display of the current disease infection risk for a field",
    Icon: TbLayout,
  },
  {
    id: nanoid(),
    name: "Spraying Conditions",
    about: "Tracks weather to advise on the best days and times to spray",
    Icon: TbSatellite,
  },
  {
    id: nanoid(),
    name: "Infection Chance",
    about: "Near-term graphical view showing possible chance of  infection",
    Icon: Tb3DCubeSphere,
  },
  {
    id: nanoid(),
    name: "Risk Level Summary",
    about: "Monitors the current field-specific and regional disease risk",
    Icon: TbChartDots2,
  },
  {
    id: nanoid(),
    name: "Record Spray Events",
    about: "Track activities and increase accuracy by logging spray events",
    Icon: TbFileTime,
  },
  {
    id: nanoid(),
    name: "Advanced Graphs",
    about: "Additional information available for a deeper dive into the data",
    Icon: TbChartRadar,
  },
];

const ServicesWeAreOffering = () => {
  return (
    <div className='container px-6 mx-auto my-16 max-w-7xl'>
      <div className='flex flex-col items-center justify-center max-w-2xl gap-4 py-8 mx-auto text-center'>
        <h2 className='text-4xl font-bold lg:text-5xl'>
          Services we are offering
        </h2>
        <p className='text-gray-600'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, a
          expedita? Sed laudantium saepe quod. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
      </div>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div className='flex items-start h-full col-span-1 py-8 text-left text-black rounded-lg lg:p-6 lg:pl-4 lg:text-left'>
          <div className='flex flex-col gap-6 lg:pl-12'>
            <h2 className='text-3xl font-bold lg:text-4xl'>
              Soil Sense System Disease Control
            </h2>

            <p>
              Know exactly when, where, and what to apply, even the best time of
              day to spray. Save costs while you maximize protection with the
              most tested and reliable digital fungal disease management advisor
              in the market.
            </p>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {servicesOfferingData.map((item, idx) => (
              <div
                key={"service-" + item.id}
                className='flex flex-col gap-3 p-4 bg-gray-50 rounded-2xl aspect-square'
              >
                <item.Icon className='w-12 h-12 text-emerald-600' />
                <h3 className='text-xl font-bold'>Heading</h3>
                <p className='line-clamp-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore est delectus voluptatem.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesWeAreOffering;
