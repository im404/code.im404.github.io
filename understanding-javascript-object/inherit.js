// A的构造器
var A = function() {
    this.call = function() {
        console.log('A call')
    }
}

// B的构造器
var B = function() {}

// B继承A
B.prototype = new A();

var b = new B();

// A call
b.call()