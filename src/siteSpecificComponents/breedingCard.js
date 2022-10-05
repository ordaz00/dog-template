import { useStyletron } from 'styletron-react';

export default function BreedingCard(props){
    let [css] = useStyletron();

    return(
        <div className={css({display: props.display, flexDirection: props.direction1, justifyContent: props.justify1, alignItems: props.align1, height: props.height1, width: props.width1, backgroundColor: props.backgroundColor, marginBottom: props.marginBottom})} >
            <div className={css({display: props.display, flexDirection: props.direction2, justifyContent: props.justify2, alignItems: props.align2, height: props.height2, width: props.width2})}>
                <div className={css({display: props.display1, flexDirection: props.direction1, justifyContent: props.justify1, alignItems: props.align1,})} >
                    <img src={props.src1} alt={props.alt} height={props.imgHeight} width={props.imgWidth} />
                    <p className={css({fontSize: props.fontSize1, textAlign: props.textAlign, marginTop: props.marginTop1, color: props.color})}>STUD:</p>
                    <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign, color: props.color})}>{props.name1}</p>
                </div>
                <div className={css({display: props.display1, flexDirection: props.direction1, justifyContent: props.justify1, alignItems: props.align1,})} >
                    <img src={props.src2} alt={props.alt} height={props.imgHeight} width={props.imgWidth} />
                    <p className={css({fontSize: props.fontSize1, textAlign: props.textAlign, marginTop: props.marginTop1, color: props.color})}>FEMALE:</p>
                    <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign, color: props.color})}>{props.name2}</p>
                </div>
            </div>
            <div className={css({marginTop: props.marginTop})}>
                <div className={css({height: props.barHeight, width: props.barWidth, backgroundColor: props.barColor})}></div>
                <p className={css({fontSize: props.fontSize1, textAlign: props.textAlign, marginTop: props.marginTop2, color: props.color})}><span className={css({color: props.color2})}>EXPECTED DATE: </span>{props.date}</p>
            </div>
        </div>
    );
}