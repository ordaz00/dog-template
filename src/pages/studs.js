import MenuComponent from "../siteSpecificComponents/menuComponent";
import DogsComponent from "../siteSpecificComponents/dogsComponent";
import Stud1 from "../images/studs1.jpg"
import Stud2 from "../images/studs2.jpg"
import Stud3 from "../images/studs3.jpg"
import Stud4 from "../images/studs4.jpg"

export default function Studs(props){
    let studs = [
        ["Larry", Stud1],
        ["Tank",Stud2],
        ["Balto",Stud3],
        ["Big Mac",Stud4]
    ]
    return (
        <div>
            <MenuComponent update={props.updatePage}/>
            <DogsComponent 
            cards={studs}
            title="About Your Studs"
            message="Message About Your Studs"
            sectionTitle="OUR STUDS"
            />
            <MenuComponent update={props.updatePage}/>
        </div>
    )
}