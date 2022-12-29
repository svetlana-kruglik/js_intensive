// TASK реализация метода myFilter

Array.prototype.myFilter = function(callback, thisArg) {
	if (typeof callback !== 'function') throw new Error('Callback is not a function');

	let context = thisArg ?? this;

	let resultArr = [];

	for (let i = 0; i < this.length; i++) {
		if (this[i] === undefined) continue;

		let currentItem = callback.call(context, this[i], i, this);

		if (currentItem) resultArr.push(this[i]);
	}

	return console.log(resultArr);
}

const arrData = [0,1,2,3,4,,,,8,9, 10]

arrData.myFilter((el) => {
	return ( el % 2 === 0 )

}, {a:1});