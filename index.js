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