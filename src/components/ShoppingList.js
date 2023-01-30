import { useState } from "react";
import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css';
import PlantItem from '../components/PlantItem';
import Categories from "./Categories";

function ShoppingList({cart, updateCart}) {

	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const isInThePanier = cart.find((plant) => plant.name === name)
		if (isInThePanier) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, quantite: isInThePanier.quantite + 1 }
			])
		} else {
			updateCart([...cart, { name, price, quantite: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>	
			<Categories
				setActiveCategory={setActiveCategory}
				categories={categories}
				activeCategory={activeCategory}
			/>
			
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem id={id} cover={cover} name={name} water={water} light={light} cart={cart} updateCart={updateCart}/>
						<button onClick={() => addToCart(name, price)}>Ajouter!</button>
					</div>		
				))}
			</ul>
		</div>
	)
}

export default ShoppingList;