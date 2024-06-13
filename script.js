function addingtask() {
  var input = document.getElementById("input-box");
  var list = document.getElementById("task-list");

  if (input.value === "") {
    alert("Can't be empty");
    return;
  }
  var li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
}
