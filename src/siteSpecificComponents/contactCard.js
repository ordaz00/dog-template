import { useStyletron } from 'styletron-react'

export default function ContactCard(props){
    let [css] = useStyletron();

    // function getText(){
    //     let first = document.getElementById("first");
    //     let last = document.getElementById("last");
    //     let phone = document.getElementById("phone");
    //     let email = document.getElementById("email");
    //     let breed = document.getElementById("breed");
    //     let sex = document.getElementById("sex");
    //     let comment = document.getElementById("comment");
    //     let information = [first.value, last.value, phone.value, email.value, breed.value, sex.value, comment.value];
    //     first.value = "";
    //     last.value = "";
    //     phone.value = "";
    //     email.value = "";
    //     breed.value = "";
    //     sex.value="";
    //     comment.value = "";
    //     console.log(information);
    // }

    return(
        <form action="https://formspree.io/f/meqdlbvz" method="post" >
            <div className={css({display: props.display, flexDirection: props.direction2, justifyContent: props.align1, width: "100%"})}>
                <div className={css({position: props.position, top: props.top, left: props.left, display: props.display, flexDirection: props.direction1, justifyContent: props.justify1, alignItems: props.align1, height: props.height1, width: props.width1, backgroundColor: props.backgroundColor1})}>
                    <div className={css({display: props.display, flexDirection: props.direction1, justifyContent: props.justify1, alignItems: props.align1, height: props.height2, width: props.width2, marginTop: props.marginTop1})}>
                        <p className={css({fontSize: props.fontSize1, textAlign: props.textAlign1, width: props.width6})}>QUICK CONTACT</p>
                        <div className={css({height: props.barHeight, width: props.barWidth, backgroundColor: props.barColor})}></div>
                </div>
                    <div className={css({display: props.display, flexDirection: props.direction2, justifyContent: props.justify2, alignItems: props.align2, flexWrap: props.wrap, height: props.height3, width: props.width3})}>
                        <div>
                            <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign2})}>First Name</p>
                            <textarea className={css({fontSize: props.fontSize2, textAlign: props.textAlign3, height: props.height4, width: props.width4, resize: props.resize, backgroundColor: props.backgroundColor2})} placeholder="Enter Text Here" name='first'></textarea>
                        </div>
                        <div>
                            <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign2})}>Last Name</p>
                            <textarea className={css({fontSize: props.fontSize2, textAlign: props.textAlign3, height: props.height4, width: props.width4, resize: props.resize, backgroundColor: props.backgroundColor2})} placeholder="Enter Text Here" name='last'></textarea>
                        </div>
                        <div>
                            <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign2})}>Phone</p>
                            <textarea className={css({fontSize: props.fontSize2, textAlign: props.textAlign3, height: props.height4, width: props.width4, resize: props.resize, backgroundColor: props.backgroundColor2})} placeholder="Enter Text Here" name='phone'></textarea>
                        </div>
                        <div>
                            <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign2})}>Email</p>
                            <textarea className={css({fontSize: props.fontSize2, textAlign: props.textAlign3, height: props.height4, width: props.width4, resize: props.resize, backgroundColor: props.backgroundColor2})} placeholder="Enter Text Here" name='email'></textarea>
                        </div>
                        <div>
                            <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign2})}>Breed</p>
                            <textarea className={css({fontSize: props.fontSize2, textAlign: props.textAlign3, height: props.height4, width: props.width4, resize: props.resize, backgroundColor: props.backgroundColor2})} placeholder="Enter Text Here" name='breed'></textarea>
                        </div>
                        <div>
                            <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign2})}>Sex</p>
                            <textarea className={css({fontSize: props.fontSize2, textAlign: props.textAlign3, height: props.height4, width: props.width4, resize: props.resize, backgroundColor: props.backgroundColor2})} placeholder="Enter Text Here" name='sex'></textarea>
                        </div>
                    </div>
                    <div>
                        <p className={css({fontSize: props.fontSize2, textAlign: props.textAlign2, marginTop: props.marginTop1})}>Comment</p>
                        <textarea className={css({fontSize: props.fontSize3, textAlign: props.textAlign3, height: props.height5, width: props.width5, resize: props.resize, backgroundColor: props.backgroundColor2})} placeholder="Enter Text Here" name='comment'></textarea>
                    </div>
                    <button className={css({fontSize: props.fontSize2, textAlign: props.textAlign1, marginTop: props.marginTop2, height: props.height6, width: props.width7, backgroundColor: props.backgroundColor3})} type="submit">SUBMIT</button>               
                </div>    
            </div>
        </form>
    );
}