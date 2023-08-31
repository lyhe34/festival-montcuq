import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
// import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
// import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
// import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'Pass 1 jour',
		category: 'Scène',
		id: '1ed',
		bestSale: true,
		light: 1,
		water: 0,
		cover: monstera,
		price: 35
	},
	{
		name: 'Pass 2 jours',
		category: 'Scène',
		id: '2ab',
		light: 2,
		water: 0,
		cover: lyrata,
		price: 55
	},

	{
		name: 'Pass 3 Jours',
		category: 'Scène',
		id: '3sd',
		light: 1,
		water: 0,
		cover: pothos,

		price: 75
	},


	
	{
		name: 'Pass 2 Jours + Bivouac',
		category: 'Scène + Bivouac',
		id: '4kk',
		light: 2,
		water: 1,
		cover: calathea,

		price: 75
	},
	{
		name: 'Pass 3 Jours + Bivouac',
		category: 'Scène + Bivouac',
		id: '5pl',
		light: 3,
		water: 2,
		cover: olivier,
		price: 95
	},

	
	{
		name: 'Pass 4 Jours + Bivouac',
		category: 'Scène + Bivouac',
		id: '7ie',
		bestSale: true,
		light: 2,
		water: 3,
		cover: basil,
		price: 125
	},
	
	
	
	// {
	// 	name: 'succulente',
	// 	category: 'plante grasse',
	// 	id: '9vn',
	// 	light: 2,
	// 	water: 1,
	// 	cover: succulent,
	// 	price: 8
	// },

	// {
	// 	name: 'menthe',
	// 	category: 'extérieur',
	// 	id: '6uo',
	// 	light: 2,
	// 	water: 2,
	// 	cover: mint,
	// 	price: 4
	// }
]
