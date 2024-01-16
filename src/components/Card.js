import styled from "styled-components";

const CardEl = styled.article`
  display: flex;
  border-radius: 0.5rem;
  background-color: var(--color-block);
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    background-color: var(--color-hover);
    box-shadow: var(--box-shadow);
  }
`;

const CardImage = styled.img`
  max-width: 152px;
  object-fit: cover;
`;

const CardInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  margin: 0;
  color: var(--color-white);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  overflow-wrap: anywhere;
`;

const CardStatus = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background-color: var(--color-green);
`;

const CardDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
`;

const CardInfo = styled.p`
  margin: 0;
  color: var(--color-grey);
  font-size: var(--fs-base);
  font-weight: var(--fw-bold);
`;

const CardText = styled.p`
  margin: 0;
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
`;

export const Card = () => {
  return (
    <CardEl>
      <CardImage />
      <CardInfoWrapper>
        <div>
          <CardTitle>Title</CardTitle>
          <CardDescription>
            <CardStatus />
            Description
          </CardDescription>
        </div>
        <div>
          <CardInfo>Type</CardInfo>
          <CardText>Text</CardText>
        </div>
      </CardInfoWrapper>
    </CardEl>
  );
};
