import React from "react";
import PriceCard from "./PriceCard";

function Pricing() {
  const startedList = [
    "Individual configuration",
    "No setup, or hidden fees",
    "Team size: 1 developer",
    "Premium support: 6 months",
    "Free updates: 6 months",
  ];
  const company = [
    "Individual configuration",
    "No setup, or hidden fees",
    "Team size: 10 developers",
    "Premium support: 24 months",
    "Free updates: 24 months",
  ];
  const enterprise = [
    "Individual configuration",
    "No setup, or hidden fees",
    "Team size: 100+ developers",
    "Premium support: 36 months",
    "Free updates: 36 months",
  ];
  const startedBTNsty =
    "text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900";
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Landwind we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <PriceCard
              title="Starter"
              discp="Best option for personal use & for your next project."
              price="$29"
              list={startedList}
              btnSty={startedBTNsty}
              nameOfBtn="Get Start"
              href="*"
              myStyle={startedBTNsty}
            />
            <PriceCard
              title="Company"
              discp="Relevant for multiple users, extended & premium support."
              price="$99"
              list={company}
              btnSty={startedBTNsty}
              nameOfBtn="Get Start"
              href="*"
              myStyle={startedBTNsty}
            />
            <PriceCard
              title="Enterprise"
              discp="Best for large scale uses and extended redistribution rights"
              price="$499"
              list={enterprise}
              btnSty={startedBTNsty}
              nameOfBtn="Get Start"
              href="*"
              myStyle={startedBTNsty}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
