let obg = new List(['one', 'two', 'three', 'four', 'Alex', 'Sonya'])

document.querySelector('body').appendChild(obg.render())

let obg2 = new List2(['one', 'two', 'three', 'four', 'Alex', 'Sonya'], 'superclass')

document.querySelector('body').appendChild(obg2.render())

let obg3 = new List3(['one', 'two', 'three', 'four', 'Alex', 'Sonya'], ['superclass', 'text-center', 'bold', 'fontSize'])

document.querySelector('body').appendChild(obg3.render())