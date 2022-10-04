import ImageDiv from "../components/imageDiv";
import ReviewCollection from "../components/reviewCollection";
import MissionComponent from "./missionComponent";
import ThreeSectionWritingComponent from "./threeSectionWritingComponent";
import TwoSectionWritingComponent from "./twoSectionWritingComponent";
import Dog1 from "../images/dogImage1.jpg";
import Dog2 from "../images/dogImage2.jpg";
import Dog3 from "../images/dogImage3.jpg";

export default function HomeComponent(props){
    let review = [
        ["We couldn't help but go back and get another!", "From beginning to end Zach was very responsive and reliable. We were so happy with Carolina Bullies that we couldn't help but go back and get another! We now have two beautiful XL American Bullies that have the best temperament.", "Marissa C."],
        ["If you are looking for quality, you will not be disappointed!","We just want to say thank you to Zach from Carolina Bullies for such a great experience. Great communication from the beginning all the way to when we picked our dog up. Migo was the perfect addition to our family and we couldn't be happier. If you are looking for quality, you will not be disappointed. Thanks again Zach.","The Gomez Family"],
        ["I will be a lifelong customer!","Carolina bullies is the up most professional breeder I have ever dealt with. He is extremely knowledgeable about his dogs. Our boy is big boned, beautiful color and most importantly his temperament is absolutely amazing. Dealing with Carolina Bullies is a pleasure. He is always willing to give up time for his dogs and will answer any questions you may have. My bully's temperament is so good that I got him registered as a service dog. I will be a lifelong customer to Carolina Bullies. Thank you for my amazing dog/son/family member!!","Hector S."],
        ["They're just the sweetest and have the best temperament we've ever seen on a dog and we've owned several breeds.","We've purchased 3 dogs from Zach, all 3 Jersey's pups. The first one was in June 2017 and the last one was October 2020. They're just the sweetest and have the best temperament we've ever seen on a dog and we've owned several breeds. Zach is amazing and loves what he does, you can tell by how he has his dogs and the program he has built with them throughout the years. ","Nelson D."],
        ["Zach and Carolina Bullies have always been there through the years!","We worked with Zach at Carolina Bullies about 4 years ago when we were picking a bully to add to our family. I have a little boy and we also have a pitbull, and Zach was so great letting me bring my Son out to meet the pups and see the 'big dogs' as he called them! Watching my Son play with the dogs really made me understand their temperament and what amazing family dogs they are! Odin just turned 4 and he and my 9 year old Son are best of friends. Zach and Carolina Bullies have always been there through the years supporting me in raising Odin in regard to best practices for training and best food to feed. I know I can always reach out to him with any questions and he is always available and willing to help. Odin has completed our family and not only am I honored to own a dog from Carolina Bullies, but I am also grateful to Zach for his personal and continued support in raising our dog. Thank you, Zach!","Baily R."]
    ]

    return(
        <div>
            <ImageDiv height="700px" width="100%" src={Dog1} name="dogImage" />
                <ThreeSectionWritingComponent 
                position="absolute" 
                top="450px" 
                left="50px" 
                welcomeSize="28px" 
                titleSize="72px"
                messageSize="20px"
                welcome="Welcome To:"
                title="Name Of Your Company"
                message="Welcome Message"
                color="white"
                />
                <button id="upcomingButton" onClick={() => props.update("breedings")}>
                    UPCOMING BREEDINGS
                </button>
            <ImageDiv height="700px" width="100%" src={Dog2} name="dogImage" />
                <TwoSectionWritingComponent
                position="absolute" 
                top="900px" 
                left="50px" 
                titleSize="72px"
                messageSize="20px"
                title="About Your Company"
                message="Message about your company"
                color="white"
                />
            <ImageDiv height="700px" width="100%" src={Dog3} name="dogImage" />
            <MissionComponent
            display="flex"
            direction="column"
            justify="flex-start"
            align="center"
            position="absolute"
            top="1600px" 
            left="400px"
            height="500px"
            width="700px"
            titleSize="72px"
            messageSize="20px"
            title="Our Mission"
            message="Mission Statement"
            barBackgroundColor="rgba(220,1,1,1)"
            barHeight="7px"
            barWidth="300px"
            messageWidth="650px"
            textAlign="center"
            marginTop="15px"
            color="white"
            />
            <ReviewCollection
            review={review}
            />
        </div>
        
    );
}