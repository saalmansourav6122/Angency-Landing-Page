import React from "react";
import CirclewithTick from "./componentOfSvg/CirclewithTick";

export default function SubService({
  title,
  paragraph,
  lastParagraph,
  img,
  alt,
  subSerOneList,
}) {
  return (
    <>
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-8 font-light lg:text-xl">{paragraph}</p>

          <ul
            role="list"
            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            {subSerOneList.map((list, id) => (
              <li key={list + id} className="flex space-x-3">
                <CirclewithTick />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  {list}
                </span>
              </li>
            ))}
          </ul>

          <p className="mb-8 font-light lg:text-xl">{lastParagraph}</p>
        </div>
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src={img}
          alt={alt}
        />
      </div>
    </>
  );
}
