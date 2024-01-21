import styled from "styled-components";

import { Container } from "../Container/Container";

import logoImg from "../../resources/img/logo.svg";

export const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <Logo>
          <img src={logoImg} alt={`Rick and Morty logo`} />
        </Logo>
      </Container>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  padding: 3.375rem 0rem;
`;

const Logo = styled.a.attrs({
  href: "/rick-and-morty/",
})`
  width: 250px;
  img {
    display: block;
    width: 100%;
  }
`;
