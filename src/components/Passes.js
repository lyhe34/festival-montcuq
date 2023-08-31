import CareScale from './CareScale'
import '../styles/Passes.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function Passes({ cover, name, water, light, price }) {
	return (
		<li className='montcuq-item' onClick={() => handleClick(name)}>
			<span className='montcuq-item-price'>{price}€</span>
			<img className='montcuq-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default Passes
