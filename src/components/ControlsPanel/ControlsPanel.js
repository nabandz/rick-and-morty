import { useState, useEffect } from "react";
import styled from "styled-components";

import { SearchPanel } from "../SearchPanel/SearchPanel";
import { FilterPanel } from "../FilterPanel/FilterPanel";

export const ControlsPanel = ({ handleSearch }) => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    handleSearch(filters);
    // eslint-disable-next-line
  }, [filters]);

  return (
    <ControlsStyle>
      <SearchPanel param={"name"} filters={filters} setFilters={setFilters} />
      <FilterPanel filters={filters} setFilters={setFilters} />
    </ControlsStyle>
  );
};

const ControlsStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;
