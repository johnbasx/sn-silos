import React from "react";
import { nanoid } from "nanoid";
import { useTranslation } from "next-i18next";
import {
  TbCertificate,
  TbChartInfographic,
  TbHome,
  TbThumbUp,
} from "react-icons/tb";

export const someDetailsData = [
  {
    id: nanoid(),
    name: "Best Property lists",
    about:
      "We provide consumers with a content rich listings in a handy format",
    Icon: TbHome,
  },
  {
    id: nanoid(),
    name: "Best price in market",
    about:
      "Price estimates and sales histories for property, updating information",
    Icon: TbThumbUp,
  },
  {
    id: nanoid(),
    name: "Guaranteed services",
    about: "Our managers will keep you informed and you can act with certainty",
    Icon: TbCertificate,
  },
  {
    id: nanoid(),
    name: "Marketing research",
    about: "All our marketing researchers today have a tough job multitasking",
    Icon: TbChartInfographic,
  },
];
const SomeDetail = () => {
  const { t } = useTranslation("home");
  const somDetailTranslations = t("some-detail", {
    returnObjects: true,
  });

  return (
    <section className='relative bg-simon-img'>
      <div className='absolute inset-0 w-full h-full bg-black opacity-50'></div>
      <div className='px-6 py-32 mx-auto min-h-[50vh] flex justify-center items-center lg:py-32 max-w-7xl lg:px-0'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4'>
          {someDetailsData.map((item, index) => (
            <div
              className='flex flex-col items-center justify-center gap-6 text-center text-white drop-shadow'
              key={"Some-detail-" + item.id}
            >
              <item.Icon className='w-16 h-16' />
              <div className='flex flex-col gap-3'>
                <h4 className='text-lg font-semibold'>
                  {/* {item.name} */}
                  {somDetailTranslations[index].name}
                </h4>
                <p className='text-sm text-gray-200'>
                  {/* {item.about} */}
                  {somDetailTranslations[index].about}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SomeDetail;
