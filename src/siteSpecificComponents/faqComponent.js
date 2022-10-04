import ImageDiv from "../components/imageDiv";
import QACollectionComponent from "./qACollectionComponent";
import TwoSectionWritingComponent from "./twoSectionWritingComponent";
import Dog1 from "../images/dogImage1.jpg";

export default function FaqComponent(props){

    return(
        <div>
            <ImageDiv height="700px" width="100%" src={Dog1} name="dogImage" />
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