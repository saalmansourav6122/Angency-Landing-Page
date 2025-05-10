import React from "react";
import SubService from "./SubService";
import feature1 from "../assets/features/feature-1.png";

function ServiceOne() {
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <SubService
            title="Work with tools you already use"
            paragraph=" Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease."
            lastParagraph="Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions."
            img={feature1}
          />
        </div>
      </section>
    </>
  );
}

export default ServiceOne;
