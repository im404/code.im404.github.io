var obj = {
    count: 10,
    getCount: function() {
        return this.count;
    }
}

var unbindMethod = obj.getCount;
console.log(unbindMethod === obj.getCount) //true

var bindMethod = unbindMethod.bind(obj)

console.log(bindMethod === unbindMethod) // false