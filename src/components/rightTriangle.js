import { useStyletron } from 'styletron-react';

export default function RightTriangle(props){
    let [css] = useStyletron();

    return(
        <div className={css({display: props.display, flexDirection: props.direction, justifyContent: props.justify, alignItems: props.align, height: props.height, minWidth: props.minWidth})} onClick={() => props.right(props.card1, props.card2, props.card3)} >
            <img src={props.src} alt={props.alt} height={props.imgHeight} width={props.imgWidth} className={css({rotate: props.rotate})} />
        </div>
    );
}