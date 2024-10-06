// Stack is a linear Data Structure that follows the last In, First Out (LIFO) principle.This mean the last element added to
// stack is the first one to be removed...

//  Key concepts

// 1  LIFO(Last in , first out)
//  The last item pushed(added) onto stack is the first item popped(removed)
// Basic operations
// Push , pop , Peek , isEmpty, isFull

//  Visualization

// Imagine a stack like this;
// |    5    |  ← Top
// |    4    |
// |    3    |
// |    2    |
// |    1    |

// if you perform a push(6) operation to the stack

// |    6    |  ← Top
// |    5    |
// |    4    |
// |    3    |
// |    2    |
// |    1    |

// if you perform a pop() operation to the stack

// |    5    |  ← Top
// |    4    |
// |    3    |
// |    2    |
// |    1    |

// Time Complexity of Stack Operations:

// Push, Pop, Peek: O(1) (constant time) because these operations are performed on the top of the stack, without the need for searching or shifting elements.

// let arr = [];
// let currentSize = arr.length;
// let max = 10;

// function pushStack(num) {
//   if (currentSize >= max) {
//     console.log("your Array length is full", arr.length);
//     return;
//   }
//   arr[currentSize] = num;
//   currentSize++;
//   console.log(`Pushed ${num} onto the stack`);
// }

// function popStack() {
//   if (currentSize <= 0) {
//     console.log("Stack is already empty", arr.length);
//     return;
//   }
//   currentSize -= 1;
//   const popped = arr[currentSize];
//   arr.length = currentSize;
//   console.log(`popped ${popped} from the stack`);
// }

// pushStack(10);
// pushStack(20);
// pushStack(30);
// pushStack(40);
// pushStack(50);
// pushStack(60);
// pushStack(70);
// pushStack(80);
// pushStack(90);
// pushStack(100);
// popStack();
// popStack();
// popStack();
// popStack();
// popStack();
// popStack();
// popStack();
// popStack();
// popStack();
// popStack();

// // console.log(arr);

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Srack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());

class Marks {
  constructor() {
    this.student = [];
  }

  push(name) {
    this.student.push(name);
  }

  pop() {
    if (this.isEmpty()) {
      return "Marks sheet is empty";
    }
    return this.student.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.student[this.student.length - 1];
  }

  isEmpty() {
    return this.student.length == 0;
  }
}

let studentName = new Marks();

studentName.push("Noman");
studentName.push("Hassan");
studentName.push("Ali Raza");
console.log(studentName.peek());
console.log(studentName.pop());
console.log(studentName.pop());


// =======================   Stack Practice =================================

