import { useStyletron } from 'styletron-react';

// requires height width src and name properties

export default function ImageDiv(props){
    let [css] = useStyletron();

    return(
        <div className={css({height: props.height, width: props.width})} >
            <img src={props.src} alt={props.name} height={props.height} width={props.width} />
        </div>
    );
}