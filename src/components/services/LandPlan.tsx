import Link from "next/link";
import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";

export const landPlanTabs = [
  {
    id: nanoid(),
    tabNo: 1,
    name: "Studio",
    heading: "The Land Studio",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.",
    image:
      "https://images.unsplash.com/photo-1632398461186-37c76a70062f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGhvdXNlJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: nanoid(),
    tabNo: 2,
    name: "Delux",
    heading: "The Arch love",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum quidem tempora vero perspiciatis provident necessitatibus nostrum qui, praesentium voluptates quo inventore debitis labore eveniet quae quaerat sint ullam laudantium.",
    image:
      "https://images.unsplash.com/photo-1599420186985-5c3d1a038e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFyY2hpdGVjdHVyZSUyMHBsYW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: nanoid(),
    tabNo: 3,
    name: "Penthouse",
    heading: "Penthouse designs",
    about:
      "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.",
    image:
      "https://images.unsplash.com/photo-1613643043796-a370ee99ecbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVudGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: nanoid(),
    tabNo: 4,
    name: "Top Garden",
    heading: "Rooftop Garden",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab dicta iste cumque ad consectetur, dignissimos nobis autem nostrum corrupti cum alias voluptate explicabo aliquam laborum at eos voluptas natus?",
    image:
      "https://images.unsplash.com/photo-1535689077097-a8726b5ff822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vZnRvcCUyMGdhcmRlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: nanoid(),
    tabNo: 5,
    name: "Double Height",
    heading: "Ceiling Height",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus est atque nihil dignissimos repellendus quaerat adipisci similique praesentium, eum sequi ex veritatis eaque vitae sunt excepturi soluta, maiores odio distinctio.",
    image:
      "https://images.unsplash.com/photo-1598242930255-c25f98ff11e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHBlbnRob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
];

const LandPlan = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <section className='px-6 py-20 overflow-hidden bg-white lg:px-0 lg:py-32'>
        <div className='flex flex-col max-w-3xl gap-2 mx-auto text-left md:text-center'>
          <h2 className='text-4xl font-extrabold lg:text-5xl'>
            Land <span className='text-emerald-500'>Plan</span>
          </h2>
          <p className='text-gray-600'>
            SN Silos has helped to create a marketplace to provide alll of the
            following services through internal operations in combination with
            our specialised partnership network.
          </p>
        </div>
        <div className='flex flex-wrap mx-auto max-w-7xl'>
          <div className='w-full'>
            <ul
              className='flex flex-row flex-wrap gap-2 pt-6 pb-4 mb-0 list-none lg:text-lg'
              role='tablist'
            >
              {landPlanTabs.map((tabItem, idx) => (
                <li
                  key={tabItem.id}
                  className='flex-auto mr-2 -mb-px text-center last:mr-0'
                >
                  <Link
                    className={
                      "font-semibold px-5 rounded-md py-3 block duration-200" +
                      (openTab === tabItem.tabNo
                        ? "text-emerald-50 bg-emerald-500 active:text-emerald-50"
                        : "text-gray-300 hover:text-emerald-600 bg-gray-50")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(tabItem.tabNo);
                    }}
                    data-toggle='tab'
                    href={"#link" + tabItem.tabNo}
                    role='tablist'
                  >
                    {tabItem.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className='relative flex flex-col w-full min-w-0 mb-6 break-words bg-white'>
              <div className='flex-auto'>
                <div className='tab-content tab-space'>
                  {landPlanTabs.map((tabItem, idx) => (
                    <div
                      key={"tab-detail-" + tabItem.id}
                      className={openTab === tabItem.tabNo ? "block" : "hidden"}
                      id={"link" + tabItem.tabNo}
                    >
                      <div className='py-8 mx-auto max-w-screen-2xl'>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                          <div className='p-8 rounded-t-2xl md:rounded-none md:rounded-l-2xl bg-emerald-900 md:p-12 lg:px-16 lg:py-24'>
                            <div className='max-w-xl mx-auto text-left'>
                              <h2 className='text-2xl font-bold text-white md:text-3xl'>
                                {tabItem.heading}
                              </h2>

                              <p className='mt-4 text-white/90'>
                                {tabItem.about}
                              </p>

                              <div className='mt-4 md:mt-8'>
                                <a
                                  href='#!'
                                  className='inline-block px-8 py-2.5 text-sm font-semibold transition bg-white border border-white rounded text-emerald-800 hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400'
                                >
                                  Get Started Today
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className='grid grid-cols-1'>
                            <Image
                              width={100}
                              height={100}
                              alt={tabItem.heading}
                              src={tabItem.image}
                              priority
                              unoptimized
                              className='object-cover w-full h-auto overflow-hidden rounded-b-2xl md:rounded-none md:rounded-r-2xl aspect-square'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandPlan;
