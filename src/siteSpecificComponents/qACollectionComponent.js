import * as React from 'react';
import QAComponent from "./qAComponent";


export default function QACollectionComponent(props){
    const [width, setWidth] = React.useState(window.innerWidth);
    const updateWidth = () => {
    setWidth(window.innerWidth);
    };
    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    let Questions = props.questions;
    
    if((width > 850)){
        return(
            <div id="faq">
                {Questions.map(questions => (
                    <QAComponent
                    position="relative"
                    top="0px"
                    left="-27px"
                    display="flex"
                    direction1="column"
                    direction2="row"
                    justify1="center"
                    justify2="space-between"
                    align1="center"
                    align2="center"
                    height1="100px"
                    height2="50px"
                    height3="4px"
                    height4="201px"
                    width1="800px"
                    width2="780px"
                    width3="50px"
                    width4="800px"
                    width5="54px"
                    backgroundColor1="rgba(35,35,35,1)"
                    backgroundColor2="rgba(220,1,1,1)"
                    backgroundColor3="rgba(100,100,100,1)"
                    question={questions[0]}
                    answer={questions[1]}
                    fontSize1="24px"
                    fontSize2="16px"
                    textAlign1="center"
                    textAlign2="left"
                    barHeight="1px"
                    barWidth="800px"
                    barColor1="rgba(100,100,100,1)"
                    barColor2="rgba(220,1,1,1)"
                    marginBottom1="7px"
                    marginBottom2="21px"
                    marginTop1="25px"
                    marginTop2="45px"
                    marginTop3="15px"
                    marginLeft="15px"
                    color="white"
                    />
                ))}
            </div>   
        );
    }else if((width <= 850) && (width > 750)){
        return(
            <div id="faq">
                {Questions.map(questions => (
                    <QAComponent
                    position="relative"
                    top="0px"
                    left="-27px"
                    display="flex"
                    direction1="column"
                    direction2="row"
                    justify1="center"
                    justify2="space-between"
                    align1="center"
                    align2="center"
                    height1="100px"
                    height2="50px"
                    height3="4px"
                    height4="201px"
                    width1="700px"
                    width2="680px"
                    width3="50px"
                    width4="700px"
                    width5="54px"
                    backgroundColor1="rgba(35,35,35,1)"
                    backgroundColor2="rgba(220,1,1,1)"
                    backgroundColor3="rgba(100,100,100,1)"
                    question={questions[0]}
                    answer={questions[1]}
                    fontSize1="22px"
                    fontSize2="14px"
                    textAlign1="center"
                    textAlign2="left"
                    barHeight="1px"
                    barWidth="700px"
                    barColor1="rgba(100,100,100,1)"
                    barColor2="rgba(220,1,1,1)"
                    marginBottom1="7px"
                    marginBottom2="21px"
                    marginTop1="25px"
                    marginTop2="45px"
                    marginTop3="15px"
                    marginLeft="15px"
                    color="white"
                    />
                ))}
            </div>   
        );
    }else if((width <= 750) && (width > 650)){
        return(
            <div id="faq">
                {Questions.map(questions => (
                    <QAComponent
                    position="relative"
                    top="0px"
                    left="-27px"
                    display="flex"
                    direction1="column"
                    direction2="row"
                    justify1="center"
                    justify2="space-between"
                    align1="center"
                    align2="center"
                    height1="75px"
                    height2="50px"
                    height3="4px"
                    height4="151px"
                    width1="600px"
                    width2="580px"
                    width3="50px"
                    width4="600px"
                    width5="54px"
                    backgroundColor1="rgba(35,35,35,1)"
                    backgroundColor2="rgba(220,1,1,1)"
                    backgroundColor3="rgba(100,100,100,1)"
                    question={questions[0]}
                    answer={questions[1]}
                    fontSize1="20px"
                    fontSize2="12px"
                    textAlign1="center"
                    textAlign2="left"
                    barHeight="1px"
                    barWidth="600px"
                    barColor1="rgba(100,100,100,1)"
                    barColor2="rgba(220,1,1,1)"
                    marginBottom1="7px"
                    marginBottom2="9px"
                    marginTop1="12px"
                    marginTop2="45px"
                    marginTop3="15px"
                    marginLeft="15px"
                    color="white"
                    />
                ))}
            </div>   
        );
    }else if((width <= 650) && (width > 550)){
        return(
            <div id="faq">
                {Questions.map(questions => (
                    <QAComponent
                    position="relative"
                    top="0px"
                    left="-27px"
                    display="flex"
                    direction1="column"
                    direction2="row"
                    justify1="center"
                    justify2="space-between"
                    align1="center"
                    align2="center"
                    height1="75px"
                    height2="50px"
                    height3="4px"
                    height4="151px"
                    width1="500px"
                    width2="480px"
                    width3="50px"
                    width4="500px"
                    width5="54px"
                    backgroundColor1="rgba(35,35,35,1)"
                    backgroundColor2="rgba(220,1,1,1)"
                    backgroundColor3="rgba(100,100,100,1)"
                    question={questions[0]}
                    answer={questions[1]}
                    fontSize1="18px"
                    fontSize2="10px"
                    textAlign1="center"
                    textAlign2="left"
                    barHeight="1px"
                    barWidth="500px"
                    barColor1="rgba(100,100,100,1)"
                    barColor2="rgba(220,1,1,1)"
                    marginBottom1="7px"
                    marginBottom2="11px"
                    marginTop1="12px"
                    marginTop2="45px"
                    marginTop3="15px"
                    marginLeft="15px"
                    color="white"
                    />
                ))}
            </div>   
        );
    }else if((width <= 550)){
        return(
            <div id="faq">
                {Questions.map(questions => (
                    <QAComponent
                    position="relative"
                    top="0px"
                    left="-17px"
                    display="flex"
                    direction1="column"
                    direction2="row"
                    justify1="center"
                    justify2="space-between"
                    align1="center"
                    align2="center"
                    height1="50px"
                    height2="30px"
                    height3="2px"
                    height4="101px"
                    width1="400px"
                    width2="380px"
                    width3="30px"
                    width4="400px"
                    width5="34px"
                    backgroundColor1="rgba(35,35,35,1)"
                    backgroundColor2="rgba(220,1,1,1)"
                    backgroundColor3="rgba(100,100,100,1)"
                    question={questions[0]}
                    answer={questions[1]}
                    fontSize1="14px"
                    fontSize2="8px"
                    textAlign1="center"
                    textAlign2="left"
                    barHeight="1px"
                    barWidth="400px"
                    barColor1="rgba(100,100,100,1)"
                    barColor2="rgba(220,1,1,1)"
                    marginBottom1="7px"
                    marginBottom2="8px"
                    marginTop1="8px"
                    marginTop2="45px"
                    marginTop3="15px"
                    marginLeft="15px"
                    color="white"
                    />
                ))}
            </div>   
        );
    }
}