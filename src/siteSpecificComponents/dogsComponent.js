import ImageDiv from "../components/imageDiv";
import CardCollectionComponent from "./cardCollectionComponent";
import TitleComponent from "./titleComponent";
import TwoSectionWritingComponent from "./twoSectionWritingComponent";
import Dog1 from "../images/dogImage1.jpg";

export default function DogsComponent(props){
    return(
        <div>
            <ImageDiv height="700px" width="100%" src={Dog1} name="dogImage" />
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