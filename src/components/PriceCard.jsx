import React from "react";
import OnlyTick from "./componentOfSvg/OnlyTick";
import Button from "./Button";

function PriceCard({ title, discp, price, list, nameOfBtn, myStyle }) {
  return (
    <>
      <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 class="mb-4 text-2xl font-semibold">{title}</h3>
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          {discp}
        </p>
        <div class="flex items-baseline justify-center my-8">
          <span class="mr-2 text-5xl font-extrabold">{price}</span>
          <span class="text-gray-500 dark:text-gray-400">/month</span>
        </div>

        <ul role="list" class="mb-8 space-y-4 text-left">
          {list.map((list, id) => (
            <li key={list + id} className="flex items-center space-x-3">
              <OnlyTick />
              <span>{list}</span>
            </li>
          ))}
        </ul>
        <Button nameOfBtn={nameOfBtn} myStyle={myStyle} />
      </div>
    </>
  );
}

export default PriceCard;
