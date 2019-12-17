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

	first = (subject, amount, index) => {
		console.log("before", this.head);
		let newNode = new ListNode(subject, amount);
		newNode.forwardNode = this.head;
		this.head = newNode;
		console.log("after", this.head);
		return this.head;
	};
	last = (subject, amount) => {
		let newNode = new ListNode(subject, amount);
		if (this.head === null) {
			this.head = newNode;
			return this.head;
		}

		let tail = this.head;
		while (tail.forwardNode !== null) {
			tail = tail.forwardNode;
		}
		tail.forwardNode = newNode;

		return this.head;
	};
	next = (subject, amount) => {
		return "next";
	};
}
