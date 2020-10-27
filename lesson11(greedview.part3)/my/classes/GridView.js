class GridView {
	/**
	* properties
	* @param[array] _tableClass // CSS классы оформления
	* @param[array] data // входные данные
_	* @param[array] atribute //управляем, что выводим и как из выходных данных data
	* @param[array] _element //куда выводить таблтцу
	* @param[array] _header //заголовок таблицы
	* @param[array] _headerClass // CSS классы заголовка
	*/

	constructor() {
		this._header = ''
		this._headerClass = []
		this._tableClass = []
		this._element = 'body'
		this.atribute = {}
	}

/**
* Method set Header
*/

	setHeader(header) {
		if (typeof header === 'string' && header.trim() != '') {
			this._header = header.trim()
			return true
		}
		return false
	}

/**
* Method set headerClass
*/
	setHeaderClass(headerClass) {
		if (typeof headerClass === 'object') {
			this._headerClass = headerClass
			return true
		}
		return false
	}

/**
* Method set element
*/
	setElement(element) {
		if (document.querySelector(element)) {
			this._element = element
			return true
		}
		return false
	}

/**
 * Method for show GridViewTable
 */
	render(data) {
		this.setElement(data.element)
		this.setHeaderClass(data.headerClass)
		this.setHeader(data.header)
		this.data = data.data
		this.atribute = data.atribute
		//show header
		if (this._header != '') {
			const header = document.createElement('h1')
			header.textContent = this._header
			this._headerClass.forEach(cssClass => {
				header.classList.add(cssClass)
			})
			document.querySelector(this._element).append(header)
		}
		//show table

		const table = document.createElement('table')
		this._tableClass.forEach(cssClass => {
			table.classList.add(cssClass)
		})
		//create table header

		let trHeader = document.createElement('tr')

		for (let key in this.atribute) {
			let th = document.createElement('th')
			if (this.atribute[key].label) {
				th.textContent = this.atribute[key].label
			} else {
				th.textContent = key
			}
			trHeader.append(th)
		}

		table.append(trHeader)
		// draw table 
		for ( let i = 0; i < this.data.length; i++ ) {
			let dataArr = this.data[i]
			let tr = document.createElement('tr')
			for (let key in this.atribute ) {
				let td = document.createElement('td')
				let value = dataArr[key]
				//есть ли функция в value
				if ( this.atribute[key].value ) {
					value = this.atribute[key].value(dataArr)
				} 
				//атрибут src
				if ( this.atribute[key].src ) {
					td.innerHTML = value
				} else {
					td.textContent = value
				}
				tr.append(td)
			}
			table.append(tr)
		}

		document.querySelector(this._element).append(table)
	}

}