class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }
  size() {
    console.log(this._size);
  }

  push_front(val) {
    let new_node = new Node(val);
    new_node.next = this.head;
    this.head = new_node;
    this._size += 1;
  }
  push_back(val) {
    let new_node = new Node(val);
    this._size += 1;
    if (!this.head) {
      this.head = new_node;
      return;
    }
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = new_node;
  }

  print() {
    let cur = this.head;
    while (cur) {
      process.stdout.write(cur.val + " -> ");
      cur = cur.next;
    }
    console.log("None");
  }
}
const Linked = new LinkedList();
Linked.push_front(4);
Linked.push_front(4);
Linked.push_back(8);
Linked.push_back(8);
Linked.push_back(9);
Linked.push_back(8);
Linked.print();
Linked.size();
