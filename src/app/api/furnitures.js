"use client";

import { useEffect, useState } from "react";
import { BASE_URL, ENDPOINTS } from "./utils";

const getFurnituresByCategoryId = async (categoryId) => {
  const requests = await fetch(
    BASE_URL + ENDPOINTS.furnitures + "?id=" + categoryId
  );
  const response = await requests.json();

  return response;
};

export const useGetFurnituresByCategoryId = ({ categoryId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const launchRequest = async () => {
    setIsLoading(true);
    try {
      const res = await getFurnituresByCategoryId(categoryId);
      setData(res);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    launchRequest().catch(console.error);
  }, []);

  useEffect(() => {
    if (data) {
      setIsSuccess(true);
    }
  }, [data]);

  useEffect(() => {
    launchRequest().catch(console.error);
  }, [categoryId]);

  return { isLoading, isError, isSuccess, data };
};
