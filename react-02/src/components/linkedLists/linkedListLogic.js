export class ListNode {
	constructor(subject, amount) {
		this.subject = subject;
		this.amount = amount;
		this.forwardNode = null;
	}
	show = () => {
		return `${this.subject}, ${this.amount}`;
	};
}

export class LinkedList {
	constructor() {
		this.head = null;
		this.current = this.head;
		this.message = "Your list in empty. Please enter an item below.";
	}

	insert = (subject, amount) => {
		let newNode = new ListNode(subject, amount);
		// when list is empty
		if (this.head === null) {
			this.head = newNode;
			this.current = newNode;
		} else {
			//insert node on last
			if (this.current.forwardNode === null) {
				this.current.forwardNode = newNode;
				this.current = newNode;
			} else {
				//insert after the current node
				newNode.forwardNode = this.current.forwardNode;
				this.current.forwardNode = newNode;
				this.current = newNode;
			}
		}
		this.message = `${this.current.subject} added.`;
		return this.current;
	};
	first = () => {
		this.current = this.head;

		return this.current ? this.current : null;
	};
	last = () => {
		while (this.current.forwardNode !== null) {
			this.current = this.current.forwardNode;
		}
		return this.current;
	};
	next = () => {
		if (this.current === null) return this.current;
		if (this.current.forwardNode === null) {
			return this.current;
		}
		this.current = this.current.forwardNode;
		return this.current;
	};
	previous = () => {
		if (this.current === this.head) {
			return this.current ? this.current : null;
		}
		let previous = this.head;
		while (this.current !== previous.forwardNode) {
			previous = previous.forwardNode;
		}
		this.current = previous;
		return this.current ? this.current : null;
	};
	delete = () => {
		if (this.current === this.head && this.current.forwardNode === null) {
			this.head = null;
			this.current = this.head;
			this.message = "Your list in empty. Please enter an item below.";
			return;
		}
		if (this.current === this.head) {
			this.head = this.current.forwardNode;
			this.current = this.head;
			return;
		}
		if (this.current.forwardNode === null) {
			this.previous();
			this.current.forwardNode = null;
			return;
		} else {
			let nodeToDel = this.current;
			this.previous();
			this.current.forwardNode = nodeToDel.forwardNode;
			return;
		}
	};
	total = () => {
		let totalAmount = 0;
		if (this.current === null) return totalAmount;
		let currentNode = this.current;
		this.current = this.head;
		while (this.current.forwardNode !== null) {
			totalAmount += this.current.amount;
			this.next();
		}
		totalAmount += this.current.amount;
		this.current = currentNode;
		return totalAmount;
	};
}
