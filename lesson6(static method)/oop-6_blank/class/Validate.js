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
		let x = String(b)
		let drob = x.indexOf('.')
		let rez = ''
		let conez = ''
		let xcel = ''
		let str
		let c = 0
		if (drob == -1) {
			conez += ".00"
			xcel = x
		} else {
			for (let i = 0; i < drob; i++) {
				xcel += x[i]
			}
			for (let i = drob; i <= x.length - 1; i++) {
				conez += x[i]
			}
		}
		str = xcel.split('')
		for (let i = str.length - 1; i >= 0; i--) {
			c++
			if ((c % 3) == 0) {
				str.splice(i, 0, ' ')
			}
		}
		rez = str.join('') + conez
		return rez
	}
}