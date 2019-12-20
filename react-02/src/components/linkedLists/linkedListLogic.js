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
		this.current = null;
	}
	insert = (subject, amount) => {
		let newNode = new ListNode(subject, amount);
		// when list is empty
		if (this.head === null) {
			this.head = newNode;
			this.current = newNode;
			return;
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
		return this.current;
	};
	last = () => {
		if (this.current.forwardNode === null) return this.current;
		while (this.current.forwardNode !== null) {
			this.current = this.current.forwardNode;
		}
		return this.current;
	};
	next = () => {
		this.current = this.current.forwardNode;
		return this.current;
	};
	previous = () => {
		if (this.current === this.head) return;
		let previous = this.head;
		while (this.current !== previous.forwardNode) {
			previous = previous.forwardNode;
		}
		this.current = previous;
		return this.current;
	};
	delete = () => {
		if (this.current === null) return;
		if (this.current.forwardNode === null) {
			this.previous();
			this.current.forwardNode = null;
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
}
