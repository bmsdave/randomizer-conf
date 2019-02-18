const users = [
	'@ariarzer',
	'@Miss_Vairo',
	'@MrMeison',
	'@semaperepelitsa',
	'@4erty6',
	'@geralexndr',
	'@DmitryMakhnev',
	'@id2473',
	'@zelarky',
	'@_sonofjesus',
	'@Pavel_Evdokimov',
	'@aleks_air',
	'@SweetSmileXD',
	'@amGeorgeJoJo',
	'@frmhding',
	'@whois42',
	'@marklangovoi',
	'@arteg'
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
