import styled from "styled-components";

import { Container } from "./Container";

const MainEl = styled.main``;

export const Main = ({ children }) => {
  return (
    <MainEl>
      <Container>{children}</Container>
    </MainEl>
  );
};
