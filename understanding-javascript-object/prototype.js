// A的构造器
var A = function() {
    this.call = function() {
        console.log('A call')
    }
}

// B的构造器
var B = function() {
    this.call = function() {
        console.log('B call')
    }
}

var a = new A()

// B继承A
B.prototype = a;

var b = new B();

var c = {
    call: function() {
        console.log('C call')
    }
}

/* 第一部分开始 */
console.log(b.__proto__ === B.prototype) // true
console.log(b.__proto__ === a) // true 
console.log(a.__proto__ === A.prototype) // true
console.log(A.__proto__ === Function.prototype) // true
console.log(c.__proto__ === Function.prototype) // false
console.log(c.__proto__ === Object.prototype) // true
    /* 第一部分结束 */
console.log()
    /* 第二部分开始 */
console.log(A.__proto__ === Function.prototype) // true
console.log(A.__proto__ === Object.prototype) // false
    /* 第二部分结束 */
console.log()
    /* 第三部分开始 */
console.log(Function.__proto__ === Function.prototype) // true
console.log(Function.__proto__ === Object.prototype) // false
console.log(Object.__proto__ === Function.prototype) // true
    /* 第三部分结束 */
console.log()
    /* 第二部分开始 */
console.log(A.__proto__ === Function.prototype) // true
console.log(A.__proto__ === Object.prototype) // false
    /* 第二部分结束 */
console.log()
    /* 第三部分开始 */
console.log(Function.__proto__ === Function.prototype) // true
console.log(Function.prototype) // true
console.log(Function.__proto__ === Object.prototype) // false
console.log(Object.__proto__ === Function.prototype) // true
    /* 第三部分结束 */