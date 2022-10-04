import ImageDiv from "../components/imageDiv";
import TwoSectionWritingComponent from "./twoSectionWritingComponent";
import BreedingCardCollectionComponent from "./breedingCardCollectionComponent"
import TitleComponent from "./titleComponent";
import Dog1 from "../images/dogImage1.jpg";

export default function BreedingsComponent(props){
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
            />
            <BreedingCardCollectionComponent 
            cards={props.cards}
            />
        </div>
    );
}