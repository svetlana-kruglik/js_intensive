function createDebounceFunction(callback, ms) {
	let timeout;
	return function () {
		const funcCall = () => { callback.apply(this, arguments) }
		clearTimeout(timeout);
		timeout = setTimeout(funcCall, ms)
	};
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);

debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);