import BreedingCard from "./breedingCard";


export default function BreedingCardCollectionComponent(props){
    let Cards = props.cards;

    return(
        <div className="cardCollection">
            {Cards.map(cards => (
                <BreedingCard
                display="flex"
                direction1="column"
                direction2="row"
                justify1="flex-start"
                justify2="space-between"
                align1="center"
                align2="center"
                height1="550px"
                height2="425px"
                width1="675px"
                width2="625px"
                backgroundColor="rgba(35,35,35,1)"
                name1={cards[0]}
                src1={cards[1]}
                name2={cards[2]}
                src2={cards[3]}
                date={cards[4]}
                alt="dogImg"
                imgHeight="300px"
                imgWidth="300px"
                fontSize1="24px"
                fontSize2="20px"
                textAlign="center"
                color="white"
                color2="rgba(220,1,1,1)"
                barHeight="1px"
                barWidth="675px"
                barColor="rgba(100,100,100,1)"
                marginTop1="15px"
                marginTop2="45px"
                />
            ))}
        </div>
    );
}