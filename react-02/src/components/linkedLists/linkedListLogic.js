export class ListNode {
	constructor(subject, amount) {
		(this.subject = subject),
			(this.amount = amount),
			(this.forwardNode = null),
			(this.index = 0);
	}
	show = () => {
		return `${this.subject}, ${this.amount}`;
	};
}

export class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		// this.current = null;
	}
	insert = (subject, amount, current) => {
		let newNode = new ListNode(subject, amount);
		// when list is empty
		if (this.head === null) {
			newNode.forwardNode = null;
			this.head = newNode;
			this.tail = newNode;
			return newNode;
		} else {
			//insert node on last
			if (current.forwardNode === null) {
				newNode.forwardNode = null;
				current.forwardNode = newNode;
				this.tail = newNode;
			} else {
				//insert after the current node
				newNode.forwardNode = current.forwardNode;
				current.forwardNode = newNode;
			}
			return newNode;
		}
	};
	first = () => {
		return this.head;
	};
	last = () => {
		return this.tail;
	};
	next = current => {
		return current.forwardNode;
	};
}
