import * as React from 'react';
import ImageDiv from "../components/imageDiv";
import CardCollectionComponent from "./cardCollectionComponent";
import TitleComponent from "./titleComponent";
import TwoSectionWritingComponent from "./twoSectionWritingComponent";
import Dog1 from "../images/dogImage1.jpg";

export default function DogsComponent(props){
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
                fontSize="32px"
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
                fontSize="32px"
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
                    title={props.title}
                    message={props.message}
                    color="white"
                    />
                <TitleComponent 
                display="flex"
                direction="column"
                justify="flex-start"
                align="flex-start"
                marginTop="50px"
                marginLeft="35px"
                titleSize="48px"
                title={props.sectionTitle}
                barBackgroundColor="rgba(220,1,1,1)"
                barHeight="7px"
                barWidth="200px"
                color="white"
                />
                <CardCollectionComponent 
                cards={props.cards}
                height="350px"
                width="250px"
                imgHeight="250px"
                imgWidth="250px"
                fontSize="32px"
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
                    title={props.title}
                    message={props.message}
                    color="white"
                    />
                <TitleComponent 
                display="flex"
                direction="column"
                justify="flex-start"
                align="flex-start"
                marginTop="50px"
                marginLeft="35px"
                titleSize="48px"
                title={props.sectionTitle}
                barBackgroundColor="rgba(220,1,1,1)"
                barHeight="7px"
                barWidth="200px"
                color="white"
                />
                <CardCollectionComponent 
                cards={props.cards}
                height="350px"
                width="250px"
                imgHeight="250px"
                imgWidth="250px"
                fontSize="32px"
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
                    left="50px" 
                    titleSize="36px"
                    messageSize="14px"
                    title={props.title}
                    message={props.message}
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
                title={props.sectionTitle}
                barBackgroundColor="rgba(220,1,1,1)"
                barHeight="7px"
                barWidth="200px"
                color="white"
                />
                <CardCollectionComponent 
                cards={props.cards}
                height="350px"
                width="250px"
                imgHeight="250px"
                imgWidth="250px"
                fontSize="32px"
                />
            </div>
        );
    }
}