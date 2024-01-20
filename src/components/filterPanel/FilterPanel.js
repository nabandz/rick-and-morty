import styled from "styled-components";

import { statusOptions, genderOptions } from "../../utils/filterOptions";
import { FilterSelect } from "../filterSelect/FilterSelect";
import { FilterSearch } from "../filterSearch/FilterSearch";

export const FilterPanel = ({
  filtersSelect,
  setFiltersSelect,
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
          <FilterSelect
            key={type}
            param={type}
            filterOptions={optionsData}
            setFiltersSelect={setFiltersSelect}
            filtersSelect={filtersSelect}
          />
        );
      })}
      {Object.entries(searchFilter).map(([type]) => {
        return (
          <FilterSearch
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
  flex-wrap: wrap;
  gap: 0.5rem;
`;
