import { useStyletron } from 'styletron-react';

export default function TwoSectionWritingComponent(props){
    let [css] = useStyletron();

    return(
        <div className={css({position: props.position, top: props.top, left: props.left})} >
            <p className={css({fontSize: props.titleSize})}>{props.title}</p>
            <p className={css({fontSize: props.messageSize})}>{props.message}</p>
        </div>
    );
}