class Cart {
	constructor(
		items, //массив с товарами в корзине
		cartClass = 'cart', //
		plusClass = 'plus', //
		minusClass = 'minus',//
		deleteClass = 'delete',//
		currency = ''
	) {
		this.items = items,
		this.cartClass = cartClass,
		this.plusClass = plusClass,
		this.minusClass = minusClass,
		this.deleteClass = deleteClass,
		this.currency = 'RUB'
	}

	goodsPlus(art) {
		this.items[art]['count']++
	}
	goodsMinus(art) {
		if (this.items[art]['count'] - 1 == 0) {
			this.goodsDelete(art)
		} else {
			this.items[art]['count']--
		}
	}
	goodsDelete(art) {
		delete this.items[art]
	}
	getTotal() {
		let total = 0
		for (let key in this.items) {
			total += this.items[key]['cout'] * this.items[key]['price']
		}
		return total
	}
	render () {
		let table = document.createElement('table')
		table.classList.add(this.cartClass)
		for (let key in this.items) {
			let goods = this.items[key]
			//ltkftv cnhjre
			const tr = document.createElement('tr')
			//делаем кнопку удалить
			let td = document.createElement('td')
			let button = document.createElement('button')
			button.classList.add(this.deleteClass)
			button.classList.add('button-primary')
			button.innerHTML = 'x'
			button.setAttribute('data-articul', key)
			td.append(button)
			tr.append(td)
			//делаем картинку
			td = document.createElement('td')
			let img = document.createElement('img')
			img.src = goods.image
			td.append(img)
			tr.append(td)


			table.append(tr)
		}
		let tr = document.createElement('tr')
		let td = document.createElement('td')
		td.setAttribute('colspan', 7)
		td.style.textAlign = 'right'
		td.innerHTML = '<span class="total">Total: </span>' + this.getTotal() + ' ' + this.currency
		tr.append(td)
		table.append(tr)
		return table
	}


}