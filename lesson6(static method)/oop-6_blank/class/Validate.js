class Validate {
	constructor(a) {
		this.a = a;
	}
	static isNumber(b) {
		if (b.match(/^-{0,1}\d+$/)) {
			console.log('valid integer(positive or negative)')
		} else if (b.match(/^\d+\.\d+$/)) {
			console.log('valid float')
		} else {
			console.log('not valid number')
		}
	}
}