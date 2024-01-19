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
import { Modal } from "./Modal";

import bgImg from "../resources/img/bg-image.png";

function App() {
  const {
    initial,
    data,
    isLoading,
    error,
    loadNextPage,
    filterData,
    defaultData,
  } = useRickAndMortyServices();

  const [filterList, setFilterList] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleSearch = async (search, filter) => {
    let newFilters = [];

    if (search) {
      newFilters.push(["name", search]);
      setFilterList(newFilters);
    }

    if (filter.length > 0) {
      newFilters.push(...filter);
      setFilterList(newFilters);
    }

    if (newFilters.length === 0 && !initial) {
      defaultData();
    }
  };

  useEffect(() => {
    defaultData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (filterList.length !== 0) {
      filterData(filterList);
    }
    // eslint-disable-next-line
  }, [filterList]);

  const openModal = (value) => {
    setModalActive(true);
    setModalData(value);
    console.log(value);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = isLoading && data.length === 0 ? <Spinner /> : null;

  return (
    <>
      <Header />
      <Main>
        <Controls handleSearch={handleSearch} />
        {errorMessage}
        {spinner}
        <List loadNextPage={loadNextPage}>
          {data.map((char) => {
            let charInfo = {
              image: char.image,
              gender: char.gender,
              name: char.name,
              species: char.species,
              status: char.status,
              type: char.type,
              lastLocation: char.location.name,
              firstSeen: char.origin.name,
            };
            return <Card key={char.id} data={charInfo} openModal={openModal} />;
          })}
        </List>
        {modalActive && (
          <Modal
            modalActive={modalActive}
            setModalActive={setModalActive}
            modalData={modalData}
          />
        )}
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
