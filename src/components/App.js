import styled from "styled-components";

import { Header } from "./Header";
import { Main } from "./Main";
import { Controls } from "./Controls";
import { List } from "./List";

import bgImg from "../resources/img/bg-image.png";

const BackgroundImage = styled.img.attrs({
  src: bgImg,
})`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <Controls />
        <List />
      </Main>
      <BackgroundImage />
    </>
  );
}

export default App;
