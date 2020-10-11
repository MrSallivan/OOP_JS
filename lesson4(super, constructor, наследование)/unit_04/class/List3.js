class List3 extends List {
	constructor(item, cssClass) {
		super(item)
		this.cssClass = cssClass
	}
	render() {
		let str = this.cssClass.join(' ')
		console.log(str)
		let ul = super.render()
		ul.setAttribute('class', str)
		return ul
	}
}