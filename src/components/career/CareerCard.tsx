import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbArrowRight } from "react-icons/tb";
import { JobSelectedProps } from "./DisplayCareers";

export interface CareerDataProps {
  id: string;
  title: string;
  basicSalary: number;
  salaryLimit: number;
  company: string;
  date: string;
  location: string;
  jobType: string;
}

export interface ExtendedCareerProps extends CareerDataProps {
  jobSelected: JobSelectedProps;
  setJobSelected: React.Dispatch<React.SetStateAction<JobSelectedProps>>;
}

const CareerCard = ({ setJobSelected, ...career }: ExtendedCareerProps) => {
  return (
    <div className='flex flex-col px-4 py-4 bg-white border shadow-sm border-gray-200/50 rounded-2xl'>
      <div className='flex items-center justify-between'>
        <span className='text-sm font-medium text-gray-500'>{career.date}</span>
      </div>

      <div className='flex flex-col gap-2 mt-2'>
        <h3 className='mb-2 text-xl font-bold text-gray-900 md:text-2xl'>
          {career.title}
        </h3>
        <div className='flex flex-wrap justify-start gap-2'>
          <span className='px-2 py-1.5 mr-auto text-xs font-semibold rounded-full text-emerald-800/90 bg-emerald-500/10'>
            {career.company}
          </span>

          <span className='px-2 py-1.5 mr-auto text-xs font-semibold rounded-full text-gray-800/90 bg-gray-500/10'>
            Salary: ₹{career.basicSalary} - ₹{career.salaryLimit}
          </span>
          <span className='px-2 py-1.5 mr-auto text-xs font-semibold rounded-full text-pink-800/90 bg-pink-500/10'>
            {career.jobType}
          </span>
          <span className='px-2 py-1.5 mr-auto text-xs font-semibold rounded-full text-indigo-800/90 bg-indigo-500/10'>
            Location: {career.location}
          </span>
        </div>
      </div>

      <div className='flex items-center justify-between mt-4'>
        <Link
          href='#!'
          className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white duration-200 rounded-md bg-emerald-800 hover:bg-emerald-700'
          tabIndex={0}
          onClick={() =>
            setJobSelected({
              ...setJobSelected,
              selected: true,
              selectedItem: career,
            })
          }
          role='link'
        >
          See details
          <TbArrowRight />
        </Link>

        <div className='flex items-center gap-1'>
          <span className='text-sm'>Posted by</span>
          <span className='font-bold text-transparent bg-gradient-to-r to-emerald-400 from-teal-700 bg-clip-text'>
            {career.company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
