class Calculator {
	constructor(a, b) {
		if (arguments.length !== 2 || a === null || b === null || isNaN(parseInt(a)) || isNaN(parseInt(b)) ) {
			throw new Error("The second and/or third parameter is not a valid number, or there are less than two parameters.");
		}
		this.a = a;
		this.b = b;
	}

	setX(num) {
		if ( num === null || num === undefined || isNaN(parseInt(num))) {
			throw new Error('The parameter was not passed or is an invalid number');
		}
		this.a = num;
	}
	setY(num) {
		if ( num === null || num === undefined || isNaN(parseInt(num))) {
			throw new Error('The parameter was not passed or is an invalid number');
		}
		this.b = num;
	}
	logSum() {
		return console.log(`Sum = ${this.a + this.b}`);
	}
	logMul() {
		return console.log(`Mul = ${this.a * this.b}`);
	}
	logSub() {
		return console.log(`Sub = ${this.a - this.b}`);
	}
	logDiv() {
		if ( this.b === 0) {
			throw new Error('b === 0');
		}
		return console.log(`Div = ${this.a / this.b}`);
	}
}

let calc = new Calculator(4, 2);
console.log(calc.setX(5));
console.log(calc.setY(7));
console.log(calc.logSum());
console.log(calc.logMul());
console.log(calc.logSub());
console.log(calc.logDiv());