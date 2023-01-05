class MyQueueNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class MyQueue {
	constructor() {
		this.first = null;
		this.last = null;
		this.n = 0;
	}

	isEmpty() {
		return this.first == null;
	}

	size() {
		return this.n;
	}

	enqueue(value) {
		let oldLast = this.last;
		this.last = new MyQueueNode(value);

		if (this.isEmpty()) this.first = this.last;
		else oldLast.next = this.last;

		this.n++;
	}

	dequeue() {
		if (this.isEmpty()) {
			this.last = null;
			return null;
		}

		let itemValue = this.first.value;
		this.first = this.first.next;

		this.n--;

		return itemValue;
	}
	front() {
		if (this.isEmpty()) {
			return null;
		}

		return this.first.value
	}

}

let queue = new MyQueue();
console.log(queue);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(true);
queue.enqueue('string');
console.log(queue);
queue.dequeue();
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.front());