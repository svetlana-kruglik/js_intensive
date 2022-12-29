// Сложность функции selectFromInterval - O(n)

function selectFromInterval(arr, a, b) {
	let filtered;
	let ArrayOfNumbers = arr.every(item => typeof item === "number");

	if (!Array.isArray(arr) || !ArrayOfNumbers) {
		throw new Error('The passed array is not an array or the array values are not valid numbers');
	} else if (!Number(a) || !Number(b) && typeof a !== 'number' || typeof b !== 'number' && isNaN(parseInt(a)) || isNaN(parseInt(b))) {
		throw new Error('The second and/or third argument of the function is not a valid number');
	} else {
		if (a < b) {
			filtered = arr.filter(function (item) {
				return item >= a && item <= b;
			});
		} else if (b < a) {
			filtered = arr.filter(function (item) {
				return  item >= b && item <= a;
			});
		}
	}

	return console.log(filtered);
}
selectFromInterval([1, 3, 5], 5, 2);
selectFromInterval([-2, -15, 0, 4], -13, -5);
selectFromInterval(['aaa'], 2, 3);