"use client";

import React from "react";
import { MyCard } from "../../../components/mycard";

const data = [
  { title: "Titre1", description: "description1" },
  { title: "Titre2", description: "description2" },
  { title: "Titre3", description: "description3" },
  { title: "Titre4", description: "description4" },
  { title: "Titre5", description: "description5" },
  { title: "Titre6", description: "description6" },
];

const CataloguePage = () => {
  return (
    <div className="relative flex-1 min-h-full bg-cover bg-[url('/catalogue.jpg')] flex items-center justify-center w-full">
      <div className="absolute top-0 bottom-0 backdrop-blur-sm bg-white/10 min-h-full w-full">
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-3 gap-6 p-6">
            {data.map((d) => (
              <div className="flex justify-center items-center" key={d.title}>
                <div className="w-4/5">
                  <MyCard title={d.title} description={d.description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CataloguePage;
