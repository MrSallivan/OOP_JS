class ModernButton extends Button {
	constructor(width, height, background, value, borderRadius = 0) {
		super(width, height, background, value)
		this.borderRadius = borderRadius
	}
	render() {
		let button2 = super.render()
		button2.style.borderRadius = this.borderRadius
		return button2
	}

}