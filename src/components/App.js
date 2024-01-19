import { useState, useEffect } from "react";
import styled from "styled-components";

import useRickAndMortyServices from "../services/RickAndMortyServices";
import { Header } from "./Header";
import { Main } from "./Main";
import { Controls } from "./Controls";
import { List } from "./List";
import { Card } from "./Card";
import { Spinner } from "./Spinner";
import { ErrorMessage } from "./ErrorMessage";

import bgImg from "../resources/img/bg-image.png";

function App() {
  const { data, isLoading, error, loadNextPage, filterData } =
    useRickAndMortyServices();

  const [filterList, setFilterList] = useState([]);

  const handleSearch = async (search, filter) => {
    let newFilters = [];

    if (search) {
      newFilters.push(["name", search]);
      setFilterList(newFilters);
    }
    if (filter) {
      newFilters.push(...filter);
      setFilterList(newFilters);
    }
  };

  useEffect(() => {
    if (filterList.length !== 0) {
      filterData(filterList);
    }
    // eslint-disable-next-line
  }, [filterList]);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;

  return (
    <>
      <Header />
      <Main>
        <Controls handleSearch={handleSearch} />
        <List loadNextPage={loadNextPage}>
          {errorMessage}
          {spinner}
          {data.map((char) => {
            let charInfo = {
              image: char.image,
              gender: char.gender,
              name: char.name,
              species: char.species,
              status: char.status,
            };
            return <Card key={char.id} {...charInfo} />;
          })}
        </List>
      </Main>
      <BackgroundImage />
    </>
  );
}

export default App;

const BackgroundImage = styled.img.attrs({
  src: bgImg,
})`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;
