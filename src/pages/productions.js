import MenuComponent from "../siteSpecificComponents/menuComponent";
import DogsComponent from "../siteSpecificComponents/dogsComponent";

export default function Productions(props){
    let productions = [
        ["Tank","https://vrcpitbull.com/wp-content/uploads/2011/02/VAMPVAMP%E2%80%A2.jpg"],
        ["Big Mac","https://www.rd.com/wp-content/uploads/2021/10/GettyImages-513392620-scaled-e1635191773380.jpg?fit=700,1024"]
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