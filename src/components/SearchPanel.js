import styled from "styled-components";

import closeIcon from "../resources/icons/close.svg";

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search by name...",
})`
  display: flex;
  min-width: 33%;
  padding: 0.5rem 0.75rem;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0.5rem;
  background: var(--color-block);
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  &::placeholder {
    color: var(--color-grey);
  }
  &:focus {
    outline: 1px solid var(--color-grey);
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 21px;
    width: 21px;
    background-image: url(${closeIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const SearchPanel = ({ search, setSearch }) => {
  return <Input onChange={(e) => setSearch(e.target.value)} value={search} />;
};
