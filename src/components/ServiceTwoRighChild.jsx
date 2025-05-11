import React from "react";

function ServiceTwoRighChild({ icon, digit, para }) {
  return (
    <>
      {" "}
      <div>
        {icon}
        <h3 className="mb-2 text-2xl font-bold dark:text-white">{digit}</h3>
        <p className="font-light text-gray-500 dark:text-gray-400">{para}</p>
      </div>
    </>
  );
}

export default ServiceTwoRighChild;
