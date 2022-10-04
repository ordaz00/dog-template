import MenuComponent from "../siteSpecificComponents/menuComponent";
import BreedingsComponent from "../siteSpecificComponents/breedingsComponent"
import Stud1 from "../images/studs1.jpg"
import Stud3 from "../images/studs3.jpg"
import Female2 from "../images/female2.jpg"
import Female3 from "../images/female3.jpg"

export default function Breedings(props){
  let breedings=[
    ["Larry", Stud1, "Leila", Female3, "TBD"],
    ["Balto", Stud3, "Pearl", Female2, "TBD"]
  ]
  return (
    <div>
      <MenuComponent update={props.updatePage}/>
      <BreedingsComponent cards={breedings} />
      <MenuComponent update={props.updatePage}/>
    </div>
  )
}