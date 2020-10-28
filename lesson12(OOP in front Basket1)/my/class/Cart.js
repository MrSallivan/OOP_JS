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
			total += this.items[key]['count'] * this.items[key]['price']
		}
		return total
	}
	render () {
		let table = document.createElement('table')
		table.classList.add(this.cartClass)
		for (let key in this.items) {
			let goods = this.items[key]
			//
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
			//делаем название товара
			td = document.createElement('td')
			let caption = document.createElement('h4')
			caption.innerHTML = goods.name
			td.append(caption)
			tr.append(td)
			//делаем минус
			td = document.createElement('td')
			button = document.createElement('button')
			button.classList.add(this.minusClass)
			button.classList.add('button-primary')
			button.innerHTML = '-'
			button.setAttribute('data-articul', key)
			td.append(button)
			tr.append(td)
			//делаем кол-во
			td = document.createElement('td')
			let vol = document.createElement('span')
			vol.innerHTML = goods.count
			td.append(vol)
			tr.append(td)
			//делаем плюс
			td = document.createElement('td')
			button = document.createElement('button')
			button.classList.add(this.plusClass)
			button.classList.add('button-primary')
			button.innerHTML = '+'
			button.setAttribute('data-articul', key)
			td.append(button)
			tr.append(td)
			//делаем тотал
			td = document.createElement('td')
			let smtotal = document.createElement('span')
			smtotal.innerHTML = goods.count * goods.price + ' ' + this.currency
			td.append(smtotal)
			tr.append(td)
			//
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