import styled from "styled-components";
import {
  CardImageBig,
  CardInfoWrapper,
  CardTitle,
  CardDescription,
  CardStatus,
  CardInfo,
  CardText,
  getStatusColor,
} from "../UI/card/Card";

import { Container } from "../Container/Container";

import closeIcon from "../../resources/icons/close.svg";

export const Modal = ({ setModalActive, modalData }) => {
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

  return (
    <ModalStyle onClick={() => setModalActive(false)}>
      <Container>
        <ModalClose onClick={() => setModalActive(false)} />
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CardImageBig src={image} />
          <CardInfoWrapper>
            <div>
              <CardTitle>{name}</CardTitle>
              <CardDescription>
                <CardStatus $status={getStatusColor(status)} />
                {status} – {species}
              </CardDescription>
            </div>
            <div>
              <CardInfo>Species:</CardInfo>
              <CardText>{species}</CardText>
            </div>
            <div>
              <CardInfo>Type:</CardInfo>
              <CardText>{type ? type : "Unknown"}</CardText>
            </div>
            <div>
              <CardInfo>Gender:</CardInfo>
              <CardText>{gender}</CardText>
            </div>
            <div>
              <CardInfo>Last known location:</CardInfo>
              <CardText>{lastLocation}</CardText>
            </div>
            <div>
              <CardInfo>First seen in:</CardInfo>
              <CardText>{firstSeen}</CardText>
            </div>
          </CardInfoWrapper>
        </ModalContent>
      </Container>
    </ModalStyle>
  );
};

const ModalStyle = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: rgba(39, 43, 51, 0.8);
  backdrop-filter: blur(5px);
  overflow: auto;

  @media (max-width: 576px) {
    align-items: start;
  }
`;

const ModalClose = styled.button`
  width: 40px;
  height: 40px;
  background-image: url(${closeIcon});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: auto 40px;
  border: none;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
  }
`;

const ModalContent = styled.div`
  max-width: 100%;
  width: 630px;
  height: fit-content;
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
