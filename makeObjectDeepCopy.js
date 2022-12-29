let obj1 = {
	string: 'a',
	array: ['1', [2, 3]],
	object: {b: 2, c:{d: [2, 3]}},
	date: new Date(),
	function: function(){
		return console.log('hello');
	},
};

//Сложность функции makeObjectDeepCopy - O(n^2)

function makeObjectDeepCopy(obj) {

	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}

	if (obj instanceof Date) {
		return new Date(obj.getTime());
	}

	if (obj instanceof Array) {
		return obj.reduce((newArr, item, i) => {
			newArr[i] = makeObjectDeepCopy(item);
			return newArr;
		}, []);
	}

	if (obj instanceof Object) {
		let arrKeys = Object.keys(obj);
		return arrKeys.reduce((newObj, item) => {
			newObj[item] = makeObjectDeepCopy(obj[item]);
			return newObj;
		}, {})
	}
}

console.log(makeObjectDeepCopy(obj1));