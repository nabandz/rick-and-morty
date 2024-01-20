import styled from "styled-components";

export const Card = ({ data, openModal }) => {
  let { image, gender, name, species, status } = data;

  const getStatusColor = (status = "") => {
    const formatStatus = status.toLowerCase();
    return {
      alive: "var(--color-green)",
      dead: "var(--color-red)",
      unknown: "var(--color-grey)",
    }[formatStatus];
  };

  return (
    <CardEl onClick={() => openModal(data)}>
      <CardImage src={image} />
      <CardInfoWrapper>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            <CardStatus $status={getStatusColor(status)} />
            {status} – {species}
          </CardDescription>
        </div>
        <div>
          <CardInfo>Gender:</CardInfo>
          <CardText>{gender}</CardText>
        </div>
      </CardInfoWrapper>
    </CardEl>
  );
};

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
  min-width: 9px;
  height: 9px;
  border-radius: 100%;
  background-color: ${({ $status }) => $status};
`;

const CardDescription = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  text-transform: capitalize;
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
