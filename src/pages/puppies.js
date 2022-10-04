import MenuComponent from "../siteSpecificComponents/menuComponent";
import DogsComponent from "../siteSpecificComponents/dogsComponent";

export default function Puppies(props){
    let puppies = [
        ["Princess","https://cdn.shopify.com/s/files/1/0284/2391/3547/articles/American-Pitbull-Puppies-6.JPG_c4357295-9ee4-45f8-9718-e36c98022c46_500x.jpg?v=1603063314"],
        ["Buster","https://www.pitbullforesthouse.com/wp-content/uploads/2022/03/blue-riley-copertina.jpg.webp"]
    ]
    return (
        <div>
            <MenuComponent update={props.updatePage}/>
            <DogsComponent 
            cards={puppies}
            title="About Your Puppies"
            message="Message About Your Puppies"
            sectionTitle="OUR PUPPIES"
            />
            <MenuComponent update={props.updatePage}/>
        </div>
    )
}