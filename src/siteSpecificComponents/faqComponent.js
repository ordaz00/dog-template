import * as React from 'react';
import ImageDiv from "../components/imageDiv";
import QACollectionComponent from "./qACollectionComponent";
import TwoSectionWritingComponent from "./twoSectionWritingComponent";
import Dog1 from "../images/dogImage1.jpg";

export default function FaqComponent(props){
    const [width, setWidth] = React.useState(window.innerWidth);
    const updateWidth = () => {
    setWidth(window.innerWidth);
    };
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });
    
    if((width > 1100)){
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
    }else if((width <= 1100) && (width > 925)){
        return(
            <div>
                <ImageDiv height="700px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                    position="absolute" 
                    top="500px" 
                    left="50px" 
                    titleSize="60px"
                    messageSize="18px"
                    title="Frequently Asked Questions"
                    message="Message about your studs"
                    />
                    <QACollectionComponent 
                    questions={props.questions}
                    />
            </div>
        ); 
    }else if((width <= 925) && (width > 800)){
        return(
            <div>
                <ImageDiv height="700px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                    position="absolute" 
                    top="450px" 
                    left="50px" 
                    titleSize="56px"
                    messageSize="18px"
                    title="Frequently Asked Questions"
                    message="Message about your studs"
                    />
                    <QACollectionComponent 
                    questions={props.questions}
                    />
            </div>
        ); 
    }else if((width <= 800) && (width > 775)){
        return(
            <div>
                <ImageDiv height="400px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                    position="absolute" 
                    top="300px" 
                    left="50px" 
                    titleSize="40px"
                    messageSize="16px"
                    title="Frequently Asked Questions"
                    message="Message about your studs"
                    />
                    <QACollectionComponent 
                    questions={props.questions}
                    />
            </div>
        ); 
    }else if((width <= 775) && (width > 650)){
        return(
            <div>
                <ImageDiv height="400px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                    position="absolute" 
                    top="275px" 
                    left="50px" 
                    titleSize="40px"
                    messageSize="16px"
                    title="Frequently Asked Questions"
                    message="Message about your studs"
                    />
                    <QACollectionComponent 
                    questions={props.questions}
                    />
            </div>
        ); 
    }else if((width <= 650)){
        return(
            <div>
                <ImageDiv height="400px" width="100%" src={Dog1} name="dogImage" />
                <TwoSectionWritingComponent
                    position="absolute" 
                    top="275px" 
                    left="50px" 
                    titleSize="28px"
                    messageSize="10px"
                    title="Frequently Asked Questions"
                    message="Message about your studs"
                    />
                    <QACollectionComponent 
                    questions={props.questions}
                    />
            </div>
        );
    }
}