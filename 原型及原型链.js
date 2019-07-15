// Foo 构造函数
function Foo() {}

let f1 = new Foo();
let f2 = new Foo();

let o1 = new Object();

function Function() {}

let fun1 = new Function();

function Object() {}

// console.log(1, Foo.prototype === Foo.prototype);
// console.log(2, Foo.prototype.constructor === Foo);
// console.log(3, f1.__proto__ === Foo.prototype);

// Object
// console.log(4, Foo.prototype.__proto__ === Object.prototype);
// console.log(5, Object.prototype.constructor === Object);
// console.log(6, o1.__proto__ === Object.prototype);

// Function
// console.log(7, Function.prototype.constructor === Function);
// console.log(8, fun1.__proto__ === Function.prototype);
// console.log(9, Foo.__proto__ === Function.prototype);


// Foo.__proto__
// Object.__proto__
// Function.__proto__

// Function.prototype

// 因为构造函数是一个对象，所有对象其实都有一个__proto__的属性，__proto__会向上查找，
// 会找一个具体的原型，既然是在招原型，那就会找到构造函数的原型，所有的构造函数的原型，其实都是Function.prototype

