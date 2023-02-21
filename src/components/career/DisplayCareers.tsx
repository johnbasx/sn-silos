import Image from "next/image";
import React, { useEffect, useState } from "react";
import CareerCard, { CareerDataProps } from "./CareerCard";
import { nanoid } from "nanoid";
import lodash from "lodash";
import { TbArrowRight } from "react-icons/tb";

export const careerData = [
  {
    id: nanoid(),
    title: "Engineering Manager Developer Experience",
    basicSalary: 20000,
    salaryLimit: 42000,
    company: "Tech Land",
    date: "14 Feb, 2023",
    location: "🌏 Remote",
    jobType: "Full Time",
  },
  {
    id: nanoid(),
    title: "Software Engineer Backend",
    basicSalary: 25000,
    salaryLimit: 52000,
    company: "Tech Land",
    date: "14 Feb, 2023",
    location: "Punjab",
    jobType: "Full Time",
  },
  {
    id: nanoid(),
    title: "Senior Site Reliability Engineer",
    basicSalary: 32000,
    salaryLimit: 42000,
    company: "Soil Sense",
    date: "14 Feb, 2023",
    location: "Punjab",
    jobType: "Full Time",
  },
  {
    id: nanoid(),
    title: "Remote Website Tester",
    basicSalary: 12000,
    salaryLimit: 22000,
    company: "SN Silos",
    date: "14 Feb, 2023",
    location: "🌏 Remote",
    jobType: "Part Time",
  },
  {
    id: nanoid(),
    title: "Remote Senior Software Engineer",
    basicSalary: 26000,
    salaryLimit: 28000,
    company: "Soil Sense",
    date: "14 Feb, 2023",
    location: "🌏 Remote",
    jobType: "Part Time",
  },
  {
    id: nanoid(),
    title: "Senior Web App Designer",
    basicSalary: 24000,
    salaryLimit: 36000,
    company: "Organic Chef",
    date: "14 Feb, 2023",
    location: "Punjab",
    jobType: "Contract",
  },
  {
    id: nanoid(),
    title: "ReactJS/NextJs FullStack Engineer",
    basicSalary: 29000,
    salaryLimit: 39000,
    company: "SN Silos",
    date: "14 Feb, 2023",
    location: "Punjab",
    jobType: "Full Time",
  },
  {
    id: nanoid(),
    title: "NodeJS, Express Backend Engineer",
    basicSalary: 28000,
    salaryLimit: 40000,
    company: "Sn Silos",
    date: "14 Feb, 2023",
    location: "Punjab",
    jobType: "Full Time",
  },
  {
    id: nanoid(),
    title: "Senior Software Engineer Backend",
    basicSalary: 32000,
    salaryLimit: 49000,
    company: "Tech Land",
    date: "14 Feb, 2023",
    location: "Punjab",
    jobType: "Full Time",
  },
  {
    id: nanoid(),
    title: "QA Automation Engineer",
    basicSalary: 21000,
    salaryLimit: 32500,
    company: "Organic Chef",
    date: "14 Feb, 2023",
    location: "🌏 Remote",
    jobType: "Part Time",
  },
];

export type JobSelectedProps = {
  selected: boolean;
  selectedItem?: CareerDataProps;
};
const DisplayCareers = () => {
  // const [jobDetailShow, setJobDetailShow] = useState()
  const [jobSelected, setJobSelected] = useState<JobSelectedProps>({
    selected: false,
    selectedItem: undefined,
  });
  //   useEffect(() => {
  //     jobDetailShow= careerData.find(career => career.id === jobSelected.selectedItem)
  //   }, [jobSelected]);

  return (
    <div className='bg-yellow-50/50'>
      <article className='py-24 mx-auto max-w-7xl lg:py-32'>
        <section className='flex items-center flex-1 px-6'>
          <div className='flex flex-col w-full'>
            <h1 className='text-6xl font-extrabold text-center drop-shadow lg:text-7xl 2xl:text-8xl'>
              <span className='text-transparent bg-gradient-to-br bg-clip-text from-emerald-500 to-sky-800'>
                Find your Career
              </span>
            </h1>

            <p className='max-w-3xl mx-auto mt-6 text-lg text-center text-gray-800 md:text-xl'>
              Expand your career with us for a better and bright future.
            </p>
          </div>
        </section>
        <div className='py-8 text-black'>
          <div className='container flex flex-col-reverse items-start mx-auto my-12 md:flex-row md:my-24'>
            {/* Scroll Careed cards */}
            <div className='sticky ml-0'>
              <div className='container w-full h-full mx-auto'>
                <div className='relative h-full p-6 overflow-hidden wrap'>
                  <div className='mb-4'>
                    <span className='px-4 py-2 text-xl font-bold bg-gray-900 rounded-full text-gray-50 md:text-right'>
                      Hottest Jobs 🔥
                    </span>
                  </div>
                  <div className='flex flex-col gap-3'>
                    {careerData.map((career, index) => (
                      <CareerCard
                        key={"Career-choice-" + career.id}
                        {...career}
                        jobSelected={jobSelected}
                        setJobSelected={setJobSelected}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Display side */}
            <div className='sticky flex flex-col px-6 md:ml-16 md:top-36 lg:w-1/2 md:mt-16'>
              <p className='text-sm font-semibold tracking-widest uppercase text-emerald-600'>
                Check Out Latest Jobs
              </p>
              <h2 className='my-2 mb-6 text-5xl font-bold leading-none md:text-6xl'>
                Join the best teams in the industry
              </h2>
              <p className='mb-4 text-sm text-gray-800 md:text-base'>
                Join our team of excellent and brilliant farmers, developers,
                retailers, suppliers and businesses. Expand your career with us
                for a better and bright future.
              </p>

              {/* Job Details here */}
              {jobSelected.selected && jobSelected.selectedItem && (
                <div id='job-details' className='my-3'>
                  <h3 className='text-2xl font-bold'>Job Details</h3>

                  <dl className='flex flex-col gap-3 my-3'>
                    {Object.entries(jobSelected.selectedItem)
                      .slice(1, 7)
                      .map(([key, value]) => (
                        <div key={"job-key-" + key}>
                          <dt className='text-lg font-semibold'>
                            {lodash.startCase(key.toString())}
                          </dt>
                          <dd className='font-medium text-emerald-700'>
                            {value.toString()}
                          </dd>
                        </div>
                      ))}

                    {/* <div>
                      <dt className='text-lg font-semibold'>Post</dt>
                      <dd className='font-medium'>
                        {jobSelected.selectedItem.title}
                      </dd>
                    </div> */}
                  </dl>
                  <div className='my-6'>
                    <button className='bg-emerald-800 inline-flex justify-center items-center gap-1.5 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold duration-200'>
                      Apply now
                      <TbArrowRight />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <span className='px-4 py-2 font-semibold text-center text-gray-600 rounded-md bg-emerald-900/20'>
              We&apos;ll keep you posted...
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default DisplayCareers;
