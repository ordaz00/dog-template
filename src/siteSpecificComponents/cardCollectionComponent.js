import ImgCard from '../components/imgCard';

export default function CardCollectionComponent(props){
    let Cards = props.cards;

    return(
        <div className="cardCollection">
            {Cards.map(cards => (
              <ImgCard
              height="350px"
              width="300px"
              message={cards[0]}
              src={cards[1]}
              alt="dogImg"
              imgHeight="300px"
              imgWidth="300px"
              fontSize="32px"
              textAlign="center"
              />
            ))}
        </div>
    );
}