import { useState, useEffect } from "react";
import { InputSmall } from "../UI/input/Input";

export const FilterSearch = ({ param, filters, setFilters }) => {
  const [inputSearch, setInputSearch] = useState("");

  const onOptionSeacrh = (param, value) => {
    setInputSearch(value);
    const newFilters = filters.filter((filter) => filter[0] !== param);
    setFilters([...newFilters, [param, value]]);
  };

  useEffect(() => {
    setFilters(filters);
    // eslint-disable-next-line
  }, [filters]);

  return (
    <InputSmall
      onChange={(e) => onOptionSeacrh(param, e.target.value.trim())}
      placeholder={param}
      value={inputSearch}
    />
  );
};
