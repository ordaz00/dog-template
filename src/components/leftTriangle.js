import { useStyletron } from 'styletron-react';


export default function LeftTriangle(props){
    let [css] = useStyletron();

    return(
        <div className={css({position: props.position, top: props.top, left: props.left, height: props.height, width: props.width})} onClick={() => props.leftFunc(props.card1, props.card2, props.card3)} >
            <img src={props.src} alt={props.alt} height={props.imgHeight} width={props.imgWidth} className={css({rotate: props.rotate})} />
        </div>
    );
}