import { useState, useEffect } from "react";
import styled from "styled-components";

import { SearchPanel } from "./SearchPanel";
import { FilterPanel } from "./FilterPanel";

export const Controls = ({ handleSearch }) => {
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  const [filtersSearch, setFiltersSearch] = useState([]);

  useEffect(() => {
    handleSearch(search, filters, filtersSearch);
    // eslint-disable-next-line
  }, [search, filters, filtersSearch]);

  return (
    <ControlsEl>
      <SearchPanel search={search} setSearch={setSearch} />
      <FilterPanel
        filters={filters}
        setFilters={setFilters}
        filtersSearch={filtersSearch}
        setFiltersSearch={setFiltersSearch}
      />
    </ControlsEl>
  );
};

const ControlsEl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;
