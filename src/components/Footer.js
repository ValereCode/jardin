import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('bonjour');

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
				Laissez-nous votre mail :
				<input
                	value={inputValue}
                	onChange={(e) => setInputValue(e.target.value)}
					onBlur={() => {
						if(!inputValue.includes('@')){
							alert("Votre addresse email n'est pas valide .\n Elle ne contient pas de '@'");
							return;
						}
						alert("Votre addresse est enregistrer avec succès");
					}}
            	/>
			</div>

		</footer>
	)
}

export default Footer