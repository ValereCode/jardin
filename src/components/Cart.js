import "../styles/Cart.css";
import { useState, useEffect } from "react";

const Cart = ({cart, updateCart,activeCategory, setActiveCategory}) => {
                  
    const [isOpen, setIsOpen] = useState(true);   // Fermeture et ouverture de nos paniers

    // Fonction qui retourne total
    const total = cart.reduce((acc, plante) => acc + plante.quantite * plante.price, 0) 

	// Mon useEffect
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

    return isOpen   // Si le panier est ouvert !
    ? (
      <div className="lmj-cart">
        <button onClick={() => setIsOpen(false)}>Fermer!</button>

        {cart.length > 0 
        ? (
			<div>
				<h2>Panier</h2>
				<ul>
					{cart.map(({ name, price, quantite }, index) => (
						<div key={`${name}-${index}`}>
							{name} {price}€ x {quantite}
						</div>
					))}
				</ul>
				<h3>Total :{total}€</h3>
				<button onClick={() => updateCart([])}>Vider le panier</button>
			</div>
			  ) 
        : (
			<div>Votre panier est vide</div>
		 )}
        
      </div>
    )
    : (  // Si le panier est fermé !
      <div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
    )
}

export default Cart