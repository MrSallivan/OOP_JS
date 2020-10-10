class List {
	constructor(item) {
	this.item = item
	}
	render() {
		let ulElem = document.createElement('ul')
		for(let i of this.item) {
			let liEl = document.createElement('li')
			liEl.innerText = i
			ulElem.appendChild(liEl)
		}
		return ulElem
	}
}