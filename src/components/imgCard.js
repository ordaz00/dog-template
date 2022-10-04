import { useStyletron } from 'styletron-react';


export default function ImgCard(props){
    let [css] = useStyletron();

    return(
        <div className={css({height: props.height, width: props.width})} >
            <img src={props.src} alt={props.alt} height={props.imgHeight} width={props.imgWidth} />
            <p className={css({fontSize: props.fontSize, textAlign: props.textAlign, color: props.color})}>{props.message}</p>
        </div>
    );
}