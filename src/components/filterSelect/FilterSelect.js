import { useState, useEffect } from "react";
import styled from "styled-components";

import arrowIcon from "../../resources/icons/arrow.svg";
import closeIcon from "../../resources/icons/close.svg";

export const FilterSelect = ({
  param,
  filterOptions,
  setFiltersSelect,
  filtersSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(param);

  const toggleFilterList = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (param, value) => {
    setSelectedOption(value);
    setIsOpen(false);
    const newFilters = filtersSelect.filter((filter) => filter[0] !== param);
    setFiltersSelect([...newFilters, [param, value]]);
  };

  const clearFilter = (e) => {
    e.stopPropagation();
    setSelectedOption(param);
    setIsOpen(false);
    const newFilters = filtersSelect.filter((filter) => filter[0] !== param);
    setFiltersSelect([...newFilters]);
  };

  useEffect(() => {
    setFiltersSelect(filtersSelect);
    // eslint-disable-next-line
  }, [filtersSelect]);

  return (
    <FilterEl>
      <FilterHeader onClick={toggleFilterList}>
        {selectedOption}
        <FilterClear
          onClick={(e) => clearFilter(e)}
          style={{ display: selectedOption === param ? "none" : "block" }}
        ></FilterClear>
      </FilterHeader>
      {isOpen && (
        <FilterListContainer>
          <FilterList>
            {filterOptions.map((option) => (
              <ListItem
                onClick={() => onOptionClicked(param, option.value)}
                key={option.value}
                value={option.value}
              >
                {option.name}
              </ListItem>
            ))}
          </FilterList>
        </FilterListContainer>
      )}
    </FilterEl>
  );
};

const FilterEl = styled.div`
  position: relative;
  width: 155px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const FilterHeader = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background: var(--color-block);
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  text-transform: capitalize;
  cursor: pointer;

  background-image: url(${arrowIcon});
  background-position: right 0.5rem top 50%;
  background-repeat: no-repeat;
  background-size: 21px auto;
  padding-right: 2rem;
  transition: var(--transition);
  &:hover {
    background-color: var(--color-hover);
    box-shadow: var(--box-shadow);
  }
`;

const FilterClear = styled.button`
  padding-right: 1.25rem;
  position: relative;
  height: 100%;
  width: 21px;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1.75px;
    border-radius: 0.5rem;
    background-color: var(--color-grey);
  }
`;

const FilterListContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 3rem;
  z-index: 1;
`;

const FilterList = styled.ul`
  padding: 0;
  margin: 0;
  border-radius: 0.5rem;
  background: var(--color-block);
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  border: 1px solid var(--color-grey);
  overflow: hidden;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: start;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: var(--color-block);
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    background-color: var(--color-hover);
  }
`;
