import styled from "styled-components";

export const Modal = ({ modalActive, setModalActive, modalData }) => {
  const {
    image,
    name,
    status,
    species,
    gender,
    type,
    lastLocation,
    firstSeen,
  } = modalData;
  const getStatusColor = (status = "") => {
    const formatStatus = status.toLowerCase();
    return {
      alive: "var(--color-green)",
      dead: "var(--color-red)",
      unknown: "var(--color-grey)",
    }[formatStatus];
  };

  return (
    <ModalEl onClick={() => setModalActive(false)}>
      <ModalContent>
        <ModalImage src={image} />
        <ModalInfoWrapper>
          <div>
            <ModalTitle>{name}</ModalTitle>
            <ModalDescription>
              <ModalStatus $status={getStatusColor(status)} />
              {status} – {species}
            </ModalDescription>
          </div>
          <div>
            <ModalInfo>Species:</ModalInfo>
            <ModalText>{species}</ModalText>
          </div>
          <div>
            <ModalInfo>Type:</ModalInfo>
            <ModalText>{type ? type : "Unknown"}</ModalText>
          </div>
          <div>
            <ModalInfo>Gender:</ModalInfo>
            <ModalText>{gender}</ModalText>
          </div>
          <div>
            <ModalInfo>Last known location:</ModalInfo>
            <ModalText>{lastLocation}</ModalText>
          </div>
          <div>
            <ModalInfo>First seen in:</ModalInfo>
            <ModalText>{firstSeen}</ModalText>
          </div>
        </ModalInfoWrapper>
      </ModalContent>
    </ModalEl>
  );
};

const ModalEl = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(39, 43, 51, 0.8);
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  width: 630px;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: #3c3e44;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ModalImage = styled.img`
  max-width: 50%;
  object-fit: cover;

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

const ModalInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: var(--color-white);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  overflow-wrap: anywhere;
`;

const ModalStatus = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background-color: ${({ $status }) => $status};
`;

const ModalDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  text-transform: capitalize;
`;

const ModalInfo = styled.p`
  margin: 0;
  color: var(--color-grey);
  font-size: var(--fs-base);
  font-weight: var(--fw-bold);
`;

const ModalText = styled.p`
  margin: 0;
  color: var(--color-white);
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  text-transform: capitalize;
`;
