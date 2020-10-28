if (localStorage.getItem('cart')) {
	const cart = JSON.parse(localStorage.getItem('cart'))
	let shopCart = new Cart(cart)
	document.querySelector('.cart-out').innerHTML = ''
	document.querySelector('.cart-out').append(shopCart.render())

	document.querySelector('.cart-out').addEventListener('click', event => {
		let target = event.target
		if (target.classList.contains('delete')) {
			shopCart.goodsDelete(target.dataset['articul'])
			document.querySelector('.cart-out').innerHTML = ''
			document.querySelector('.cart-out').append(shopCart.render())
			localStorage.setItem('cart', JSON.stringify(shopCart.items))
			return true
		} else if(target.classList.contains('plus')) {
			shopCart.goodsPlus(target.dataset['articul'])
			document.querySelector('.cart-out').innerHTML = ''
			document.querySelector('.cart-out').append(shopCart.render())
			localStorage.setItem('cart', JSON.stringify(shopCart.items))
			return true
		} else if(target.classList.contains('minus')) {
			shopCart.goodsMinus(target.dataset['articul'])
			document.querySelector('.cart-out').innerHTML = ''
			document.querySelector('.cart-out').append(shopCart.render())
			localStorage.setItem('cart', JSON.stringify(shopCart.items))
			return true
		}
	})
}