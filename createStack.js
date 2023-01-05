class MyStackNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class MyStack {
	constructor() {
		this.root = null;
		this.n = 0;
	}

	isEmpty() {
		return this.n === 0;
	}

	size() {
		return this.n;
	}

	push(value) {
		let oldFirst = this.root;
		this.root = new MyStackNode(value);
		this.root.next = oldFirst;
		this.n++;
	}

	pop() {
		if (this.isEmpty()) return null;
		let oldFirst = this.root;
		this.root = oldFirst.next;
		this.n--;
		return  oldFirst.value;
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}

		let oldFirst = this.root;
		return oldFirst.value;
	}
 }

let stackInst = new MyStack();
console.log('size',stackInst.size());
console.log('isEmpty',stackInst.isEmpty());
stackInst.push(1)
stackInst.push(2);
stackInst.push(3);
stackInst.push(4);
stackInst.push(true);
stackInst.push('stack');
stackInst.push(false);
console.log('stackInst', stackInst);
console.log('size',stackInst.size());
console.log('isEmpty',stackInst.isEmpty());
stackInst.pop();
stackInst.pop();
stackInst.push(99);
console.log('stackInst',stackInst);
console.log('size',stackInst.size());
console.log(stackInst.peek());