// ======================  Practice  =====================

// Remove Adjacent Duplicates in String Using Stack
// Problem: Given a string, repeatedly remove adjacent duplicate characters. Return the final string after all possible duplicate removals.

let str = "abbaca";
let strStack = [];

for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);

  if (strStack.length > 0 && strStack[strStack.length - 1] == str[i]) {
    strStack.pop();
  } else {
    strStack.push(str[i]);
  }
}

let result = strStack.join("");
// console.log(result);

// Simplify Directory Path
// Problem: Given a Unix-style absolute file path, simplify it using a stack. Return the canonical path.

let value = "/home/";
let stack = [];

let component = value.split("/");
for (let i = 0; i < component.length; i++) {
  let part = component[i];
  if (part === "..") {
    if (stack.length > 0) {
      stack.pop();
    }
  } else if (part !== "" && part !== ".") {
    stack.push(part);
  }
}

let finalComponent = "/" + stack.join("/");
console.log(finalComponent);

function validComponents(value) {
  let stack = [];

  let component = value.split("/");
  for (let i = 0; i < component.length; i++) {
    if (component[i] === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if ((component[i] !== "") & (component[i] !== ".")) {
      stack.push(component[i]);
    }
  }

  return "/" + stack.join("/");
}

console.log(validComponents("/home/"));
