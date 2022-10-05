import * as React from 'react';
import BreedingCard from "./breedingCard";


export default function BreedingCardCollectionComponent(props){
    const [width, setWidth] = React.useState(window.innerWidth);
    const updateWidth = () => {
    setWidth(window.innerWidth);
    };
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });
    let Cards = props.cards;

    if((width > 1350)){
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
                    marginBottom="0px"
                    />
                ))}
            </div>
        );
    }else if ((width <= 1350) && (width > 1150)){
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
                    height1="500px"
                    height2="400px"
                    width1="575px"
                    width2="525px"
                    backgroundColor="rgba(35,35,35,1)"
                    name1={cards[0]}
                    src1={cards[1]}
                    name2={cards[2]}
                    src2={cards[3]}
                    date={cards[4]}
                    alt="dogImg"
                    imgHeight="250px"
                    imgWidth="250px"
                    fontSize1="24px"
                    fontSize2="20px"
                    textAlign="center"
                    color="white"
                    color2="rgba(220,1,1,1)"
                    barHeight="1px"
                    barWidth="575px"
                    barColor="rgba(100,100,100,1)"
                    marginTop1="15px"
                    marginTop2="35px"
                    marginBottom="0px"
                    />
                ))}
            </div>
        );
    }else if ((width <= 1150) && (width > 600)){
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
                    height1="500px"
                    height2="400px"
                    width1="575px"
                    width2="525px"
                    backgroundColor="rgba(35,35,35,1)"
                    name1={cards[0]}
                    src1={cards[1]}
                    name2={cards[2]}
                    src2={cards[3]}
                    date={cards[4]}
                    alt="dogImg"
                    imgHeight="250px"
                    imgWidth="250px"
                    fontSize1="24px"
                    fontSize2="20px"
                    textAlign="center"
                    color="white"
                    color2="rgba(220,1,1,1)"
                    barHeight="1px"
                    barWidth="575px"
                    barColor="rgba(100,100,100,1)"
                    marginTop1="15px"
                    marginTop2="35px"
                    marginBottom="25px"
                    />
                ))}
            </div>
        );
    }else if ((width <= 600)){
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
                    height1="375px"
                    height2="300px"
                    width1="450px"
                    width2="425px"
                    backgroundColor="rgba(35,35,35,1)"
                    name1={cards[0]}
                    src1={cards[1]}
                    name2={cards[2]}
                    src2={cards[3]}
                    date={cards[4]}
                    alt="dogImg"
                    imgHeight="200px"
                    imgWidth="200px"
                    fontSize1="20px"
                    fontSize2="16px"
                    textAlign="center"
                    color="white"
                    color2="rgba(220,1,1,1)"
                    barHeight="1px"
                    barWidth="450px"
                    barColor="rgba(100,100,100,1)"
                    marginTop1="15px"
                    marginTop2="25px"
                    marginBottom="25px"
                    />
                ))}
            </div>
        );
    }
}