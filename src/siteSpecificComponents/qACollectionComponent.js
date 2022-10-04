import QAComponent from "./qAComponent";


export default function QACollectionComponent(props){
    let Questions = props.questions;
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
                />
            ))}
        </div>   
    );
}