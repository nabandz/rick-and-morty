import { useState, useEffect } from "react";

const useRickAndMortyServices = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState("");

  const BASE_API = "https://rickandmortyapi.com/api/character";

  const fetchData = async (
    url,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) => {
    setLoading(true);
    try {
      const response = await fetch(url, { method, body, headers });
      const resultData = await response.json();

      if (response.ok) {
        setData((prevData) => [...prevData, ...resultData.results]);
        setNextPage(resultData.info.next);
      } else {
        setData([]);
        setNextPage("");
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setData([]);
      throw error;
    }
  };

  function getFilterURL(arr) {
    const urlStr = [];
    arr.forEach((filter) => {
      urlStr.push(`${filter[0]}=${filter[1]}`);
    });
    return urlStr.join("&");
  }

  useEffect(() => {
    fetchData(`${BASE_API}?page=1`);
  }, []);

  const loadNextPage = () => {
    if (nextPage) {
      setLoading(true);
      fetchData(nextPage);
    }
  };

  const defaultData = () => {
    setData([]);
    setLoading(true);
    fetchData(`${BASE_API}?page=1`);
    return;
  };

  const filterData = async (filtersArr) => {
    setData([]);
    setLoading(true);

    let urlFilter = getFilterURL(filtersArr);
    const newURL = `${BASE_API}?${urlFilter}`;
    fetchData(newURL);
  };

  return {
    data,
    isLoading,
    error,
    filterData,
    loadNextPage,
    defaultData,
  };
};

export default useRickAndMortyServices;