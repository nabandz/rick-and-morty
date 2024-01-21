import { useState, useEffect } from "react";
import styled from "styled-components";

import { SearchPanel } from "../SearchPanel/SearchPanel";
import { FilterPanel } from "../FilterPanel/FilterPanel";

export const ControlsPanel = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const [filtersSelect, setFiltersSelect] = useState([]);
  const [filtersSearch, setFiltersSearch] = useState([]);

  useEffect(() => {
    handleSearch(search, filtersSelect, filtersSearch);
    // eslint-disable-next-line
  }, [search, filtersSelect, filtersSearch]);

  return (
    <ControlsStyle>
      <SearchPanel search={search} setSearch={setSearch} />
      <FilterPanel
        filtersSelect={filtersSelect}
        setFiltersSelect={setFiltersSelect}
        filtersSearch={filtersSearch}
        setFiltersSearch={setFiltersSearch}
      />
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
