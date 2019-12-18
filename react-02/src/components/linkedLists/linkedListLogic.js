export class ListNode {
	constructor(subject, amount, forwardNode = null) {
		(this.subject = subject),
			(this.amount = amount),
			(this.forwardNode = forwardNode),
			(this.index = 0);
	}
	show = () => {
		return `${this.subject}, ${this.amount}`;
	};
}

export class LinkedList {
	constructor() {
		this.head = null;
	}
	insert = (subject, amount, current) => {
		let tail = current;
		console.log(current);
		let newNode = new ListNode(subject, amount);

		// insert at the begining
		if (tail === null) {
			console.log("first node");
			tail = newNode;
			this.head = tail;
			return tail;
		} else if (tail.forwardNode === null) {
			//move the tail to last node
			console.log("at last");
			tail.forwardNode = newNode;
			tail = tail.forwardNode;
		} else {
			//insert after given current position
			newNode.forwardNode = tail.forwardNode;
			tail.forwardNode = newNode;
		}
		return this.head;
	};

	first = () => {
		return this.head;
	};
	last = () => {
		let tail = this.head;
		while (tail.forwardNode !== null) {
			tail = tail.forwardNode;
		}
		return tail;
	};
	next = current => {
		return current.forwardNode;
	};
	prevous = current => {
		let tail = this.head;
		if (tail.forwardNode === null) return;

		console.log(tail.forwardNode);
		console.log(current);
		while (tail.forwardNode !== current.forwardNode) {
			tail = tail.forwardNode;
		}
		return tail;
	};
}
