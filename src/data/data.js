
const data = [
	{
		id: 1,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/05/113318.jpg',
		title: 'Shampoo de Cebolla y Biotina',
		category: 'capilar',
        subcategory: 'shampoo',
		description: 'Nutre, Fortalece, Estimula el crecimiento y reparar la fibra capilar de tu cabello desde la raíz! Rico en extractos naturales y no huele a Cebolla.',
		use: 'Como el shampoo es tan rico en nutrientes es necesario dejarlo actuar cómo mínimo 3 minutos.',
		price: 45
	},
	{
		id: 2,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/03/SHAMPOO-AJI.jpg',
		title: 'Shampoo de Ají',
		category: 'capilar',
        subcategory: 'shampoo',
		description: 'Fortalece y estimula el cuero cabelludo, controla la caspa y la seborrea, elimina la grasa, procede un efecto renovador desde la raíz del cabello.',			
		use: 'Como el shampoo es tan rico en nutrientes es necesario dejarlo actuar cómo mínimo 3 minutos.',
		price: 45
	},
	{
		id: 3,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/03/SERUM-CAPILAR-REVITALIZANTE.jpg',		
		title: 'Serum Capilar REVITALIZANTE',
		category: 'capilar',
        subcategory: 'serum',
		description: 'Hidratante extremo sin sensación grasosa, nutre, fortalece, aporta suavidad y brillo, estimula el crecimiento,  fortalece el folículo piloso, es termo protector. Es libre de conservantes, parabenos, sal, siliconas y sulfatos.',			
		use: 'Aplica una cantidad moderada en el cabello seco o húmedo y peina como de costumbre.',
		price: 45
	},
	{
		id: 4,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/03/GEL-LIPOREDUCTOR.jpg',			
		title: 'Gel frío liporeductor',
		category: 'corporal',
        subcategory: '',
		description: 'Es un gel liporeductor que ayuda a reducir medidas, actúa sobre la grasa localizada a través de quemadores naturales.',			
		use: 'Toma una cantidad moderada del producto con las 3 yemas de los dedos por zona a tratar y realice un masaje con los nudillos y con firmeza haciendo movimientos circulares: En el abdomen, de arriba hacia abajo (zona pelvica). En las piernas, en la parte interna dirige el movimiento desde la rodilla hacia la zona pelvica, en la parte externa y posterior de la pierna, dirige el movimiento hacia el glúteo.',
		price: 55
	},
	{
		id: 5,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/05/113330-1.jpg',			
		title: 'Espuma autobronceadora',
		category: 'corporal',
        subcategory: '',
		description: 'Con este producto consigues un bronceado natural en una sola aplicación sin salir al sol, lograrás un bronceador de playa luminoso y perfecto, contiene extracto de zanahoria, canela y ácido hialurónico además protege tu piel porque tiene filtro uv.',			
		use: ' aplica nuestra espuma bronceadora de manera uniforme en la zona que deseas puedes aplicar en piernas, manos, abdomen, cuello hasta en el rostro, despues de su aplicación debes esperar 4 horas para obtener el efecto bronceado.',
		price: 65
	},
	{
		id: 6,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/05/113322-1.jpg',			
		title: 'Kit de Arroz',
		category: 'kits',
        subcategory: '',
		description: 'Regula la producción de sebo sin resecar las puntas, nutre, estimula el crecimiento y detiene la caída excesiva.',			
		use: 'Como el shampoo es tan rico en nutrientes es necesario dejarlo actuar cómo mínimo 3 minutos, luego enjuaga y aplica el tratamiento de medios a puntas y déjalo actuar cómo minimo 10 minutos.',
		price: 70
	},
	{
		id: 7,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/03/KIT-CEBOLLA.jpg',			
		title: 'Kit de Cebolla',
		category: 'kits',
        subcategory: '',
		description: 'Previene la caída del cabello, estimula el crecimiento, ayuda a neutralizar el Ph del cuero cabelludo y regula la producción de cebo. Ideal para cabellos de mixtos a grasos. Es totalmente libre de conservantes, parabenos, sal, siliconas y sulfatos.',			
		use: 'Como el shampoo es tan rico en nutrientes es necesario dejarlo actuar cómo mínimo 3 minutos, luego enjuaga y aplica el tratamiento de medios a puntas y déjalo actuar cómo minimo 10 minutos.',
		price: 70
	},
	{
		id: 8,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/05/113324.jpg',			
		title: 'Kit de Coco',        
		category: 'kits',
        subcategory: '',
		description: 'Restaura el cabello, hidrata, previene el frizz y proporciona suavidad. Ideal para cabellos secos, porosos y  maltratados. Es totalmente libre de conservantes, parabenos, sal, siliconas y sulfatos.',			
		use: 'Como el shampoo es tan rico en nutrientes es necesario dejarlo actuar cómo mínimo 3 minutos, luego enjuaga y aplica el tratamiento de medios a puntas y déjalo actuar cómo minimo 10 minutos.',
		price: 70
	},
	{
		id: 9,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/03/MENJURJE.jpg',
		title: 'Menjurje',
		category: 'capilar',
		subcategory: '',
		description: 'Es una mascarilla nocturna altamente nutritiva, hidrata, repara y fortalece la fibra capilar, detiene la caída excesiva y estimula el crecimiento del cabello. Ideal para cabellos secos, maltratados, deshidratados, porosos, decolorados, con caída excesiva y estancados. libre de conservantes, parabenos, sal, siliconas y sulfatos.',
		use: 'Aplica de medios a puntas una cantidad moderada, déjalo actuar cómo mínimo 40 minutos o preferiblemente toda la noche, al día siguiente enjuaga con agua tibia y abundante shampoo.',
		price: 45
	},
	{
		id: 10,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/03/alia-5-scaled.jpg',
		title: 'Perfume Capilar Citrico',
		category: 'capilar',
		subcategory: '',
		description: 'Fragancia capilar con notas cítricas, no genera grasa, ayuda a controlar el frizz, aporta brillo y suavidad, es libre de alcohol y parabenos.',
		use: 'Aplícalo en la palma de la mano, frotalo con amabas manos para activar sus componentes y luego aplícalo en el cabello.',
		price: 48
	},
	{
		id: 11,
		image: 'https://www.grandiosanatural.com/wp-content/uploads/2022/03/ALISADOR-PROGRESIVO.jpg',
		title: 'Tratamiento Alisador Progresivo',
		category: 'capilar',
		subcategory: '',
		description: 'Alisa el cabello sin maltratarlo, es un tratamiento nutritivo que proporciona brillo, suavidad y vitalidad al cabello, totalmente libre de formol, amoniaco, parabenos, siliconas y conservantes, apto para niñas y mujeres en estado de embarazo. No irrita los ojos.',
		use: 'Lava tu cabello con shampoo grandiosa by Dlissa, luego con el bien limpio y humedo Aplica todo el producto sobre el cabello masajeando desde la raíz hasta las puntas,deja actuar por unos 30 minutos, luego con el secador con aire frio secar sólo para retirar un 70% de la humedad no lo seques totalmente, luego con una plancha profesional que alcance los 450°f o 250°C tomar porciones pequeñas de cabello y planchar una a una repasando muchas veces hasta terminar con la totalidad del cabello, finalmente dejar aplicado mínimo 4 horas y máximo hasta 24 y enjuaga con abundante agua. Nuevamente seca con secador y plancha.',
		price: 75
	}
	
];

export default data;