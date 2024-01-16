import { useState } from "react";

import styled from "styled-components";

import arrowIcon from "../resources/icons/arrow.svg";
import closeIcon from "../resources/icons/close.svg";

const FilterEl = styled.div`
  position: relative;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

const options = ["One", "Two", "Three"];

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Title");

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const clearFilter = (e) => {
    e.stopPropagation();
    setSelectedOption("Title");
    setIsOpen(false);
  };

  return (
    <FilterEl>
      <FilterHeader onClick={toggling}>
        {selectedOption}
        <FilterClear
          onClick={(e) => clearFilter(e)}
          style={{ display: selectedOption === "Title" ? "none" : "block" }}
        ></FilterClear>
      </FilterHeader>
      {isOpen && (
        <FilterListContainer>
          <FilterList>
            {options.map((option) => (
              <ListItem
                onClick={() => onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
              </ListItem>
            ))}
          </FilterList>
        </FilterListContainer>
      )}
    </FilterEl>
  );
};
