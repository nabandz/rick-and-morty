import { useState, useEffect } from "react";

import styled from "styled-components";

import closeIcon from "../../resources/icons/close.svg";

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
    <Input
      onChange={(e) => onOptionSeacrh(param, e.target.value.trim())}
      placeholder={param}
      value={inputSearch}
    />
  );
};

const Input = styled.input.attrs({
  type: "search",
})`
  display: flex;
  width: 155px;
  padding: 0.5rem 0.75rem;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0.5rem;
  background: var(--color-block);
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  &::placeholder {
    text-transform: capitalize;
    color: var(--color-grey);
  }
  &:focus {
    outline: 1px solid var(--color-grey);
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 21px;
    width: 21px;
    background-image: url(${closeIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;
