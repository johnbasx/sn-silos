import React, { useContext, useState } from "react";
import {
  images,
  photoTabs,
  suffleArray,
  tabItems,
  videoTabs,
  videos,
} from "@/contents/press";
import Image from "next/image";
import QuickView from "./QuickView";
import { Tab } from "@headlessui/react";
import Tabs from "./Tabs";
import { useTranslation } from "next-i18next";
import useFilterStore from "@/store/FilterStore";
import clsx from "clsx";

const Press = () => {
  const { t } = useTranslation("press");
  const pressTabsTranslations = t("gallery.tab-items", { returnObjects: true });

  const [open, setOpen] = useState(false);
  const [imageView, setImageView] = useState("");
  const filterCategoryCtx = useFilterStore();
  const [imagesList, setImagesList] = useState(images);
  const [videoList, setVideoList] = useState(videos);

  return (
    <>
      <QuickView open={open} setOpen={setOpen} imageView={imageView} />
      <div className='py-12 bg-white lg:pb-16 lg:pt-24'>
        <div className='px-6 py-8 max-w-7xl md:mx-auto lg:px-6'>
          <Tab.Group>
            <div>
              <div className='flex flex-col w-full'>
                <h1 className='text-5xl font-extrabold text-center lg:text-6xl 2xl:text-7xl'>
                  <span className='text-black'>
                    {/* Press & Blogs */}
                    {t("gallery.heading")}
                  </span>
                </h1>

                <p className='max-w-3xl mx-auto my-3 text-center text-gray-800 md:text-lg'>
                  {/* Get the power of customization in your farm based on IoT,
                  Satellite imaging and Machine Learning. */}
                  {t("gallery.sub-heading")}
                </p>
              </div>
              <Tab.List className='relative flex self-center w-full gap-4 mt-4 rounded-lg'>
                {tabItems.map((tab, i) => (
                  <Tab
                    key={tab.id}
                    className={({ selected }) =>
                      clsx(
                        "w-full rounded-lg py-2.5 text-sm md:text-xl font-bold leading-5 border",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-emerald-600 focus:outline-none focus:ring-2 shadow-sm",
                        selected
                          ? "bg-emerald-600 text-white"
                          : "text-slate-800 bg-white"
                      )
                    }
                  >
                    {pressTabsTranslations[i].name}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <div className='mt-8 sm:mt-16 lg:mx-auto'>
                  <Tabs tabs={photoTabs} type='photos' />
                  <div className='gap-6 mt-8 md:gap-6 columns-1 md:columns-3'>
                    {filterCategoryCtx.categorytoFilter === "All" ||
                    filterCategoryCtx.categorytoFilter === ""
                      ? imagesList.map((image, index) => (
                          <div
                            key={index}
                            className={`w-full h-full ${
                              `aspect-` + image.aspectRatio
                            } rounded-2xl md:rounded-3xl object-cover overflow-hidden mb-6`}
                            onClick={() => {
                              setImageView(image.src);
                              setOpen(true);
                            }}
                          >
                            <Image
                              alt={`press-photos` + index}
                              height={100}
                              width={100}
                              className={clsx(
                                "overflow-hidden w-full h-full duration-300 hover:scale-110 object-cover rounded-2xl md:rounded-3xl"
                              )}
                              unoptimized
                              src={image.src}
                            />
                          </div>
                        ))
                      : imagesList
                          .filter(
                            (src) =>
                              src.category ===
                              filterCategoryCtx.categorytoFilter
                            // filterCategoryCtx.categorytoFilter
                          )
                          .map((image, index) => (
                            <div
                              key={index}
                              className={`w-full ${
                                `aspect-` + image.aspectRatio
                              } rounded-2xl md:rounded-3xl overflow-hidden mb-6`}
                              onClick={() => {
                                setImageView(image.src);
                                setOpen(true);
                              }}
                            >
                              <Image
                                objectFit='cover'
                                alt={`videos` + index}
                                layout='responsive'
                                height={
                                  image.aspectRatio == "video" ? 900 : 100
                                }
                                width={
                                  image.aspectRatio == "video" ? 1600 : 100
                                }
                                className='overflow-hidden duration-300 hover:scale-110 rounded-2xl md:rounded-3xl'
                                src={image.src}
                              />
                            </div>
                          ))}
                  </div>
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className='mt-8 sm:mt-16 lg:max-w-7xl lg:mx-auto md:mx-12 xl:max-w-none xl:mx-0'>
                  <Tabs tabs={videoTabs} type='videos' />
                  <div className='gap-8 mt-10 columns-1 sm:columns-2 md:columns-3'>
                    {filterCategoryCtx.categorytoFilter === "All" ||
                    filterCategoryCtx.categorytoFilter === ""
                      ? videoList.map((video, index) => (
                          <div
                            key={index}
                            className={`w-full aspect-video rounded-2xl overflow-hidden mb-6`}
                          >
                            <iframe
                              src='https://www.youtube.com/embed/oApaSYBpa2k'
                              title='YouTube video player'
                              frameBorder='0'
                              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                              allowFullScreen
                              className={`aspect-video w-full rounded-2xl`}
                            ></iframe>
                          </div>
                        ))
                      : videoList
                          .filter(
                            (src) =>
                              src.category ===
                              filterCategoryCtx.categorytoFilter
                          )
                          .map((video, index) => (
                            <div
                              key={index}
                              className={`w-full aspect-video rounded-2xl overflow-hidden mb-4 `}
                            >
                              <iframe
                                src='https://www.youtube.com/embed/oApaSYBpa2k'
                                title='YouTube video player'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                className={`aspect-video w-full`}
                              ></iframe>
                            </div>
                          ))}
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default Press;
