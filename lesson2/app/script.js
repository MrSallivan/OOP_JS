const a = {
	'text': 'Hello',
	'color': 'red',
	bold: true,
	'show': function () {
		console.log(this.color)
	}
}

const b = {
	'fontSize': '24px',
	__proto__: a
}

let c = {
	'fontFamily': "Arial",
	__proto__: b
}

console.log(c)
console.log(c.hasOwnProperty('fontFamily'))

//a -> b -> c