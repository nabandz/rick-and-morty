import { useState, useEffect } from "react";
import { InputSmall } from "../UI/input/Input";

export const FilterSearch = ({ param, filtersSearch, setFiltersSearch }) => {
  const [inputSearch, setInputSearch] = useState("");

  const onOptionSeacrh = (param, value) => {
    setInputSearch(value);
    const newFilters = filtersSearch.filter((filter) => filter[0] !== param);
    setFiltersSearch([...newFilters, [param, value]]);
  };

  useEffect(() => {
    setFiltersSearch(filtersSearch);
    // eslint-disable-next-line
  }, [filtersSearch]);

  return (
    <InputSmall
      onChange={(e) => onOptionSeacrh(param, e.target.value.trim())}
      placeholder={param}
      value={inputSearch}
    />
  );
};
