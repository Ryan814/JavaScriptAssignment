'use strict'

function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var replaceButton = document.createElement("button");
  var removeButton = document.createElement("button");
  var input = document.getElementById("input").value;

  //TodoInput
  if (input == "") {
    input = "廢文一篇";
  }

  span.innerHTML = input;
  todo.appendChild(span);
  var status = document.getElementById("urgent").checked;
  if (status == true){
    span.style.color="red";
  }else{
    span.style.color = "blue";
  }

  //ReplaceButton
  replaceButton.onclick = function () {
    var input = document.getElementById("input").value;
    if (input == "") {
      alert("你並沒有輸入任何文字");
      return;
  } 
  this.parentNode.firstChild.innerHTML = input;
  document.getElementById("input").value = "";
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);

  //RemoButton
  removeButton.onclick = function () {
    if (confirm('是否確定完成？')) {
      todo.firstChild.style.color = "red";
      todo.removeChild(todo.childNodes[1]);
      todo.removeChild(this);
    } 
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);

  //AddTodoToList
  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}