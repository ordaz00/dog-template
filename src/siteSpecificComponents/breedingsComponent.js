import * as React from 'react';
import ImageDiv from "../components/imageDiv";
import TwoSectionWritingComponent from "./twoSectionWritingComponent";
import BreedingCardCollectionComponent from "./breedingCardCollectionComponent"
import TitleComponent from "./titleComponent";
import Dog1 from "../images/dogImage1.jpg";

export default function BreedingsComponent(props){
    const [width, setWidth] = React.useState(window.innerWidth);
    const updateWidth = () => {
    setWidth(window.innerWidth);
    };
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });
    
    if((width > 920)){
        return(
            <div>
                <ImageDiv height="700px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                position="absolute" 
                top="500px" 
                left="50px" 
                titleSize="72px"
                messageSize="20px"
                title="Upcoming Breedings"
                message="Message About Your Breedings"
                color="white"
                />
                <TitleComponent 
                display="flex"
                direction="column"
                justify="flex-start"
                align="center"
                marginTop="75px"
                marginLeft="50px"
                titleSize="48px"
                title="UPCOMING BREEDINGS"
                barBackgroundColor="rgba(220,1,1,1)"
                barHeight="7px"
                barWidth="325px"
                color="white"
                />
                <BreedingCardCollectionComponent 
                cards={props.cards}
                />
            </div>
        );
    }else if ((width <= 920) && (width > 800)){
        return(
            <div>
                <ImageDiv height="700px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                position="absolute" 
                top="475px" 
                left="50px" 
                titleSize="60px"
                messageSize="18px"
                title="Upcoming Breedings"
                message="Message About Your Breedings"
                color="white"
                />
                <TitleComponent 
                display="flex"
                direction="column"
                justify="flex-start"
                align="center"
                marginTop="75px"
                marginLeft="50px"
                titleSize="48px"
                title="UPCOMING BREEDINGS"
                barBackgroundColor="rgba(220,1,1,1)"
                barHeight="7px"
                barWidth="325px"
                color="white"
                />
                <BreedingCardCollectionComponent 
                cards={props.cards}
                />
            </div>
        );
    }else if ((width <= 800) && (width > 775)){
        return(
            <div>
                <ImageDiv height="400px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                position="absolute" 
                top="300px" 
                left="50px" 
                titleSize="48px"
                messageSize="16px"
                title="Upcoming Breedings"
                message="Message About Your Breedings"
                color="white"
                />
                <TitleComponent 
                display="flex"
                direction="column"
                justify="flex-start"
                align="center"
                marginTop="50px"
                marginLeft="0px"
                titleSize="40px"
                title="UPCOMING BREEDINGS"
                barBackgroundColor="rgba(220,1,1,1)"
                barHeight="7px"
                barWidth="300px"
                color="white"
                />
                <BreedingCardCollectionComponent 
                cards={props.cards}
                />
            </div>
        );
    }else if ((width <= 775) && (width > 650)){
        return(
            <div>
                <ImageDiv height="400px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                position="absolute" 
                top="275px" 
                left="50px" 
                titleSize="48px"
                messageSize="16px"
                title="Upcoming Breedings"
                message="Message About Your Breedings"
                color="white"
                />
                <TitleComponent 
                display="flex"
                direction="column"
                justify="flex-start"
                align="center"
                marginTop="50px"
                marginLeft="0px"
                titleSize="40px"
                title="UPCOMING BREEDINGS"
                barBackgroundColor="rgba(220,1,1,1)"
                barHeight="7px"
                barWidth="300px"
                color="white"
                />
                <BreedingCardCollectionComponent 
                cards={props.cards}
                />
            </div>
        );
    }else if ((width <= 650)){
        return(
            <div>
                <ImageDiv height="400px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                position="absolute" 
                top="275px" 
                left="25px" 
                titleSize="30px"
                messageSize="12px"
                title="Upcoming Breedings"
                message="Message About Your Breedings"
                color="white"
                />
                <TitleComponent 
                display="flex"
                direction="column"
                justify="flex-start"
                align="center"
                marginTop="30px"
                marginLeft="0px"
                titleSize="36px"
                title="UPCOMING BREEDINGS"
                barBackgroundColor="rgba(220,1,1,1)"
                barHeight="7px"
                barWidth="250px"
                color="white"
                />
                <BreedingCardCollectionComponent 
                cards={props.cards}
                />
            </div>
        );
    }
}