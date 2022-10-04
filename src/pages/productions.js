import MenuComponent from "../siteSpecificComponents/menuComponent";
import DogsComponent from "../siteSpecificComponents/dogsComponent";
import Stud2 from "../images/studs2.jpg"
import Stud4 from "../images/studs4.jpg"

export default function Productions(props){
    let productions = [
        ["Tank", Stud2],
        ["Big Mac", Stud4]
    ]
    return (
        <div>
            <MenuComponent update={props.updatePage}/>
            <DogsComponent 
            cards={productions}
            title="About Your Productions"
            message="Message About Your Productions"
            sectionTitle="OUR PRODUCTIONS"
            />
            <MenuComponent update={props.updatePage}/>
        </div>
    )
}