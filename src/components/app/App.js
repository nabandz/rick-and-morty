import { useState, useEffect } from "react";
import styled from "styled-components";

import useRickAndMortyServices from "../../services/RickAndMortyServices";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Controls } from "../controls/Controls";
import { List } from "../list/List";
import { Card } from "../card/Card";
import { Spinner } from "../spinner/Spinner";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { Modal } from "../modal/Modal";

import bgImg from "../../resources/img/bg-image.png";

function App() {
  const {
    initial,
    data,
    isLoading,
    nextPage,
    error,
    loadNextPage,
    filterData,
    defaultData,
    clearError,
  } = useRickAndMortyServices();

  const [filterList, setFilterList] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState([]);

  const handleSearch = async (search, filter, filterSearch) => {
    let newFilters = [];

    if (search) {
      newFilters.push(["name", search]);
      setFilterList(newFilters);
    }

    if (filter.length > 0) {
      newFilters.push(...filter);
      setFilterList(newFilters);
    }

    if (filterSearch.length > 0) {
      newFilters.push(...filterSearch);
      setFilterList(newFilters);
    }

    if (newFilters.length === 0 && !initial) {
      clearError();
      defaultData();
    }
  };

  const openModal = (value) => {
    setModalActive(true);
    setModalData(value);
  };

  useEffect(() => {
    defaultData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (filterList.length !== 0) {
      clearError();
      filterData(filterList);
    }
    // eslint-disable-next-line
  }, [filterList]);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = isLoading && data.length === 0 ? <Spinner /> : null;

  return (
    <Wrapper>
      <Header />
      <Main>
        <Controls handleSearch={handleSearch} />
        {errorMessage}
        {spinner}
        <List nextPage={nextPage} loadNextPage={loadNextPage}>
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
          <Modal setModalActive={setModalActive} modalData={modalData} />
        )}
      </Main>
      <BackgroundImage />
    </Wrapper>
  );
}

export default App;

const BackgroundImage = styled.img.attrs({
  src: bgImg,
})`
  position: absolute;
  bottom: 0;
  right: 16vw;
  z-index: -1;

  @media (max-width: 576px) {
    right: 0;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;
