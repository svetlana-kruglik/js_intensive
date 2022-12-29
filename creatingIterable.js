//const myIterable = { from: 'aaa', to: 4 };
const myIterable = { from: 1, to: 4 };

myIterable[Symbol.iterator] = function () {
	let arrKeys = Object.values(myIterable);
	let [from, to] = arrKeys;

	if (to < from || !to || !from || typeof from !== 'number' || typeof to !== 'number') {
		throw new Error('Property values do not match conditions');
	}

	return {
		current: this.from,
		last: this.to,

		next() {

			if (this.current <= this.last) {
				return {done: false, value: this.current++}
			} else {
				return {done: true}
			}

		}
	}
}

for (let el of myIterable) {
	console.log(el);
}