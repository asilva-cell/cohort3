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
	}
	insert = (subject, amount, current) => {
		// this.tail = this.head;

		let newNode = new ListNode(subject, amount);

		// when list is empty
		if (this.tail === null) {
			this.tail = newNode;
			this.head = this.tail;
			console.log("head when tail was null", this.head);
			return this.tail;
		} else {
			if (this.tail.forwardNode === null) {
				console.log("curretNode", current, "tail", this.tail);
				// newNode.forwardNode = null;
				current.forwardNode = newNode;
				this.tail = newNode;
				console.log("curretNode", current);
				console.log("tail", this.tail);
			} else {
				console.log("if forward node is not null", current);
				// // 	//insert after given current position
				// 	console.log("from else", current);
				// 	newNode.forwardNode = tail;
				// 	tail.forwardNode = newNode;
			}
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
	// 	prevous = current => {
	// 		let tail = this.head;
	// 		if (tail.forwardNode === null) return;

	// 		while (tail.forwardNode !== current.forwardNode) {
	// 			tail = tail.forwardNode;
	// 		}
	// 		return tail;
	// 	};
}
