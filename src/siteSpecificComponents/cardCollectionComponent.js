import ImgCard from '../components/imgCard';

export default function CardCollectionComponent(props){
    let Cards = props.cards;

    return(
        <div className="cardCollection">
            {Cards.map(cards => (
              <ImgCard
              height={props.height}
              width={props.width}
              message={cards[0]}
              src={cards[1]}
              alt="dogImg"
              imgHeight={props.imgHeight}
              imgWidth={props.imgWidth}
              fontSize={props.fontSize}
              textAlign="center"
              color="white"
              />
            ))}
        </div>
    );
}