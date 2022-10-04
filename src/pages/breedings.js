import MenuComponent from "../siteSpecificComponents/menuComponent";
import BreedingsComponent from "../siteSpecificComponents/breedingsComponent"

export default function Breedings(props){
  let breedings=[
    ["Larry","https://www.dogbreedinfo.com/images32/GermanShepherdAdultDogLayInGrassOutside.jpg","Leila", "https://www.thesprucepets.com/thmb/kw91q0t3wngnkhGFyu-hS1bG24U=/3200x2400/smart/filters:no_upscale()/names-for-german-shepherds-4797840-hero-ed34431ad20c42c6894b4a29765b4d68.jpg", "TBD"],
    ["Balto","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvbaHT8Bma7IxJIEUmWE997dZTRYVRlu08A&usqp=CAU","Pearl","https://media.istockphoto.com/photos/funny-white-husky-next-to-the-owner-picture-id1354862012?b=1&k=20&m=1354862012&s=170667a&w=0&h=r4bRWqQqOZzUFahpxuIQ-aQZPYIoj6HZ3De4z7wsx0o=","TBD"]
  ]
  return (
    <div>
      <MenuComponent update={props.updatePage}/>
      <BreedingsComponent cards={breedings} />
      <MenuComponent update={props.updatePage}/>
    </div>
  )
}