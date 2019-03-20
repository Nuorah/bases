function multiply(a, b){
	if((typeof a != "number") || (typeof b != "number")) {
		throwError("First two arguments must be numbers");
	}
	return a*b;
}
var x = multiply(10,  'formation', 4);
console.log(x);

function throwError(message){
	throw new Error(message)
}


