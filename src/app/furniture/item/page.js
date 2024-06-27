"use client";

import React from "react";
import { MyCard } from "../../../components/mycard";

const data = [{ title: "Titre1", description: "description1" }];

const ItemPage = () => {
  return (
    <div className="relative flex-1 min-h-full bg-cover bg-[url('/catalogue.jpg')] flex items-center justify-center w-full">
      <div className="absolute inset-0 bg-grey/10 backdrop-blur-sm"></div>{" "}
      {/* Blurred overlay */}
      <div className="relative w-full max-w-screen-lg flex flex-wrap justify-center items-center gap-16">
        {data.map((d) => (
          <div className="w-full sm:w-1/2 lg:w-1/3" key={d.title}>
            <MyCard title={d.title} description={d.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
