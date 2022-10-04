import ImageDiv from "../components/imageDiv";
import QACollectionComponent from "./qACollectionComponent";
import TwoSectionWritingComponent from "./twoSectionWritingComponent";

export default function FaqComponent(props){

    return(
        <div>
            <ImageDiv height="700px" width="100%" src="https://www.thesprucepets.com/thmb/Aw_HvXl6Mv1riW8pm1NFTIYuUvo=/2122x1412/filters:no_upscale():max_bytes(150000):strip_icc()/AmericanPitBullTerrierTaraGregg500px-45c53270504940f394d7d4eb8da2c313.jpg" name="dogImage" />
            <TwoSectionWritingComponent
                position="absolute" 
                top="500px" 
                left="50px" 
                titleSize="72px"
                messageSize="20px"
                title="Frequently Asked Questions"
                message="Message about your studs"
                />
                <QACollectionComponent 
                questions={props.questions}
                />
        </div>
    );
}