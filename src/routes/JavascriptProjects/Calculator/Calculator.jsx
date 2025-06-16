import React, { useState } from "react";

// Node and LinkedList class definitions
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
    return this._size;
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

  // Convert the linked list into an array to display in React
  toArray() {
    let arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    return arr;
  }
}

// React Component to display the LinkedList
export default function Calculator() {
  const [linkedList, setLinkedList] = useState(() => new LinkedList());

  const [value, setValue] = useState(""); // For capturing input

  const listArray = linkedList.toArray(); // Get the array representation of the list

  // Function to handle pushing a new node to the front
  const handlePushFront = () => {
    if (value) {
      // Create a new instance to trigger re-render
      const newLinkedList = new LinkedList();
      newLinkedList.head = linkedList.head; // Copy the existing list
      newLinkedList._size = linkedList._size;

      newLinkedList.push_front(Number(value)); // Add the new element
      setLinkedList(newLinkedList); // Update the state with the new LinkedList instance

      setValue(""); // Clear input field
    }
  };

  // Function to handle pushing a new node to the back
  const handlePushBack = () => {
    if (value) {
      // Create a new instance to trigger re-render
      const newLinkedList = new LinkedList();
      newLinkedList.head = linkedList.head; // Copy the existing list
      newLinkedList._size = linkedList._size;

      newLinkedList.push_back(Number(value)); // Add the new element
      setLinkedList(newLinkedList); // Update the state with the new LinkedList instance

      setValue(""); // Clear input field
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <h1>Linked List</h1>
      {/* Display Linked List */}
      <div className="flex">
        {listArray.map((value, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center m-2 text-black"
          >
            {value}
          </div>
        ))}
      </div>
      <div className="mt-4">Size: {linkedList.size()}</div>

      {/* Input and buttons to push values */}
      <div className="mt-4 flex items-center">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-2 text-black"
          placeholder="Enter a value"
        />
        <button
          onClick={handlePushFront}
          className="ml-2 bg-green-500 text-white p-2 rounded"
        >
          Push Front
        </button>
        <button
          onClick={handlePushBack}
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Push Back
        </button>
      </div>
    </div>
  );
}
