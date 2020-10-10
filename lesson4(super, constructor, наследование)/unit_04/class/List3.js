class List3 extends List {
	constructor(item, cssClass) {
		super(item)
		this.item = cssClass
	}
	render() {
		let str = this.cssClass.forEach(item => item.join(', '))

		let ul = super.render().classList.add(str)
		return ul
	}
}