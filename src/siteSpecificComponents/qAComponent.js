import * as React from 'react';
import { useStyletron } from 'styletron-react';

export default function QAComponent(props){
    let [state, changeState] = React.useState(0);
    let [css] = useStyletron();

    function openClose(){
        (state === 0) ? (changeState(1)):(changeState(0));
    }
    
    if(state === 0){
        return(
            <div className={css({display: props.display, flexDirection: props.direction1, justifyContent: props.justify1, alignItems: props.align1, height: props.height1, width: props.width1, backgroundColor: props.backgroundColor1, marginBottom: props.marginBottom1})} onClick={openClose}>
                <div className={css({display: props.display, flexDirection: props.direction2, justifyContent: props.justify2, alignItems: props.align2, height: props.height2, width: props.width2, marginTop: props.marginTop1, marginBottom: props.marginBottom2})}>
                    <p className={css({fontSize: props.fontSize1, textAlign: props.textAlign1})}>{props.question}</p>
                    <div className={css({display: props.display, flexDirection: props.direction2, justifyContent: props.justify2, alignItems: props.align2, height: props.width5, width: props.width5})}>
                        <div className={css({height: props.height3, width: props.width3, backgroundColor: props.backgroundColor2})}></div>
                        <div className={css({position: props.position, top: props.top, left: props.left, height: props.width3, width: props.height3, backgroundColor: props.backgroundColor2})}></div>
                    </div>
                </div>
                <div className={css({height: props.barHeight, width: props.barWidth, backgroundColor: props.barColor1})}/>
            </div>
        );
    }else{
        return(
            <div className={css({display: props.display, flexDirection: props.direction1, justifyContent: props.justify1, alignItems: props.align1, height: props.height4, width: props.width4, backgroundColor: props.backgroundColor1, marginBottom: props.marginBottom1})} >
                <div className={css({display: props.display, flexDirection: props.direction2, justifyContent: props.justify2, alignItems: props.align2, height: props.height2, width: props.width2, marginTop: props.marginTop1, marginBottom: props.marginBottom2})} onClick={openClose}>
                    <p className={css({fontSize: props.fontSize1, textAlign: props.textAlign1})}>{props.question}</p>
                    <div className={css({height: props.height3, width: props.width3, backgroundColor: props.backgroundColor2})}></div>
                </div>
                <div className={css({height: props.height1, width: props.width1, backgroundColor: props.backgroundColor3})}>
                    <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign2, marginLeft: props.marginLeft, marginTop: props.marginTop3})}>{props.answer}</p>
                </div>
                <div className={css({height: props.barHeight, width: props.barWidth, backgroundColor: props.barColor2})}/>
            </div>
        );
    }
        
}