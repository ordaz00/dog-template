import MenuComponent from "../siteSpecificComponents/menuComponent";
import DogsComponent from "../siteSpecificComponents/dogsComponent";

export default function Females(props){
    let females = [
        ["Heidi","https://www.cesarsway.com/wp-content/uploads/2019/07/AdobeStock_190562487.jpeg"],
        ["Pearl","https://media.istockphoto.com/photos/funny-white-husky-next-to-the-owner-picture-id1354862012?b=1&k=20&m=1354862012&s=170667a&w=0&h=r4bRWqQqOZzUFahpxuIQ-aQZPYIoj6HZ3De4z7wsx0o="],
        ["Leila","https://www.thesprucepets.com/thmb/kw91q0t3wngnkhGFyu-hS1bG24U=/3200x2400/smart/filters:no_upscale()/names-for-german-shepherds-4797840-hero-ed34431ad20c42c6894b4a29765b4d68.jpg"],
        ["Tesla","https://www.thesprucepets.com/thmb/-ZHR_fLGpKN6LeWExVDhF2g75Kc=/2472x1854/smart/filters:no_upscale()/pitbull-dog-breeds-4843994-hero-db6922b6c8294b45b19c07aff5865790.jpg"]
    ]
    return (
        <div>
            <MenuComponent update={props.updatePage}/>
            <DogsComponent 
            cards={females}
            title="About Your Females"
            message="Message About Your Females"
            sectionTitle="OUR FEMALES"
            />
            <MenuComponent update={props.updatePage}/>
        </div>
    )
}