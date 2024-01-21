import styled from "styled-components";

import { selectFilter, searchFilter } from "../../utils/filterOptions";
import { FilterSelect } from "../FilterSelect/FilterSelect";
import { FilterSearch } from "../FilterSearch/FilterSearch";

export const FilterPanel = ({ filters, setFilters }) => {
  return (
    <FilterPanelStyle>
      {Object.entries(selectFilter).map(([type, optionsData]) => {
        return (
          <FilterSelect
            key={type}
            param={type}
            filterOptions={optionsData}
            setFilters={setFilters}
            filters={filters}
          />
        );
      })}
      {Object.entries(searchFilter).map(([type]) => {
        return (
          <FilterSearch
            key={type}
            param={type}
            filters={filters}
            setFilters={setFilters}
          />
        );
      })}
    </FilterPanelStyle>
  );
};

const FilterPanelStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
