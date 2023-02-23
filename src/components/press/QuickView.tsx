import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type QuickViewProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageView?: string;
};

const QuickView = ({
  open,
  setOpen,
  imageView = "/images/illustration/leaves-pattern.png",
}: QuickViewProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-30' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 transition-opacity bg-gray-900 bg-opacity-50 backdrop-blur-lg ' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex items-stretch justify-center min-h-full text-center md:items-center md:px-2 lg:px-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
              enterTo='opacity-100 translate-y-0 md:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 md:scale-100'
              leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
            >
              <Dialog.Panel className='flex w-full text-base text-left transition transform md:my-0 md:max-w-2xl md:px-4 lg:max-w-4xl h-fit'>
                <div className='items-center w-full px-4 mt-40 md:mt-0'>
                  {/* <img
                      src={imageView}
                      alt="gallery photo"
                      className="object-cover object-center "
                    /> */}
                  <Image
                    src={imageView}
                    height={80}
                    width={100}
                    alt='Image-view'
                    objectFit='cover'
                    layout='responsive'
                    className='w-full rounded'
                  />
                </div>
                {/* <div className="relative flex items-center w-full px-4 pb-8 overflow-hidden shadow-2xl pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-0">
                  
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default QuickView;
