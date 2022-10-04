import ImageDiv from "../components/imageDiv";
import CardCollectionComponent from "./cardCollectionComponent";
import TitleComponent from "./titleComponent";
import TwoSectionWritingComponent from "./twoSectionWritingComponent";

export default function DogsComponent(props){
    return(
        <div>
            <ImageDiv height="700px" width="100%" src="https://www.thesprucepets.com/thmb/Aw_HvXl6Mv1riW8pm1NFTIYuUvo=/2122x1412/filters:no_upscale():max_bytes(150000):strip_icc()/AmericanPitBullTerrierTaraGregg500px-45c53270504940f394d7d4eb8da2c313.jpg" name="dogImage" />
            <TwoSectionWritingComponent
                position="absolute"
                top="500px" 
                left="50px" 
                titleSize="72px"
                messageSize="20px"
                title={props.title}
                message={props.message}
                color="white"
                />
            <TitleComponent 
            display="flex"
            direction="column"
            justify="flex-start"
            align="flex-start"
            marginTop="75px"
            marginLeft="50px"
            titleSize="48px"
            title={props.sectionTitle}
            barBackgroundColor="rgba(220,1,1,1)"
            barHeight="7px"
            barWidth="200px"
            color="white"
            />
            <CardCollectionComponent 
            cards={props.cards}
            height="400px"
            width="300px"
            imgHeight="300px"
            imgWidth="300px"
            />
        </div>
    );
}