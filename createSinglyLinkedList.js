class SLNode{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	size() {
		return this.length;
	}

	push(val){
		let newNode = new SLNode(val)

		if(!this.head){
			this.head = newNode
			this.tail = this.head
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}

	pop(){
		if(!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while(current.next){
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift(){
		if(!this.head) return undefined;
		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if(this.length === 0){
			this.tail = null;
		}
		return currentHead;
	}

	unshift(val){
		let newNode = new SLNode(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index){
		if(index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while(counter !== index){
			current = current.next;
			counter++;
		}
		return current;
	}
}

let sl = new SinglyLinkedList();

sl.push(1);
sl.push(2);
sl.push(3);
sl.push(4);
sl.push(5);
console.log('sl',sl);
console.log(sl.size());
sl.pop();
console.log('sl',sl);
console.log(sl.size());
console.log(sl.get(0));
sl.unshift(88);
console.log('sl',sl);
console.log(sl.size());
sl.shift();
console.log('sl',sl);
console.log(sl.size());