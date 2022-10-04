import * as React from 'react';
import LeftTriangle from "./leftTriangle";
import ReviewCard from "./reviewCard";
import RightTriangle from "./rightTriangle";

export default function ReviewCollection(props){
    let review = props.review;
    let reviewLength =  review.length;

    let [card1, changeCard1] = React.useState(reviewLength - 1);
    let [card2, changeCard2] = React.useState(0);
    let [card3, changeCard3] = React.useState(1);

    function left(card1,card2,card3){
        (card1 > 0) ? changeCard1((card1 - 1)):changeCard1(reviewLength - 1);
        (card2 > 0) ? changeCard2((card2 - 1)):changeCard2(reviewLength - 1);
        (card3 > 0) ? changeCard3((card3 - 1)):changeCard3(reviewLength - 1);
    }

    function right(card1,card2,card3){
        (card1 < reviewLength - 1) ? changeCard1((card1 + 1)):changeCard1(0);
        (card2 < reviewLength - 1) ? changeCard2((card2 + 1)):changeCard2(0);
        (card3 < reviewLength - 1) ? changeCard3((card3 + 1)):changeCard3(0);
    }
    return(
        <div className='review' >
            <ReviewCard 
            display="flex"
            direction="column"
            justify="flex-start"
            align="center"
            backgroundColor="rgba(35,35,35,1)"
            minHeight="300px"
            minWidth="700px"
            marginLeft="0px"
            marginRight="0px"
            marginCardTop="150px"
            titleSize="24px"
            messageSize="16px"
            nameSize="18px"
            titleWeight="bold"
            titleColor="rgba(250,1,1,1)"
            color="white"
            title={review[card1][0]}
            message={review[card1][1]}
            innerWidth="600px"
            textAlign="center"
            marginTop="15px"
            marginBottom="25px"
            name={review[card1][2]}
            />
            <LeftTriangle
            display="flex"
            direction="column"
            justify="center"
            align="center"
            height="100%"
            minWidth="80px"
            leftFunc={left}
            card1={card1}
            card2={card2}
            card3={card3}
            src="https://i.ytimg.com/vi/Xq1T4sd4GdY/maxresdefault.jpg"
            alt="left triangle"
            imgHeight="30px"
            imgWidth="30px"
            rotate="-90deg"
            />
            <ReviewCard 
            display="flex"
            direction="column"
            justify="flex-start"
            align="center"
            backgroundColor="rgba(35,35,35,1)"
            minHeight="300px"
            minWidth="700px"
            marginLeft="0px"
            marginRight="0px"
            marginCardTop="150px"
            titleSize="24px"
            messageSize="16px"
            nameSize="18px"
            titleWeight="bold"
            titleColor="rgba(250,1,1,1)"
            color="white"
            title={review[card2][0]}
            message={review[card2][1]}
            innerWidth="600px"
            textAlign="center"
            marginTop="15px"
            marginBottom="25px"
            name={review[card2][2]}
            />
            <RightTriangle
            display="flex"
            direction="column"
            justify="center"
            align="center"
            height="100%"
            minWidth="80px"
            right={right}
            card1={card1}
            card2={card2}
            card3={card3}
            src="https://i.ytimg.com/vi/Xq1T4sd4GdY/maxresdefault.jpg"
            alt="right triangle"
            imgHeight="30px"
            imgWidth="30px"
            rotate="90deg" 
            />
            <ReviewCard 
            display="flex"
            direction="column"
            justify="flex-start"
            align="center"
            backgroundColor="rgba(35,35,35,1)"
            minHeight="300px"
            minWidth="700px"
            marginLeft="0px"
            marginRight="25px"
            marginCardTop="150px"
            titleSize="24px"
            messageSize="16px"
            nameSize="18px"
            titleWeight="bold"
            titleColor="rgba(250,1,1,1)"
            color="white"
            title={review[card3][0]}
            message={review[card3][1]}
            innerWidth="600px"
            textAlign="center"
            marginTop="15px"
            marginBottom="25px"
            name={review[card3][2]}
            />
        </div>
    );
}