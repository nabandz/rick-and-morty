import styled from "styled-components";

import loadIcon from "../../resources/icons/loader.svg";

export const CharacterList = ({ nextPage, loadNextPage, children }) => {
  return (
    <ListStyle>
      <ListContainer>{children}</ListContainer>
      {nextPage && <LoadButton onClick={loadNextPage}>Load more</LoadButton>}
    </ListStyle>
  );
};

const ListStyle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(376px, 1fr));
  grid-auto-rows: 1fr;
  gap: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const LoadButton = styled.button`
  width: fit-content;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--color-block);
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  border: none;
  background-image: url(${loadIcon});
  background-position: right 0.5rem top 50%;
  background-repeat: no-repeat;
  background-size: 21px auto;
  padding-right: 2rem;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    background-color: var(--color-hover);
    box-shadow: var(--box-shadow);
  }
`;
