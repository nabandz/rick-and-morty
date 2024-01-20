import styled from "styled-components";

export const Container = ({ children }) => {
  return <ContainerEl>{children}</ContainerEl>;
};

export const ContainerEl = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0rem 1rem;
  max-width: calc(1160px + 2rem);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
`;
