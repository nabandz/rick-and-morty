import styled from "styled-components";

import { Container } from "../Container/Container";

const MainStyle = styled.main`
  padding-bottom: 3.375rem;
`;

export const Main = ({ children }) => {
  return (
    <MainStyle>
      <Container>{children}</Container>
    </MainStyle>
  );
};
