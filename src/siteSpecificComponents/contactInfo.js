import { useStyletron } from 'styletron-react';

export default function ContactInfo(props){
    let [css] = useStyletron();
    
    return(
        <div className={css({display: props.display, flexDirection: props.direction1, justifyContent: props.justify1, alignItems: props.align1, height: props.height1, width: props.width1, backgroundColor: props.backgroundColor1})}>
            <div className={css({display: props.display, flexDirection: props.direction2, justifyContent: props.justify2, alignItems: props.align2, height: props.height2, width: props.width2, marginLeft: props.marginLeft, marginTop: props.marginTop1})}>
                <p className={css({fontSize: props.fontSize1, textAlign: props.textAlign})}>ADDRESS</p>
                <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign})}>{props.address}</p>
            </div>
            <div className={css({height: props.height3, width: props.width3, backgroundColor: props.backgroundColor2, marginTop: props.marginTop2})}></div>
            <div className={css({display: props.display, flexDirection: props.direction2, justifyContent: props.justify2, alignItems: props.align2, marginTop: props.marginTop1})}>
                <p className={css({fontSize: props.fontSize1, textAlign: props.textAlign})}>PHONE</p>
                <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign})}>{props.phone}</p>
            </div>
            <div className={css({height: props.height3, width: props.width3, backgroundColor: props.backgroundColor2, marginTop: props.marginTop2})}></div>
            <div className={css({display: props.display, flexDirection: props.direction2, justifyContent: props.justify2, alignItems: props.align2, marginRight: props.marginRight, marginTop: props.marginTop1})}>
                <p className={css({fontSize: props.fontSize1, textAlign: props.textAlign})}>EMAIL</p>
                <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign})}>{props.email}</p>
            </div>
        </div>
    );
}