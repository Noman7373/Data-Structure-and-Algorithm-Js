// Deleting the element an array

const btn = document.getElementById("btn");

btn.addEventListener("click", deleteElement);

function deleteElement() {
  const inputTwo = parseInt(document.getElementById("inputTwo").value);
  let data = [1, 2, 3, 4, 5, 6, 7];
  if (inputTwo >= 0 && inputTwo < data.length) {
    for (let i = inputTwo; i < data.length - 1; i++) {
      data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    console.log(data);
  } else {
    console.log("Number not valid");
  }
  return data;
}
