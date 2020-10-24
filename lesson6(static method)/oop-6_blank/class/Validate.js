class Validate {
	constructor(a) {
		this.a = a;
	}
	static isNumber(b) {
		return (typeof (b) == 'number') ? true : false
	}

	static isInt(b) {
		return (b ^ 0) === b;
	}
	static isFloat(b) {
		return (b ^ 0) !== b ? true : false
	}
	static isChar(b) {
		return (typeof (b) == 'string') ? b.length === 1 ? true : false : false
	}

	static isString(b) {
		return (typeof (b) == 'string') ? true : false
	}

	static isBoolean(b) {
		return (typeof (b) == 'boolean') ? true : false
	}

	static isArray(b) {
		return (typeof (b) == 'object') ? true : false
	}

	static toMoney(b) {
		let x = String(b).split('')
		let c = 0
		for (let i = x.length - 1; i >= 0; i--) {
			c++
			if ((c % 3) == 0) {
				x.splice(i, 0, ' ')
			}
		}
		let rez = x.join('') + ".00"
		
		return rez
	}
}