name = 'porsche'

var globalFunc = function() {
    return this.name;
}

console.log(globalFunc())

var obj = {
    name: 'test',
    func() {
        return this.name //this指向obj这个通过字面量形式创建的对象
    },
    globalFunc: globalFunc
}

// test
console.log(obj.func())

// test
console.log(obj.globalFunc())


var Phone = function() {
    this.version = 'Xs Max';
    this.show_version = function() {
        return this.version; //this指向由Phone构造器实例化的对象
    }
}

var iphone = new Phone();

// Xs Max
console.log(iphone.show_version());