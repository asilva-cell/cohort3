import { ListNode, LinkedList } from "./linkedListLogic.js";

test("show", () => {
	const listNode = new ListNode("Travel", 20, null);
	expect(listNode.show()).toBe("Travel, 20");
});

const linkedList = new LinkedList();

test("insert", () => {
	// testin when list is empty
	expect(linkedList.head).toBe(null);
	let nodeA = linkedList.insert("A", 10, linkedList.head);
	expect(linkedList.head).toBe(nodeA);

	//only one none => first=last
	expect(linkedList.first()).toBe(nodeA);
	expect(linkedList.last()).toBe(nodeA);

	//only one none => next=previous=null
	expect(linkedList.next(nodeA)).toBe(null);
	expect(linkedList.prevous(nodeA)).toBe(undefined);

	//Testing adding a second node after A
	let nodeB = linkedList.insert("B", 20, nodeA);
	expect(linkedList.first()).toBe(nodeA);
	expect(linkedList.last()).toBe(nodeB);
	expect(linkedList.prevous(nodeB)).toBe(nodeA);

	//testing new node between 2 nodes
	let nodeC = linkedList.insert("C", 20, nodeA);
	expect(linkedList.next(nodeC)).toBe(nodeB);
	expect(linkedList.prevous(nodeC)).toBe(nodeA);

	let nodeD = linkedList.insert("D", 20, nodeB);

	expect(linkedList.prevous(nodeD)).toBe(nodeB);
	expect(linkedList.tail.subject).toBe(nodeD.subject);
});
