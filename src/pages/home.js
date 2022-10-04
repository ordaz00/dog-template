import MenuComponent from "../siteSpecificComponents/menuComponent";
import HomeComponent from "../siteSpecificComponents/homeComponent";

export default function Home(props){
  return (
    <div>
      <MenuComponent update={props.updatePage}/>
      <HomeComponent update={props.updatePage}/>
      <MenuComponent update={props.updatePage}/>
    </div>
  )
}
