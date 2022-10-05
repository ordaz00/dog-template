import * as React from 'react';
import LeftTriangle from "./leftTriangle";
import ReviewCard from "./reviewCard";
import RightTriangle from "./rightTriangle";
import Left from "../images/leftTriangle.jpg"
import Right from "../images/rightTriangle.jpg"

export default function ReviewCollection(props){
    const [width, setWidth] = React.useState(window.innerWidth);
    const updateWidth = () => {
    setWidth(window.innerWidth);
    };
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

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

    if(width > 850){
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
                <div id='middle'>
                    <LeftTriangle
                    display="flex"
                    direction="column"
                    justify="center"
                    align="center"
                    height="300px"
                    minWidth="80px"
                    leftFunc={left}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Left}
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
                    marginCardTop="0px"
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
                    height="300px"
                    minWidth="80px"
                    right={right}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Right}
                    alt="right triangle"
                    imgHeight="30px"
                    imgWidth="30px"
                    rotate="90deg" 
                    />
                </div>
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
    }else if ((width <= 850) && (width > 800)){
        return(
            <div className='review' >
                <div id='middle'>
                    <LeftTriangle
                    display="flex"
                    direction="column"
                    justify="center"
                    align="flex-start"
                    height="300px"
                    minWidth="50px"
                    leftFunc={left}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Left}
                    alt="left triangle"
                    imgHeight="30px"
                    imgWidth="30px"
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
                    marginCardTop="0px"
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
                    align="flex-end"
                    height="300px"
                    minWidth="50px"
                    right={right}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Right}
                    alt="right triangle"
                    imgHeight="30px"
                    imgWidth="30px" 
                    />
                </div>
            </div>
        );
    }else if ((width <= 800) && (width > 750)){
        return(
            <div className='review' >
                <div id='middle'>
                    <LeftTriangle
                    display="flex"
                    direction="column"
                    justify="center"
                    align="flex-start"
                    height="300px"
                    minWidth="50px"
                    leftFunc={left}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Left}
                    alt="left triangle"
                    imgHeight="30px"
                    imgWidth="30px"
                    />
                    <ReviewCard 
                    display="flex"
                    direction="column"
                    justify="flex-start"
                    align="center"
                    backgroundColor="rgba(35,35,35,1)"
                    minHeight="300px"
                    minWidth="650px"
                    marginLeft="0px"
                    marginRight="0px"
                    marginCardTop="0px"
                    titleSize="22px"
                    messageSize="14px"
                    nameSize="16px"
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
                    align="flex-end"
                    height="300px"
                    minWidth="50px"
                    right={right}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Right}
                    alt="right triangle"
                    imgHeight="30px"
                    imgWidth="30px" 
                    />
                </div>
            </div>
        );
    }
    else if ((width <= 750) && (width > 650)){
        return(
            <div className='review' >
                <div id='middle'>
                    <LeftTriangle
                    display="flex"
                    direction="column"
                    justify="center"
                    align="flex-start"
                    height="250px"
                    minWidth="50px"
                    leftFunc={left}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Left}
                    alt="left triangle"
                    imgHeight="30px"
                    imgWidth="30px"
                    />
                    <ReviewCard 
                    display="flex"
                    direction="column"
                    justify="flex-start"
                    align="center"
                    backgroundColor="rgba(35,35,35,1)"
                    minHeight="250px"
                    minWidth="550px"
                    marginLeft="0px"
                    marginRight="0px"
                    marginCardTop="0px"
                    titleSize="18px"
                    messageSize="10px"
                    nameSize="12px"
                    titleWeight="bold"
                    titleColor="rgba(250,1,1,1)"
                    color="white"
                    title={review[card2][0]}
                    message={review[card2][1]}
                    innerWidth="500px"
                    textAlign="center"
                    marginTop="15px"
                    marginBottom="25px"
                    name={review[card2][2]}
                    />
                    <RightTriangle
                    display="flex"
                    direction="column"
                    justify="center"
                    align="flex-end"
                    height="250px"
                    minWidth="50px"
                    right={right}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Right}
                    alt="right triangle"
                    imgHeight="30px"
                    imgWidth="30px" 
                    />
                </div>
            </div>
        );
    }else if ((width <= 650) && (width > 550)){
        return(
            <div className='review' >
                <div id='middle'>
                    <LeftTriangle
                    display="flex"
                    direction="column"
                    justify="center"
                    align="flex-start"
                    height="225px"
                    minWidth="35px"
                    leftFunc={left}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Left}
                    alt="left triangle"
                    imgHeight="20px"
                    imgWidth="20px"
                    />
                    <ReviewCard 
                    display="flex"
                    direction="column"
                    justify="flex-start"
                    align="center"
                    backgroundColor="rgba(35,35,35,1)"
                    minHeight="225px"
                    minWidth="450px"
                    marginLeft="0px"
                    marginRight="0px"
                    marginCardTop="0px"
                    titleSize="16px"
                    messageSize="8px"
                    nameSize="10px"
                    titleWeight="bold"
                    titleColor="rgba(250,1,1,1)"
                    color="white"
                    title={review[card2][0]}
                    message={review[card2][1]}
                    innerWidth="400px"
                    textAlign="center"
                    marginTop="15px"
                    marginBottom="25px"
                    name={review[card2][2]}
                    />
                    <RightTriangle
                    display="flex"
                    direction="column"
                    justify="center"
                    align="flex-end"
                    height="225px"
                    minWidth="35px"
                    right={right}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Right}
                    alt="right triangle"
                    imgHeight="20px"
                    imgWidth="20px" 
                    />
                </div>
            </div>
        );
    }else if ((width <= 550)){
        return(
            <div className='review' >
                <div id='middle'>
                    <LeftTriangle
                    display="flex"
                    direction="column"
                    justify="center"
                    align="flex-start"
                    height="200px"
                    minWidth="35px"
                    leftFunc={left}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Left}
                    alt="left triangle"
                    imgHeight="20px"
                    imgWidth="20px"
                    />
                    <ReviewCard 
                    display="flex"
                    direction="column"
                    justify="flex-start"
                    align="center"
                    backgroundColor="rgba(35,35,35,1)"
                    minHeight="200px"
                    minWidth="350px"
                    marginLeft="0px"
                    marginRight="0px"
                    marginCardTop="0px"
                    titleSize="14px"
                    messageSize="6px"
                    nameSize="8px"
                    titleWeight="bold"
                    titleColor="rgba(250,1,1,1)"
                    color="white"
                    title={review[card2][0]}
                    message={review[card2][1]}
                    innerWidth="300px"
                    textAlign="center"
                    marginTop="15px"
                    marginBottom="25px"
                    name={review[card2][2]}
                    />
                    <RightTriangle
                    display="flex"
                    direction="column"
                    justify="center"
                    align="flex-end"
                    height="200px"
                    minWidth="35px"
                    right={right}
                    card1={card1}
                    card2={card2}
                    card3={card3}
                    src={Right}
                    alt="right triangle"
                    imgHeight="20px"
                    imgWidth="20px" 
                    />
                </div>
            </div>
        );
    }
}