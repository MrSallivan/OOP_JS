const prop = new Test()
prop.testProp = 'alex'
console.log(prop)
console.log(prop.testProp)

const test2 = new Test2();
console.log(test2.testProp = 'bbb');
console.log(test2);

console.log(test2.testProp = '');
console.log(test2);

console.log(test2.setTestProp(''));
console.log(test2);

console.log(test2.testProp)

const test3 = new Test3()
test3.testProp = 'Dima'
console.log(test3)
console.log(test3.testProp)

const test4 = new Test4()
test4.testProp = 5
console.log(test4)
console.log(test4.testValue)



