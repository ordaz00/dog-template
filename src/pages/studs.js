import MenuComponent from "../siteSpecificComponents/menuComponent";
import DogsComponent from "../siteSpecificComponents/dogsComponent";

export default function Studs(props){
    let studs = [
        ["Larry","https://www.dogbreedinfo.com/images32/GermanShepherdAdultDogLayInGrassOutside.jpg"],
        ["Tank","https://vrcpitbull.com/wp-content/uploads/2011/02/VAMPVAMP%E2%80%A2.jpg"],
        ["Balto","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvbaHT8Bma7IxJIEUmWE997dZTRYVRlu08A&usqp=CAU"],
        ["Big Mac","https://www.rd.com/wp-content/uploads/2021/10/GettyImages-513392620-scaled-e1635191773380.jpg?fit=700,1024"]
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