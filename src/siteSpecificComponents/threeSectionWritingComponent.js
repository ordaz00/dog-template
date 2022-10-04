import { useStyletron } from 'styletron-react';

export default function ThreeSectionWritingComponent(props){
    let [css] = useStyletron();

    return(
        <div className={css({position: props.position, top: props.top, left: props.left})} >
            <p className={css({fontSize: props.welcomeSize, color: props.color})}>{props.welcome}</p>
            <p className={css({fontSize: props.titleSize, color: props.color})}>{props.title}</p>
            <p className={css({fontSize: props.messageSize, color: props.color})}>{props.message}</p>
        </div>
    );
}