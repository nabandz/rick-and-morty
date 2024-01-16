import styled from "styled-components";

import { useState } from "react";

import { SearchPanel } from "./SearchPanel";
import { FilterPanel } from "./FilterPanel";

const ControlsEl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Controls = () => {
  const [search, setSearch] = useState("");

  return (
    <ControlsEl>
      <SearchPanel search={search} setSearch={setSearch} />
      <FilterPanel />
    </ControlsEl>
  );
};
