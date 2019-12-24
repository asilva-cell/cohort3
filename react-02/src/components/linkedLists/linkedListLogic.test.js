import { ListNode, LinkedList } from "./linkedListLogic.js";

test("show", () => {
	const listNode = new ListNode("Travel", 20, null);
	expect(listNode.show()).toBe("Travel, 20");
});

test("insert, first, last, next, previous", () => {
	const linkedList = new LinkedList();
	// testing when list is empty
	expect(linkedList.head).toBe(null);
	linkedList.previous();
	linkedList.delete();

	//only one none => first=last
	linkedList.insert("A", 1);
	expect(linkedList.head.subject).toBe("A");
	expect(linkedList.current.subject).toBe("A");
	expect(linkedList.first().subject).toBe("A");
	expect(linkedList.last().subject).toBe("A");
	expect(linkedList.next()).toBe(null);

	//Testing adding a node (D) between 2 nodes (B and C)
	linkedList.previous();
	//test CURRENT

	linkedList.insert("B", 2);
	linkedList.insert("C", 3);

	expect(linkedList.current.subject).toBe("C");
	linkedList.previous();
	linkedList.insert("D", 4);
	expect(linkedList.current.subject).toBe("D");
	expect(linkedList.current.forwardNode.subject).toBe("C");
	expect(linkedList.last().subject).toBe("C");
});
test("delete", () => {
	const linkedList = new LinkedList();

	linkedList.insert("A", 1);
	linkedList.insert("B", 2);
	linkedList.insert("C", 3);
	linkedList.insert("D", 4);

	//delete last node (D)
	expect(linkedList.current.subject).toBe("D");
	linkedList.last();
	linkedList.delete();
	expect(linkedList.current.subject).toBe("C");
	expect(linkedList.current.forwardNode).toBe(null);

	//delete a node (B) between 2 nodes (A and C)
	linkedList.previous();
	linkedList.delete();
	expect(linkedList.current.subject).toBe("A");
	expect(linkedList.current.forwardNode.subject).toBe("C");

	//delete first node of list (A)
	linkedList.first();
	linkedList.delete();
	expect(linkedList.head.subject).toBe("C");
	expect(linkedList.current.subject).toBe("C");
});
test("total", () => {
	const linkedList = new LinkedList();

	linkedList.insert("A", 1);
	linkedList.insert("B", 2);
	linkedList.insert("C", 3);
	linkedList.insert("D", 4);

	linkedList.total();

	expect(linkedList.total()).toBe(10);
});
