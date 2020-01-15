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
		this.message = "Please enter a valid item name.";
	}
	insert = (subject, amount) => {
		let newNode = new ListNode(subject, amount);
		// when list is empty
		if (this.head === null) {
			this.head = newNode;
			this.current = newNode;
			return this.current;
		} else {
			//insert node on last
			if (this.current.forwardNode === null) {
				// newNode.forwardNode = null;
				this.current.forwardNode = newNode;
				this.current = newNode;
			} else {
				//insert after the current node
				newNode.forwardNode = this.current.forwardNode;
				this.current.forwardNode = newNode;
				this.current = newNode;
			}
			return this.current;
		}
	};
	first = () => {
		this.current = this.head;
		return this.current ? this.current : null;
	};
	last = () => {
		if (this.current === null) return this.current;
		if (this.current.forwardNode === null) {
			return this.current;
		}
		this.current = this.current.forwardNode;
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
		if (this.current === null) return null;
		if (this.current.forwardNode === null) {
			this.previous();
			this.current === this.head
				? (this.current = null)
				: (this.current.forwardNode = null);
			return;
		} else {
			if (this.current === this.head) {
				this.head = this.current.forwardNode;
				this.current = this.head;
			} else {
				let nodeToDel = this.current;
				this.previous();
				this.current.forwardNode = nodeToDel.forwardNode;
			}
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
