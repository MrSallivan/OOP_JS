//Статические методы
class User {
	static test = true
	constructor(name) {
		this.name = name
	}
	static getRole(email) {
		/**
		 * 
		 * Реализация
		 */
		return 'student'
	}
	static getId(email) {
		/**
		 * 
		 */
		return 'id'
	}
	static getUser(id) {
		/**
		 * 
		 */
		return user
	}
}

const person = new User('Ivan')
console.log(person)

console.log(User.getRole('alex@ex'))

console.log(User.test) // true
console.log(person.test) //undefined

//класс = свойства + методы()+вспомогательные элементы

class Student extends User {
	constructor(name) {
		super()
	}
}
console.log(Student.getRole('test')) //ok статические методы класса наследуются
console.log(Student.test)