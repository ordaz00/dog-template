import ContactComponent from "../siteSpecificComponents/contactComponent";
import MenuComponent from "../siteSpecificComponents/menuComponent";

export default function Contact(props){
  return (
    <div>
      <MenuComponent update={props.updatePage}/>
      <ContactComponent />
      <MenuComponent update={props.updatePage}/>
    </div>
  )
}