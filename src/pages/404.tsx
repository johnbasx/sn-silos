import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  TbArrowLeft,
  TbArrowRight,
  TbBook,
  TbFileInfo,
  TbMessage2,
} from "react-icons/tb";

const Custom404Page = () => {
  const router = useRouter();
  return (
    <section className='bg-white'>
      <div className='container flex items-center justify-center min-h-screen px-6 py-12 mx-auto'>
        <div className='w-full '>
          <div className='flex flex-col items-center max-w-lg mx-auto text-center'>
            <p className='text-2xl font-semibold text-emerald-600'>
              404 error!
            </p>
            <h1 className='mt-3 text-5xl font-bold text-gray-800 md:text-7xl'>
              We lost this page
            </h1>
            <p className='mt-4 text-gray-500'>
              We searched high and low, but couldn’t find what you’re looking
              for.Let’s find a better place for you to go.
            </p>

            <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
              <button
                onClick={router.back}
                className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border border-gray-200 rounded-md gap-x-2 sm:w-auto hover:bg-gray-50'
              >
                <TbArrowLeft />

                <span>Go back</span>
              </button>

              <Link
                href='/'
                className='w-1/2 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 rounded-md bg-emerald-800 shrink-0 sm:w-auto hover:bg-emerald-700'
              >
                Take me home
              </Link>
            </div>
          </div>

          <div className='grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3'>
            <div className='p-6 rounded-2xl bg-emerald-50'>
              <span className='text-gray-500'>
                <TbFileInfo className='w-8 h-8' />
              </span>

              <h3 className='mt-6 font-medium text-gray-700'>About SN Silos</h3>

              <p className='mt-2 text-gray-500'>Want to know more about us?</p>

              <Link
                href='/about'
                className='inline-flex items-center mt-4 text-sm text-emerald-500 gap-x-2 hover:underline'
              >
                <span>Know more</span>

                <TbArrowRight />
              </Link>
            </div>

            <div className='p-6 rounded-2xl bg-emerald-50'>
              <span className='text-gray-500'>
                <TbBook className='w-8 h-8' />
              </span>

              <h3 className='mt-6 font-medium text-gray-700'>
                Our blog & press
              </h3>

              <p className='mt-2 text-gray-500'>
                Read the latest posts and photos.
              </p>

              <Link
                href='/press'
                className='inline-flex items-center mt-4 text-sm text-emerald-500 gap-x-2 hover:underline'
              >
                <span>View lastest posts</span>

                <TbArrowRight />
              </Link>
            </div>

            <div className='p-6 rounded-2xl bg-emerald-50'>
              <span className='text-gray-500'>
                <TbMessage2 className='w-8 h-8' />
              </span>

              <h3 className='mt-6 font-medium text-gray-700'>
                Want to talk with us?
              </h3>

              <p className='mt-2 text-gray-500'>
                Can’t find what you’re looking for?
              </p>

              <Link
                href='/contact'
                className='inline-flex items-center mt-4 text-sm text-emerald-500 gap-x-2 hover:underline'
              >
                <span>Chat with our team</span>

                <TbArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Custom404Page;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["404", "common"])),
  },
});
