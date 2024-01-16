import styled from "styled-components";

import { Filter } from "./Filter";

const FilterPanelEl = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FilterPanel = () => {
  return (
    <FilterPanelEl>
      <Filter />
    </FilterPanelEl>
  );
};
