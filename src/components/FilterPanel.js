import styled from "styled-components";

import { statusOptions, genderOptions } from "../utils/filterOptions";
import { Filter } from "./Filter";
import { SearchFilter } from "./SearchFilter";

export const FilterPanel = ({
  filters,
  setFilters,
  filtersSearch,
  setFiltersSearch,
}) => {
  const selectFilter = {
    status: statusOptions,
    gender: genderOptions,
  };
  const searchFilter = {
    species: "",
    type: "",
  };

  return (
    <FilterPanelEl>
      {Object.entries(selectFilter).map(([type, optionsData]) => {
        return (
          <Filter
            key={type}
            param={type}
            filterOptions={optionsData}
            setFilters={setFilters}
            filters={filters}
          />
        );
      })}
      {Object.entries(searchFilter).map(([type, optionsData]) => {
        return (
          <SearchFilter
            key={type}
            param={type}
            filtersSearch={filtersSearch}
            setFiltersSearch={setFiltersSearch}
          />
        );
      })}
    </FilterPanelEl>
  );
};

const FilterPanelEl = styled.div`
  display: flex;
  gap: 0.5rem;
`;
