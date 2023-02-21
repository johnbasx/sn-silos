import Link from "next/link";
import React from "react";
import { nanoid } from "nanoid";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const footerLinks = [
  {
    id: nanoid(),
    category: "Explore",
    links: [
      {
        id: nanoid(),
        name: "About",
        url: "/about",
      },
      {
        id: nanoid(),
        name: "Our Farmers",
        url: "/our-farmers",
      },
      {
        id: nanoid(),
        name: "New Projects",
        url: "/new-projects",
      },
    ],
  },
  {
    id: nanoid(),
    category: "Services",
    links: [
      {
        id: nanoid(),
        name: "Our platform",
        url: "#!",
      },
      {
        id: nanoid(),
        name: "SN services",
        url: "/services",
      },
      {
        id: nanoid(),
        name: "App downloads",
        url: "#!",
      },
    ],
  },
  {
    id: nanoid(),
    category: "Others",
    links: [
      {
        id: nanoid(),
        name: "Careers",
        url: "/careers",
      },
      {
        id: nanoid(),
        name: "Press",
        url: "/press",
      },
      {
        id: nanoid(),
        name: "Contact Us",
        url: "/contact-us",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer aria-label='Site Footer' className='bg-emerald-900'>
      <div className='max-w-screen-xl px-4 pt-24 pb-8 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-md mx-auto'>
          <h2 className='block text-4xl font-bold text-center text-white sm:text-5xl'>
            Want us to email you with our latest news?
          </h2>

          <form className='mt-6'>
            <div className='relative max-w-lg'>
              <label className='sr-only' htmlFor='email'>
                Email
              </label>

              <input
                className='w-full p-4 px-6 pr-32 text-sm font-medium text-black border-yellow-100 rounded-full focus:ring-yellow-100 bg-yellow-50'
                id='email'
                type='email'
                placeholder='youremail@gmail.com'
              />

              <button className='absolute px-5 py-3 text-sm font-semibold text-white transition -translate-y-1/2 rounded-full bg-emerald-800 top-1/2 right-1 hover:bg-emerald-900'>
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className='grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2 lg:gap-32'>
          <div className='max-w-sm mx-auto lg:max-w-none'>
            <p className='mt-4 text-sm text-center text-gray-300 lg:text-left'>
              SN Silos Private Limited&apos;s Corporate Identification Number is
              (CIN) U51100DL2018PTC339003 and its registration number is
              339003.Its Email address is nitish.narula14@gmail.com and its
              registered address is 2637, FIRST FLOOR, UNIT-II, NAYA BAZAR DELHI
              North Delhi DL 110006 IN .
            </p>

            <div className='flex justify-center gap-4 mt-6 lg:justify-start'>
              <a
                className='text-white transition hover:text-white/75'
                href=''
                target='_blank'
                rel='noreferrer'
              >
                <span className='sr-only'> Facebook </span>

                <FaFacebook className='w-6 h-6' />
              </a>

              <a
                className='text-white transition hover:text-white/75'
                href=''
                target='_blank'
                rel='noreferrer'
              >
                <span className='sr-only'> Instagram </span>

                <FaInstagram className='w-6 h-6' />
              </a>

              <a
                className='text-white transition hover:text-white/75'
                href=''
                target='_blank'
                rel='noreferrer'
              >
                <span className='sr-only'> Twitter </span>

                <FaTwitter className='w-6 h-6' />
              </a>

              <a
                className='text-white transition hover:text-white/75'
                href=''
                target='_blank'
                rel='noreferrer'
              >
                <span className='sr-only'> GitHub </span>

                <FaGithub className='w-6 h-6' />
              </a>

              <a
                className='text-white transition hover:text-white/75'
                href=''
                target='_blank'
                rel='noreferrer'
              >
                <span className='sr-only'> LinkedIn </span>

                <FaLinkedinIn className='w-6 h-6' />
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left'>
            {footerLinks.map((item, idx) => (
              <div key={"footer-item-" + idx + item.id}>
                <h4 className='font-semibold text-white'>{item.category}</h4>

                <nav
                  aria-label='Footer Services Nav'
                  className='flex flex-col mt-6 space-y-1'
                >
                  {item.links.map((link, index) => (
                    <Link
                      key={"link-item-" + link.id}
                      className='text-white transition hover:text-white/75'
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className='pt-8 mt-16 border-t border-emerald-100'>
          <p className='text-xs leading-relaxed text-center text-emerald-200'>
            &copy; SN Silos Pvt Ltd 2023. All rights reserved.
            <br />
            Powered by{" "}
            <a
              href=''
              className='font-semibold text-white underline transition hover:text-white/75'
            >
              Foxbeta
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
