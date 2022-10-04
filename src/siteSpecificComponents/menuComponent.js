
export default function MenuComponent(props){

    return(
        <div id="menu">
            <button className='menuButton' onClick={() => props.update("main")}>
                HOME
            </button>
            <button className='menuButton' onClick={() => props.update("studs")}>
                STUDS
            </button>
            <button className='menuButton' onClick={() => props.update("females")}>
                FEMALES
            </button>
            <button className='menuButton' onClick={() => props.update("puppies")}>
                PUPPIES
            </button>
            <button className='menuButton' onClick={() => props.update("productions")}>
                PRODUCTIONS
            </button>
            <button className='menuButton' onClick={() => props.update("faq")}>
                FAQ
            </button>
            <button className='menuButton' onClick={() => props.update("contact")}>
                CONTACT
            </button>
            <button className='menuButton' id="breedingButton" onClick={() => props.update("breedings")}>
                BREEDINGS
            </button>
        </div>
    );
}