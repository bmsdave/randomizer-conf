const users = [
	'@Depict_Web',
	'@volkova_annie',
	'@NichiporovichA',
	'@frontend_u',
	'@DmitryMakhnev',
	'@aleks_air',
	'@George_Novitsky',
	'@marklangovoi',
	'@keeereal',
	'@dandgerson',
	'@Sergey_Scherbo',
	'@n_golubitskiy',
	'@kotchrpk',
	'@Andrew_pirat',
	'@thepocp',
	'@extropia2',
	'@haritonasty',
	'@_IvKusto',
	'@teleginzhenya',
	'@lionskape',
	'@burnmthfck'	
]
	

function getRandomIndex(max) {
	const valueFromMathRandom =  Math.random() * (max);
	return Math.floor(valueFromMathRandom);
}

const index = getRandomIndex(users.length);
const winner = users[index]
console.log(index, winner);

function profOfEqualDistribution () {
	const res = {}
	for (let i = 0; i < 10000; i++) {
		const i = getRandomIndex(users.length);
		if (res[i] === undefined) {
			res[i] = 0
		} else {
			res[i]++;
		}
	}
	console.log(JSON.stringify(res))
}
