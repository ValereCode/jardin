import CareScale from "./CareScale";
import '../styles/PlantItem.css'



function PlantItem({name, cover, id, light, water, cart, updateCart}) {
	return(
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
				
			</div>
		</li>
    )
}

// la fonction de l'évenement de clickage
function handleClick(plantName) {
    console.log(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`, plantName);
}

export default PlantItem;