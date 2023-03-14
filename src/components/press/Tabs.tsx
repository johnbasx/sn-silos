import React, { useContext, useEffect, useState } from "react";

// import FilterContext from "@/context/contextProvider";
import { useTranslation } from "next-i18next";
import useFilterStore from "@/store/FilterStore";
import clsx from "clsx";

export type TabsProps = {
  tabs: { name: string; href: string }[];
  type: string;
};

const Tabs = ({ tabs, type }: TabsProps) => {
  const [tabType, setTabType] = useState("photo-tabs");
  const categoryCtx = useFilterStore();
  const { t } = useTranslation("press");
  const tabsTranslations = t("press", { returnObjects: true });

  useEffect(() => {
    if (type == "videos") {
      setTabType("video-tabs");
    } else {
      setTabType("photo-tabs");
    }
  }, []);

  useEffect(() => {
    if (type == "videos") {
      setTabType("video-tabs");
    } else {
      setTabType("photo-tabs");
    }
  }, [type, tabs]);

  return (
    <div>
      <div className='sm:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id='tabs'
          name='tabs'
          className='block w-full border-gray-200 rounded-md shadow focus:ring-emerald-600 focus:border-emerald-600'
          defaultValue='All'
          onChange={(event) => {
            categoryCtx.setFilter(event.target.value);
          }}
          // {tabs.find((tab) => categoryCtx.categorytoFilter == tab.name).name}
        >
          {tabs.map((tab, i) => (
            <>
              {tabType == "photo-tabs" && (
                <option key={tab.name}>
                  {tabsTranslations["photo-tabs"][i].name}
                </option>
              )}
              {tabType == "video-tabs" && (
                <option key={tab.name}>
                  {tabsTranslations["video-tabs"][i].name}
                </option>
              )}
            </>
          ))}
        </select>
      </div>
      <div className='hidden sm:block'>
        <nav
          className='relative z-0 flex divide-x divide-gray-200 rounded-lg shadow-lg'
          aria-label='Tabs'
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              className={clsx(
                categoryCtx.categorytoFilter == tab.name
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700",
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
              )}
              onClick={() => {
                categoryCtx.setFilter(tab.name);
              }}
            >
              {tabType == "photo-tabs" && (
                <span>{tabsTranslations["photo-tabs"][tabIdx].name}</span>
              )}
              {tabType == "video-tabs" && (
                <span>{tabsTranslations["video-tabs"][tabIdx].name}</span>
              )}
              {/* <span>{t(`press.${tabType}.${tabIdx}.name`)}</span> */}
              <span
                aria-hidden='true'
                className={clsx(
                  categoryCtx.categorytoFilter == tab.name ||
                    (tabIdx == 1 && tab.name == "")
                    ? "bg-emerald-600"
                    : "bg-transparent",
                  "absolute inset-x-0 bottom-0 h-0.5"
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
