import { ListNode, LinkedList } from "./linkedListLogic.js";

test("show", () => {
	const listNode = new ListNode("Travel", 20, null);
	expect(listNode.show()).toBe("Travel, 20");
});

const linkedList = new LinkedList();
test("first", () => {
	expect(linkedList.head).toBe(null);
	let first = linkedList.first("Housing", 5);
	expect(first.subject).toBe("Housing");
	expect(first.forwardNode).toBe(null);
});
test("insert", () => {
	// console.log(linkedList);
	expect(linkedList.head).toBe(null);
	let node1 = linkedList.insert("A", 10, linkedList.head);
	expect(linkedList.head).toBe(node1);

	//only one none => first=last
	expect(linkedList.first()).toBe(node1);
	expect(linkedList.last()).toBe(node1);

	//only one none => next=previous=null
	expect(linkedList.next(node1)).toBe(null);
	expect(linkedList.prevous(node1)).toBe(undefined);

	let node2 = linkedList.insert("B", 20, node1);
	expect(linkedList.first()).toBe(node1);
	expect(linkedList.last()).toBe(node1.forwardNode);

	expect(linkedList.next(node1)).toBe(node1.forwardNode);

	expect(linkedList.prevous(node2)).toBe(node1);

	let node3 = linkedList.insert("C", 20, node2);
	expect(linkedList.prevous(node3)).toBe(node2);
	let node4 = linkedList.insert("D", 20, node3);
	expect(linkedList.prevous(node4)).toBe(node3);
});
test("next", () => {
	// expect(linkedList.forwardNode.subject).toBe("Cars");
	console.log(linkedList);
	// last funtion returns the head
	let next = linkedList.next("Pets", 2);
	console.log(next);
	expect(next.forwardNode.subject).toBe("Cars");
});
