import styled from "styled-components";

import { statusOptions, genderOptions } from "../utils/filterOptions";
import { Filter } from "./Filter";

export const FilterPanel = ({ filters, setFilters }) => {
  const selectFilter = {
    status: statusOptions,
    gender: genderOptions,
  };
  /* const searchFilter = {
    species: "",
    type: "",
  }; */

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
    </FilterPanelEl>
  );
};

const FilterPanelEl = styled.div`
  display: flex;
  gap: 0.5rem;
`;
