import { useStyletron } from 'styletron-react';

export default function TitleComponent(props){
    let [css] = useStyletron();

    return(
        <div className={css({display: props.display, flexDirection: props.direction, justifyContent: props.justify, alignItems: props.align, marginTop: props.marginTop, marginLeft: props.marginLeft})} >
            <p className={css({fontSize: props.titleSize})}>{props.title}</p>
            <div className={css({backgroundColor: props.barBackgroundColor, height: props.barHeight, width: props.barWidth})}></div>
        </div>
    );
}