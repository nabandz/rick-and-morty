import styled from "styled-components";

import closeIcon from "../../../resources/icons/close.svg";

export const Input = (props) => {
  return <InputStyle {...props} />;
};

export const InputSmall = (props) => {
  return <InputSmallStyle {...props} />;
};

const InputStyle = styled.input.attrs(({ placeholder }) => ({
  type: "search",
  placeholder: placeholder,
}))`
  display: flex;
  width: 376px;
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
    text-transform: capitalize;
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

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const InputSmallStyle = styled(InputStyle)`
  width: 155px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;
