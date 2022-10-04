import FaqComponent from "../siteSpecificComponents/faqComponent";
import MenuComponent from "../siteSpecificComponents/menuComponent";

export default function Faq(props){
  let questions = [
    ["What are the cheapest and most expensive colors?", "The cheapest colors to purchase are Blues and Brindles. While the most expensive are Tri's and Merles."],
    ["What is the life expectancy of one of your dogs?", "Their life expectancy is about 14 years."],
    ["How big can they get?", "They can weigh between 90lbs to 140lbs depending on sex and their parents size."],
    ["How much do they cost?", "They can range from $5,000 - $15,000. The wide range is dependent on color and bloodline."]
  ]
  return (
    <div>
      <MenuComponent update={props.updatePage}/>
      <FaqComponent questions={questions}/>
      <MenuComponent update={props.updatePage}/>
    </div>
  )
}