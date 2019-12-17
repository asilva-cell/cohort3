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
test("last", () => {
	expect(linkedList.head.forwardNode).toBe(null);

	// last funtion returns the head
	let last = linkedList.last("Cars", 10);
	expect(last.forwardNode.subject).toBe("Cars");
});
test("next", () => {
	// expect(linkedList.forwardNode.subject).toBe("Cars");
	console.log(linkedList);
	// last funtion returns the head
	let next = linkedList.next("Pets", 2);
	console.log(next);
	expect(next.forwardNode.subject).toBe("Cars");
});
