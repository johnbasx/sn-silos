import Image from "next/image";
import { HiCheck, HiStar, HiChevronRight } from "react-icons/hi";

const features = [
  {
    name: "Invite team members",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "List view",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Keyboard shortcuts",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Calendars",
    description:
      "You can manage phone, email and chat conversations all from a single mailbox.",
  },
  {
    name: "Notifications",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Boards",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Reporting",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
  {
    name: "Mobile app",
    description:
      "Find what you need with advanced filters, bulk actions, and quick views.",
  },
];

const DownloadApp = () => {
  return (
    <div className='pb-8 bg-white sm:pb-12 lg:pb-12'>
      <div className='pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48'>
        <div className='px-6 mx-auto max-w-7xl sm:px-6 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-24'>
          <div>
            <div className='mt-10'>
              <div>
                <a href='#' className='inline-flex space-x-4'>
                  <span className='rounded bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600 tracking-wide uppercase'>
                    Download Now!
                  </span>
                </a>
              </div>
              <div className='mt-6 sm:max-w-xl'>
                <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                  Search Best Deals{" "}
                  <span className='text-emerald-500'>on go</span>
                </h1>
                <p className='mt-6 text-gray-500'>
                  You can new updates and exciting offers if you use our
                  apps.Please Download from the playstore or Appstore. Anim aute
                  id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                  cupidatat commodo.
                </p>
              </div>

              <div className='px-4 mt-6 md:px-0'>
                <div className='inline-flex items-center justify-center gap-4'>
                  <a href='#!'>
                    <Image
                      src='/images/screen/download-appstore.png'
                      alt='Download from appstore'
                      height={100}
                      width={100}
                      className='object-contain w-auto h-12'
                    />
                  </a>
                  <a href='#!'>
                    <Image
                      src='/images/screen/download-googleplay.png'
                      alt='Download from GooglePlay'
                      height={100}
                      width={100}
                      className='object-contain w-auto h-12'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
          <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <div className='hidden sm:block'>
              <div className='absolute inset-y-0 w-screen left-1/2 bg-yellow-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full' />
              <svg
                className='absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0'
                width={404}
                height={392}
                fill='none'
                viewBox='0 0 404 392'
              >
                <defs>
                  <pattern
                    id='837c3e70-6c3a-44e6-8854-cc48c737b659'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
                />
              </svg>
            </div>
            <div className='relative mx-auto group sm:px-0 lg:max-w-none lg:h-full lg:pl-28'>
              <Image
                className='w-full rounded-md drop-shadow-xl lg:h-full lg:w-auto lg:max-w-none'
                src='/images/screen/joinnow-screen.png'
                alt='Join Now iphone screen'
                unoptimized
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
