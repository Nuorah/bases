function multiply(a, b){
	if((typeof a != "number") || (typeof b != "number")) {
		throwError("First two arguments must be numbers");
	}
	return a*b;
}
var x = multiply(10, 4);
console.log(x);

function throwError(message){
	throw new Error(message)
}

(function(){
	console.log("Auto-invoquée");
})();

var hello = function (name) {
	console.log('Hello ' + name);
};

setTimeout(function () {
// la fonction sera exécutée dans 5000 millisecondes
}, 5000)

function asyncSayHello (name, callback) {
	if (callback && typeof callback === 'function') {
		setTimeout(callback, 5000, name);
	}
}

asyncSayHello('Niko', hello);

