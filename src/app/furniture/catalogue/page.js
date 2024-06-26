"use client";

import React from "react";
import { MyCard } from "../../../components/mycard";
const data = [
  { title: "titre1", description: "description1" },
  { title: "titre2", description: "description2" },
  { title: "titre3", description: "description3" },
  { title: "titre3", description: "description3" },
  { title: "titre3", description: "description3" },
  { title: "titre3", description: "description3" },
];
const CataloguePage = () => {
  return (
    <div className="w-full">
      <h1>Ma page Catalogue</h1>
      <div className="flex justify-center items-center gap-10 w-full">
        {data.map((d) => (
          <MyCard title={d.title} description={d.description} />
        ))}
      </div>
    </div>
  );
};

export default CataloguePage;
