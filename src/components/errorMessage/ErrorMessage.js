import styled from "styled-components";

export const ErrorMessage = () => {
  return <ErrorMessageEl>Not found!</ErrorMessageEl>;
};

const ErrorMessageEl = styled.div`
  font-size: var(--fs-2xl);
`;
