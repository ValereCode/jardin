import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({scaleValue, careType}) {
    const tab = [1, 2, 3];
    const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => { 
			switch (scaleValue) {
				case 1:
					if (careType === 'light') {
						alert("Cette plante repuiert beaucoup de  lumière");
					} else {
						alert("Cette plante repuiert beaucoup d'eau");
					}
					
					break;
				case 2:
					if (careType === 'light') {
						alert("Cette plante repuiert modérament de lumière");
					} else {
						alert("Cette plante repuiert modérament d'eau");
					}
					
					break;
				case 3:
					if (careType === 'light') {
						alert("Cette plante repuiert peu de lumière");
					} else {
						alert("Cette plante repuiert peu d'eau");
					}
					
					break;
				default:
					break;
			}
		} }>
			{tab.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}
    
export default CareScale