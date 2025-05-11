import React from "react";
import ServiceTwoRighChild from "./ServiceTwoRighChild";
import Uptime from "./componentOfSvg/Uptime";
import User from "./componentOfSvg/User";
import Country from "./componentOfSvg/Country";
import Million from "./componentOfSvg/Million";

function ServiceTwoRight({}) {
  return (
    <>
      <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
        <ServiceTwoRighChild
          icon={<Uptime />}
          digit=" 99.99% uptime"
          para=" For Landwind, with zero maintenance downtime"
        />
        <ServiceTwoRighChild
          icon={<User />}
          digit=" 600M+ Users"
          para=" Trusted by over 600 milion users around the world"
        />

        <ServiceTwoRighChild
          icon={<Country />}
          digit=" 100+ countries"
          para="  Have used Landwind to create functional websites"
        />
        <ServiceTwoRighChild
          icon={<Million />}
          digit="5+ Million"
          para="Transactions per day"
        />
      </div>
    </>
  );
}

export default ServiceTwoRight;
