class GridView {
	/**
	* properties
	* @param[array] _tableClass // CSS классы оформления
	* @param[array] data // входные данные
_	* @param[array] _atribute //управляем, что выводим и как из выходных данных data
	* @param[array] _element //куда выводить таблтцу
	* @param[array] _header //заголовок таблицы
	* @param[array] _headerClass // CSS классы заголовка
	*/

	constructor() {
		this._header = ''
		this._headerClass = []
		this._tableClass = []
		this._element = 'body'
		this._atribute = []
	}

/**
* Method set Header
*/

	set header(header) {
		if (typeof header === 'string' && header.trim() != '') {
			this._header = header.trim()
			return true
		}
		return false
	}

/**
* Method set headerClass
*/
	set headerClass(headerClass) {
		if (typeof headerClass === 'object') {
			this._headerClass = headerClass
			return true
		}
		return false
	}

/**
* Method set element
*/
	set element(element) {
		if (document.querySelector(element)) {
			this._element = document.querySelector(element)
			return true
		}
		return false
	}

/**
 * Method for show GridViewTable
 */
	render() {

	}

}