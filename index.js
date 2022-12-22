//task01
function task01 () {

	let a =  prompt('Ведите первое число?', ''),
		b =  prompt('Введите второе число?', '');

	if (a != null && b != null && a !== '' && b !== '' && !isNaN(parseInt(a)) && !isNaN(parseInt(b)) && b % 1 === 0 && 2 <= Number(b) && Number(b) <= 36) {
		let num = Number(a);
		let base = Number(b);

		const resNum = num.toString(base);
		console.log(resNum);
	} else {
		return console.log('Некорректный ввод!');
	}
}

task01();

//task02
function task2 () {
	let arr = [];
	let tempVal = 2;

	while (tempVal) {
		let a =  prompt('Ведите число?', '');

		if (a != null && a !== '' && !isNaN(parseInt(a))) {
			arr.push(a);
			--tempVal;
		} else {
			console.log('Некорректный ввод!');
			tempVal = false;
			break;
		}
	}

	if (arr.length === 2) {
		let [item1, item2] = arr;

		let res1 = +item1 + +item2;
		let res2 = item1 / item2;

		return `Ответ: ${res1}, ${res2}`
	}
}

console.log(task2());