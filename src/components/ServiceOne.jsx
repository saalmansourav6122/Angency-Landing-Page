import React from "react";
import SubService from "./SubService";
import feature1 from "../assets/features/feature-1.png";
import feature2 from "../assets/features/feature-2.png";

function ServiceOne() {
  const subSerTwoSty = "flex-row-reverse";
  const subSerOneList = [
    "Continuous integration and deployment",
    "Development workflow",
    "Knowledge management",
  ];
  const subSerTwoList = [
    "Dynamic reports and dashboards",
    "Templates for everyone",
    "Development workflow",
    "Limitless business automation",
    "Knowledge management",
  ];
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <SubService
            title="Work with tools you already use"
            paragraph=" Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease."
            lastParagraph="Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions."
            img={feature1}
            alt="dashboard feature image"
            subSereList={subSerOneList}
          />
          <SubService
            title="We invest in the world’s potential"
            paragraph="  Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
            lastParagraph="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
            subSerTwoSty={subSerTwoSty}
            img={feature2}
            alt="dashboard feature image"
            subSereList={subSerTwoList}
          />
        </div>
      </section>
    </>
  );
}

export default ServiceOne;
