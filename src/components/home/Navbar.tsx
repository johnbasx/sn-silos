import { navigation } from "@/contents/navigation";
import { Dialog, Transition, Menu } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { HiBars3, HiPhone, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className='bg-white isolate'>
      <div className='flex items-center justify-center w-full h-8 text-xs font-semibold text-center text-white bg-gradient-to-r from-orange-700 to-orange-400'>
        <span>This website is under development</span>
      </div>
      <nav className='sticky top-0 z-50 px-6 py-3 bg-white drop-shadow shadow-black'>
        <div className='flex items-center justify-between mx-auto max-w-7xl'>
          <div className='flex lg:flex-1'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>SN Silos</span>
              <Image
                className='object-contain w-auto h-10 drop-shadow'
                src='/images/logo/sn-silos-web-logo.png'
                alt='SN Silos logo'
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <HiBars3 className='w-6 h-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "font-semibold leading-6 duration-150 rounded-md hover:text-emerald-700",
                  currentRoute === item.href
                    ? "text-emerald-600"
                    : "text-gray-900"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden gap-3 lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#!'
              className='inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold leading-6 text-gray-900 duration-150 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300'
            >
              <HiPhone />
              +91-9998567392
            </a>
            <button className='px-4 py-2 text-sm font-semibold text-white duration-150 rounded-md bg-emerald-600 hover:bg-emerald-700'>
              Download Now
            </button>
          </div>
        </div>
      </nav>
      <Transition appear as={Fragment} show={mobileMenuOpen}>
        <Dialog as='div' onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-200 transform'
            enterFrom='translate-x-full opacity-0'
            enterTo='translate-x-0 opacity-1'
            leave='transition ease-in-out duration-200 transform'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full opacity-0'
          >
            <Dialog.Panel className='fixed inset-0 z-10 px-6 py-3 overflow-y-auto bg-emerald-900 lg:hidden'>
              <div className='flex items-center justify-between'>
                <Link href='/' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>SN Silos</span>
                  <Image
                    className='object-contain w-auto h-10 brightness-125 drop-shadow'
                    src='/images/logo/snsilos-logoside.png'
                    alt='SN Silos logo'
                    priority
                    width={100}
                    height={100}
                  />
                </Link>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-emerald-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <HiXMark className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>
              <div className='flow-root mt-6'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='py-6 space-y-2'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          "block px-3 py-2 -mx-3 text-base font-semibold duration-150 leading-7 rounded-lg text-gray-50 hover:bg-emerald-400/10",
                          currentRoute === item.href ? "bg-emerald-400/10" : ""
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='flex flex-col gap-8 py-6'>
                    <a
                      href='#!'
                      className='-mx-3 rounded-lg py-2.5 px-3 text-base font-semibold leading-6 inline-flex items-center gap-2 text-emerald-50 hover:bg-emerald-400/10'
                    >
                      <HiPhone /> +91-9977162819
                    </a>
                    <button className='px-4 py-2.5 font-semibold duration-150 bg-white rounded-md text-emerald-900 hover:bg-gray-50'>
                      Download Now
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Navbar;
