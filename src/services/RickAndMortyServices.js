import { useState, useCallback } from "react";

const useRickAndMortyServices = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState("");
  const [initial, setInitial] = useState(true);

  const BASE_API = "https://rickandmortyapi.com/api/character";

  function getFilterURL(arr) {
    const urlString = [];
    arr.forEach((filter) => {
      urlString.push(`${filter[0]}=${filter[1]}`);
    });
    return urlString.join("&");
  }

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
        setData((data) => [...data, ...resultData.results]);
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

  const clearError = useCallback(() => setError(null), []);

  const defaultData = () => {
    setInitial(false);
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

  const loadNextPage = () => {
    if (nextPage) {
      setLoading(true);
      fetchData(nextPage);
    }
  };

  const transformData = (char) => {
    return {
      image: char.image,
      gender: char.gender ? char.gender : "Unknown",
      name: char.name ? char.name : "Unknown",
      species: char.species ? char.species : "Unknown",
      status: char.status ? char.status : "Unknown",
      type: char.type ? char.type : "Unknown",
      lastLocation: char.location.name ? char.location.name : "Unknown",
      firstSeen: char.origin.name ? char.origin.name : "Unknown",
    };
  };

  return {
    initial,
    data,
    nextPage,
    isLoading,
    error,
    filterData,
    loadNextPage,
    defaultData,
    clearError,
    transformData,
  };
};

export default useRickAndMortyServices;
