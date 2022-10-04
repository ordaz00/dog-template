import { useStyletron } from 'styletron-react';

export default function ReviewCard(props){
    let [css] = useStyletron();

    return(
        <div className={css({display: props.display, flexDirection: props.direction, justifyContent: props.justify, alignItems: props.align, backgroundColor: props.backgroundColor, minHeight: props.minHeight, minWidth: props.minWidth, marginLeft: props.marginLeft, marginRight: props.marginRight, marginTop: props.marginCardTop})} >
            <p className={css({width: props.innerWidth, fontSize: props.titleSize, fontWeight: props.titleWeight, marginTop: props.marginTop, textAlign: props.textAlign, color: props.titleColor})}>{props.title}</p>
            <p className={css({width: props.innerWidth, fontSize: props.messageSize, textAlign: props.textAlign, marginTop: props.marginTop, color: props.color})}>{props.message}</p>
            <p className={css({width: props.innerWidth, fontSize: props.nameSize, fontWeight: props.titleWeight, marginTop: props.marginTop, textAlign: props.textAlign, marginBottom: props.marginBottom, color: props.color})}>{props.name}</p>
        </div>
    );
}