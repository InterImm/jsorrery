
import { TweenMax, Sine } from 'gsap';
import { Color } from 'three';
import { AU, SIDERAL_DAY, NM_TO_KM, DAY, YEAR } from '../../constants';
import MoonRealOrbit from './MoonRealOrbit';


export const sun = {
	title: 'The Sun',
	name: 'sun',
	mass: 1.9891e30,
	radius: 6.96342e5,
	color: '#ffff00',
	map: 'img/sunmap.jpg',
	k: 0.01720209895, //gravitational constant (μ)
	material: {
		emissive: new Color(0xdddd33),
	},
};

export const mercury = {
	title: 'Mercury',
	name: 'mercury',
	mass: 3.3022e23,
	radius: 2439,
	color: '#588a7b',
	map: 'img/mercurymap.jpg',
	orbit: { 
		base: {
			a: 0.38709927 * AU,
			e: 0.20563593,
			i: 7.00497902,
			l: 252.25032350,
			lp: 77.45779628,
			o: 48.33076593,
		},
		cy: {
			a: 0.00000037 * AU,
			e: 0.00001906,
			i: -0.00594749,
			l: 149472.67411175,
			lp: 0.16047689,
			o: -0.12534081,
		},
	},
};

export const venus = {
	title: 'Venus',
	name: 'venus',
	mass: 4.868e24,
	radius: 6051,
	color: '#fda700',
	map: 'img/venusmap.jpg',
	orbit: {
		base: {
			a: 0.72333566 * AU,
			e: 0.00677672,
			i: 3.39467605,
			l: 181.97909950,
			lp: 131.60246718,
			o: 76.67984255,
		},
		cy: {
			a: 0.00000390 * AU,
			e: -0.00004107,
			i: -0.00078890,
			l: 58517.81538729,
			lp: 0.00268329,
			o: -0.27769418,
		},
	},
};

export const earth = {
	title: 'The Earth',
	name: 'earth',
	mass: 5.9736e24,
	radius: 3443.9307 * NM_TO_KM,
	color: '#1F7CDA',
	map: 'img/earthmap1k_clouds.jpg',
	material: {
		specular: new Color('grey'),
	},
	sideralDay: SIDERAL_DAY,
	tilt: 23 + (26 / 60) + (21 / 3600),
	orbit: {
		base: {
			a: 1.00000261 * AU,
			e: 0.01671123,
			i: -0.00001531,
			l: 100.46457166,
			lp: 102.93768193,
			o: 0.0,
		},
		cy: {
			a: 0.00000562 * AU,
			e: -0.00004392,
			i: -0.01294668,
			l: 35999.37244981,
			lp: 0.32327364,
			o: 0.0,
		},
	},
};

export const mars = {
	title: 'Mars',
	name: 'mars',
	mass: 6.4185e23,
	radius: 3376,
	color: '#ff3300',
	map: 'img/mars_1k_color.jpg',
	sideralDay: 1.025957 * DAY,
	orbit: {
		base: {
			a: 1.52371034 * AU,
			e: 0.09339410,
			i: 1.84969142,
			l: -4.55343205,
			lp: -23.94362959,
			o: 49.55953891,
		},
		cy: {
			a: 0.00001847 * AU,
			e: 0.00007882,
			i: -0.00813131,
			l: 19140.30268499,
			lp: 0.44441088,
			o: -0.29257343,
		},
	},
};

export const jupiter = {
	title: 'Jupiter',
	name: 'jupiter',
	mass: 1.8986e27,
	radius: 71492,
	color: '#ff9932',
	map: 'img/jupitermap.jpg',
	orbit: {
		base: {
			a: 5.20288700 * AU, 
			e: 0.04838624,
			i: 1.30439695,
			l: 34.39644051,
			lp: 14.72847983,
			o: 100.47390909,
		},
		cy: {
			a: -0.00011607 * AU,
			e: -0.00013253,
			i: -0.00183714,
			l: 3034.74612775,
			lp: 0.21252668,
			o: 0.20469106,
		},
	},
};

export const saturn = {
	title: 'Saturn',
	name: 'saturn',
	mass: 5.6846e26,
	radius: 58232,
	color: '#ffcc99',
	map: 'img/saturnmap.jpg',
	tilt: 26.7,
	ring: {
		innerRadius: 74500,
		outerRadius: 117580,
		map: 'img/saturnrings.png',
	},
	orbit: {
		base: {
			a: 9.53667594 * AU,
			e: 0.05386179,
			i: 2.48599187,
			l: 49.95424423,
			lp: 92.59887831,
			o: 113.66242448,
		},
		cy: {
			a: -0.00125060 * AU,
			e: -0.00050991,
			i: 0.00193609,
			l: 1222.49362201,
			lp: -0.41897216,
			o: -0.28867794,
		},
	},
};

export const uranus = {
	title: 'Uranus',
	name: 'uranus',
	mass: 8.6810e25,
	radius: 25559,
	color: '#99ccff',
	map: 'img/uranusmap.jpg',
	orbit: {
		base: {
			a: 19.18916464 * AU,
			e: 0.04725744,
			i: 0.77263783,
			l: 313.23810451,
			lp: 170.95427630,
			o: 74.01692503,
		},
		cy: {
			a: -0.00196176 * AU,
			e: -0.00004397,
			i: -0.00242939,
			l: 428.48202785,
			lp: 0.40805281,
			o: 0.04240589,
		},
	},
};

export const neptune = {
	title: 'Neptune',
	name: 'neptune',
	mass: 1.0243e26,
	radius: 24764,
	color: '#3299ff',
	map: 'img/neptunemap.jpg',
	orbit: {
		base: {
			a: 30.06992276 * AU,
			e: 0.00859048,
			i: 1.77004347,
			l: -55.12002969,
			lp: 44.96476227,
			o: 131.78422574,
		},
		cy: {
			a: 0.00026291 * AU,
			e: 0.00005105,
			i: 0.00035372,
			l: 218.45945325,
			lp: -0.32241464,
			o: -0.00508664,
		},
	},
};

export const pluto = {
	title: 'Pluto',
	name: 'pluto',
	mass: 1.305e22 + 1.52e21,
	radius: 1153,
	color: '#aaaaaa',
	map: 'img/plutomap1k.jpg',
	orbit: {
		base: {
			a: 39.48211675 * AU,
			e: 0.24882730,
			i: 17.14001206,
			l: 238.92903833,
			lp: 224.06891629,
			o: 110.30393684,
		},
		cy: {
			a: -0.00031596 * AU,
			e: 0.00005170,
			i: 0.00004818,
			l: 145.20780515,
			lp: -0.04062942,
			o: -0.01183482,
		},
	},
};

export const halley = {
	title: 'Halley\'s Comet',
	name: 'halley',
	mass: 2.2e14,
	radius: 50,
	color: '#999999',
	epoch: new Date('1994-02-17T00:00:00.000Z'),
	orbit: {
		base: {
			a: 17.8341442925537 * AU,
			e: 0.967142908462304,
			i: 162.262690579161,
			M: 38.3842644764388, //360 * (438393600 / (75.1 * YEAR * DAY)),
			w: 111.3324851045177,
			o: 58.42008097656843,
		},
		day: {
			a: 0,
			e: 0,
			i: 0,
			M: 0.01308656479244564,
			w: 0,
			o: 0,
		},
	},
};

export const moon = {
	title: 'The Moon',
	name: 'moon',
	mass: 7.3477e22,
	radius: 1738.1,
	color: '#aaaaaa',
	map: 'img/moonmap4k_levels.jpg',
	sideralDay: (27.3215782 * DAY),
	tilt: 1.5424,
	fov: 1,
	relativeTo: 'earth',
	orbitCalculator: MoonRealOrbit,
	osculatingOrbit: true,
	orbit: {
		base: {
			a: 384400,
			e: 0.0554,
			w: 318.15,
			M: 135.27,
			i: 5.16,
			o: 125.08,
		},
		day: {
			a: 0,
			e: 0,
			i: 0,
			M: 13.176358,
			w: (360 / 5.997) / 365.25,
			o: (360 / 18.600) / 365.25,
		},
	},
	getMapRotation(angle) {
		if (angle > 0) {
			return angle - Math.PI;
		}
		return angle + Math.PI;
	},
	customInitialize() {
		if (this.relativeTo !== 'earth') return;
		this.baseMapRotation = this.getMapRotation(this.getAngleTo('earth'));
		this.nextCheck = this.sideralDay;
	},
	customAfterTick(time) {
		if (this.relativeTo !== 'earth') return;
		//when a sideral day has passed, make sure that the near side is still facing the earth. Since the moon's orbit is heavily disturbed, some imprecision occurs in its orbit, and its duration is not always the same, especially in an incomplete scenario (where there are no sun/planets). Therefore, a correction is brought to the base map rotation, tweened so that is is not jerky.
		if (time >= this.nextCheck) {
			this.nextCheck += this.sideralDay;
			TweenMax.to(this, 2, {
				baseMapRotation: this.getMapRotation(this.getAngleTo('earth')),
				ease: Sine.easeInOut,
			});
		}
	},
};
