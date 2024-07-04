"use client";

import Link from "next/link";
import React from "react";
import { MyCard } from "../../../components/mycard";
import { useSearchParams } from "next/navigation";
import { anyFetch } from "@/utils/data";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetFurnituresByCategoryId } from "@/app/api/furnitures";
import { Loader } from "lucide-react";
import { Button } from "@/components/button";

const hardCodedData = [
  { title: "Titre1", description: "description1" },
  { title: "Titre2", description: "description2" },
  { title: "Titre3", description: "description3" },
  { title: "Titre4", description: "description4" },
  { title: "Titre5", description: "description5" },
  { title: "Titre6", description: "description6" },
];

export default function CataloguePage() {
  const params = useSearchParams();
  const id = params.get("id");

  const { isError, data, isLoading } = useGetFurnituresByCategoryId({
    categoryId: id,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader className="animate-spin size-8" />
      </div>
    );
  if (isError) return <p>Une erreur est survenue</p>;

  return (
    <div className="relative flex-1 min-h-full bg-cover bg-[url('/catalogue.jpg')] flex items-center justify-center w-full">
      <div className="flex justify-center items-center w-full backdrop-blur-sm bg-white/10">
        <div className="grid grid-cols-3 gap-6 p-6 overflow-scroll">
          {data?.data.map((d) => (
            <div className="flex justify-center items-center" key={d.title}>
              <Link
                href="/furniture/item"
                className="w-4/5 hover:cursor-pointer"
              ></Link>
              <MyCard
                title={d.title}
                description={d.description}
                image={d.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
