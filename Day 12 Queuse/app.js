let stack = [];
let stackLength = stack.length;

let maxStack = 6;

function push(x) {
  if (stackLength < maxStack) {
    stack[stackLength] = x;
    stackLength++;
  } else {
    console.log("Stack is full");
  }
}

function pop() {
  if (stackLength > 0) {
    for (let i = 0; i < stack.length; i++) {
      stack[i] = stack[i + 1];
    }
    stackLength--;
    stack.length = stackLength;
  } else {
    console.log("Stack is alredy empty");
  }
}

push(1);
push(2);
push(3);
pop();

console.log(stack);

