import Image from "next/image";
import React from "react";
import { nanoid } from "nanoid";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

export const endToEndSupplyData = [
  {
    id: nanoid(),
    heading: "Prodcurement Engine",
    tagline: "Farmer / Supplier App",
    image:
      "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    points: [
      {
        id: nanoid(),
        name: "Traceability",
        about:
          "In-house susyem has traceability to keep track of the source of the produce and its quality.",
      },
      {
        id: nanoid(),
        name: "Transparency",
        about: "Farmers have complete transparency of their PO's and payments.",
      },
    ],
  },
  {
    id: nanoid(),
    heading: "Advanced Reseller App",
    tagline: "Reseller App",
    image:
      "https://images.unsplash.com/photo-1605752995290-dde649b8da06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwcGxpZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    points: [
      {
        id: nanoid(),
        name: "AI & Social",
        about: "AI powered CRM enabling better communication with consumers.",
      },
      {
        id: nanoid(),
        name: "Orders/Deliveries",
        about: "Track consumer orders and make deliveries fast and easy.",
      },
      {
        id: nanoid(),
        name: "Incentive",
        about: "Earn incentive and bonuses on sales.",
      },
    ],
  },
  {
    id: nanoid(),
    heading: "Retailer / Consumer App",
    tagline: "Retailer / Consumer App",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlZyUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    points: [
      {
        id: nanoid(),
        name: "Orders",
        about: "View catalogue, place orders and track deliveries.",
      },
      {
        id: nanoid(),
        name: "Wallet",
        about: "Add money to your wallet for fast checkouts and offers.",
      },
    ],
  },
];

const EndToEndSupply = () => {
  const { t } = useTranslation("services");
  const endToEndTranslations = t("end-to-end-supply.data", {
    returnObjects: true,
  });
  return (
    <div className='container px-6 mx-auto my-16 max-w-7xl'>
      <div className='flex flex-col items-center justify-center max-w-2xl gap-4 py-8 mx-auto text-center'>
        <h2 className='text-4xl font-bold lg:text-5xl'>
          {/* End to End supply chain */}
          {t("end-to-end-supply.heading")}
        </h2>
        <p className='text-gray-600'>
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, a
          expedita? Sed laudantium saepe quod. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. */}
          {t("end-to-end-supply.description")}
        </p>
      </div>
      {endToEndSupplyData.map((item, index) => (
        <section key={item.id}>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div
              className={clsx(
                "w-full",
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              )}
            >
              <div className='flex lg:py-12'>
                <Image
                  src={item.image}
                  className='object-cover w-full shadow-lg aspect-square rounded-2xl'
                  width={200}
                  height={200}
                  alt={item.heading}
                />
              </div>
            </div>

            <div
              className={clsx(
                "w-full",
                index % 2 === 0 ? "order-2" : "order-1"
              )}
            >
              <div className='flex items-center h-full py-8 text-left text-black rounded-lg lg:p-6 lg:pl-12 lg:text-left'>
                <div className='flex flex-col gap-3 lg:pl-12'>
                  <h2 className='text-2xl font-bold lg:text-3xl'>
                    {/* {item.heading} */}
                    {endToEndTranslations[index].heading}
                  </h2>
                  <span className='font-semibold tracking-wider uppercase text-emerald-500'>
                    {/* {item.tagline} */}
                    {endToEndTranslations[index].tagline}
                  </span>
                  <ul className=''>
                    {item.points.map((point, idx) => (
                      <li key={point.id}>
                        <span className='font-bold'>
                          {/* {point.name} */}
                          {endToEndTranslations[index].points[idx].name}
                        </span>{" "}
                        :
                        <span>
                          {/* {point.about} */}
                          {endToEndTranslations[index].points[idx].about}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default EndToEndSupply;
