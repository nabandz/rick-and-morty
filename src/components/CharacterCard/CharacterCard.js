import {
  CardStyle,
  CardImage,
  CardInfoWrapper,
  CardTitle,
  CardDescription,
  CardStatus,
  CardInfo,
  CardText,
  getStatusColor,
} from "../UI/card/Card";

export const CharacterCard = ({ data, openModal }) => {
  const { image, gender, name, species, status } = data;

  return (
    <CardStyle onClick={() => openModal(data)}>
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
    </CardStyle>
  );
};
