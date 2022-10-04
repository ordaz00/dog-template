import MenuComponent from "../siteSpecificComponents/menuComponent";
import DogsComponent from "../siteSpecificComponents/dogsComponent";
import Female1 from "../images/female1.jpg"
import Female2 from "../images/female2.jpg"
import Female3 from "../images/female3.jpg"
import Female4 from "../images/female4.jpg"

export default function Females(props){
    let females = [
        ["Heidi", Female1],
        ["Pearl", Female2],
        ["Leila", Female3],
        ["Tesla", Female4]
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