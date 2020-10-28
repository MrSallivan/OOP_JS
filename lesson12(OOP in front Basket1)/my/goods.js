const cart = {
	'p92779' : {
		"name": "Офисное кресло Valencia PU Черный",
        "url": "#",
        "image": "./images/val.jpg",
        "price": 13860.00
    },
    "p93039": {
        "name": "Офисное кресло DRIFT PU Черный",
        "url": "#",
        "image": "./images/drift.jpg",
        "price": 13230.00
    },
    "p63553250": {
        "name": "Офисное кресло LONG ",
        "url": "#",
        "image": "./images/long.jpg",
        "price": 13800.00
    },
    "p93127": {
        "name": "Офисное кресло Everprof EP-700 Ткань Синий",
        "url": "#",
        "image": "./images/700.jpg",
        "price": 6758.00
    },
    "p79946990": {
        "name": "Офисное кресло EP-696 Mesh Черный",
        "url": "#",
        "image": "./images/696.jpg",
        "price": 5820.00
    },
    "p6533206": {
        "name": "Офисное кресло Madrid PU Верблюд",
        "url": "#",
        "image": "./images/madrid.jpg",
        "price": 17390.00
    }
}

let out = '<div class="pricing-table row">'
for (let key in cart) {
	out += `<div class="col col-md-6 col-lg-4">`
	out += `<div class="package featured text-center">`
	out += `<h2>${cart[key]['name']}</h2>`
	out += `<img src="${cart[key]['image']}">`
	out += `<p class="price">${cart[key]['price']} RUB</p>`
	out += `<button class="to-cart button-primary" data-articul="${key}">В корзину</button>`
	out += `</div>`
	out += `</div>`
}

	out += '</div>'

	document.querySelector('.goods').innerHTML = out

	const data = {}; // сюда добавляю товары которые в корзину

	document.querySelector('.goods').addEventListener('click', event => {
		if (event.target.classList.contains('to-cart')) {
			let articul = event.target.dataset.articul
			if (data[articul] !== undefined) {
				data[articul]['count']++
			} else {
				data[articul] = cart[articul]
				data[articul]['count'] = 1
			}
			localStorage.setItem('cart', JSON.stringify(data))
		}
		
	})

	
	