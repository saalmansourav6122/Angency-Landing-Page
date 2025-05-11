import React from "react";
import img from "./../assets/logo.svg";
import Fb from "./componentOfSvg/Fb";
import Insta from "./componentOfSvg/Insta";
import X from "./componentOfSvg/X";
import Git from "./componentOfSvg/Git";
import Inter from "./componentOfSvg/Inter";
function Footer() {
  const sections = [
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Help center",
      links: [
        "Help Center",
        "Discord Server",
        "Twitter",
        "Facebook",
        "Contact Us",
      ],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Licensing", "Terms"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
      title: "Download",
      links: ["iOS", "Android", "Windows", "MacOS"],
    },
  ];
  return (
    <>
      {" "}
      <footer class="bg-white dark:bg-gray-800">
        <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {sections.map((sections, index) => (
              <div key={sections + index}>
                <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {sections.title}
                </h3>
                <ul class="text-gray-500 dark:text-gray-400">
                  {sections.links.map((link, linkIndex) => (
                    <li class="mb-4" key={link + linkIndex}>
                      <a href="#" class=" hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div class="text-center">
            <a
              href="#"
              class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                src={img}
                class="h-6 mr-3 sm:h-9"
                alt="Learn with Sumit Logo"
              />
              Learn with Sumit{" "}
            </a>
            <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
              <a
                href="#"
                target="_blank"
                class="text-purple-600 hover:underline dark:text-purple-500"
              >
                Flowbite
              </a>{" "}
              and{" "}
              <a
                href="#"
                class="text-purple-600 hover:underline dark:text-purple-500"
              >
                Tailwind CSS
              </a>
              .
            </span>

            <ul className="flex justify-center mt-5 space-x-5">
              {[<Fb />, <Insta />, <X />, <Git />, <Inter />].map(
                (icon, index) => (
                  <li key={icon + index}>
                    <a href="#" className="text-gray-500 hover:text-gray-400">
                      {icon}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
