import React from "react";
import One from "./componentOfSvg/One";
import Two from "./componentOfSvg/Two";
import Three from "./componentOfSvg/Three";
import Four from "./componentOfSvg/Four";
import Five from "./componentOfSvg/Five";
import Six from "./componentOfSvg/Six";

function CompaniesLogo() {
  const logos = [<One />, <Two />, <Three />, <Four />, <Five />, <Six />];
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            {logos.map((logo, id) => (
              <a
                href="#"
                key={logo + id}
                className="flex items-center lg:justify-center"
              >
                {logo}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CompaniesLogo;
