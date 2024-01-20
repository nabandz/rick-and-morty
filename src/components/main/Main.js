import styled from "styled-components";

import { Container } from "../container/Container";

const MainEl = styled.main`
  padding-bottom: 3.375rem;
`;

export const Main = ({ children }) => {
  return (
    <MainEl>
      <Container>{children}</Container>
    </MainEl>
  );
};
