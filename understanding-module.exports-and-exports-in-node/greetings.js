exports.sayHelloInEnglish = function() {
    return "HELLO";
};

exports.sayHelloInSpanish = function() {
    return "Hola";
};

console.log('equivalent1', module.exports == exports) //return true

/*
	re-assign
	it wont change module.exports' referrence and the result in main.js, 
	because require function will return module.exports' object, not exports
*/
exports = "Bonjour";


/*
	it will raise an error in main.js, 
	cause exporting object in greetings.js has changed into a string 
	which has no those functions.
 */
// module.exports = "Bonjour"; 

console.log('module.exports', module.exports)

console.log('exports', exports)

console.log('equivalent2', module.exports == exports) //return false