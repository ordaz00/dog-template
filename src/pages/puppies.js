import MenuComponent from "../siteSpecificComponents/menuComponent";
import DogsComponent from "../siteSpecificComponents/dogsComponent";
import puppies1 from "../images/puppies1.jpg"
import puppies2 from "../images/puppies2.jpg"

export default function Puppies(props){
    let puppies = [
        ["Princess", puppies1],
        ["Buster", puppies2]
    ]
    return (
        <div>
            <MenuComponent update={props.updatePage}/>
            <DogsComponent 
            cards={puppies}
            title="About Your Puppies"
            message="Message About Your Puppies"
            sectionTitle="OUR PUPPIES"
            />
            <MenuComponent update={props.updatePage}/>
        </div>
    )
}