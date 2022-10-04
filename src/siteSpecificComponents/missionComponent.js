import { useStyletron } from 'styletron-react';

export default function MissionComponent(props){
    let [css] = useStyletron();

    return(
        <div className={css({display: props.display, flexDirection: props.direction, justifyContent: props.justify, alignItems: props.align, position: props.position, top: props.top, left: props.left, height: props.height, width: props.width})} >
            <p className={css({fontSize: props.titleSize})}>{props.title}</p>
            <div className={css({backgroundColor: props.barBackgroundColor, height: props.barHeight, width: props.barWidth})}></div>
            <p className={css({fontSize: props.messageSize, width: props.messageWidth, textAlign: props.textAlign, marginTop: props.marginTop})}>{props.message}</p>
        </div>
    );
}