const addBtn = document.getElementById("btn");
const removeBtn = document.getElementById("removebtn");

addBtn.addEventListener("click", addStackValue);
removeBtn.addEventListener("click", removeStack);

let data = [];
let currentSize = 0;

function addStackValue() {
  const marks = document.getElementById("para");
  let input = document.getElementById("input").value;

  function push(x) {
    if (currentSize < 10) {
      currentSize++;
      data.push(x);
      marks.innerHTML = data.join(",").trim();
      document.getElementById("input").value = "";
    } else {
      console.log("Stack is full");
    }
  }
  push(input);
}

function removeStack() {
  const marks = document.getElementById("para");
  function pop() {
    if (currentSize > 0) {
      currentSize--;
      data.pop();
      marks.innerHTML = data.join(",");
    } else {
      console.log("Stack is already empty");
    }
  }

  pop();
}
