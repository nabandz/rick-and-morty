import styled from "styled-components";

import { Container } from "./Container";

import logoImg from "../resources/img/logo.svg";

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Logo>
          <img src={logoImg} alt={`Rick and Morty logo`} />
        </Logo>
      </Container>
    </HeaderEl>
  );
};

const HeaderEl = styled.header`
  padding: 3.375rem 0rem;
`;

const Logo = styled.a.attrs({
  href: "/",
})`
  width: 250px;

  img {
    display: block;
    width: 100%;
  }
`;
