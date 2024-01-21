import styled from "styled-components";

export const ErrorMessage = () => {
  return <ErrorMessageStyle>Not found!</ErrorMessageStyle>;
};

const ErrorMessageStyle = styled.div`
  font-size: var(--fs-2xl);
`;
