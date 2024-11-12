function addTask() {
  const createOne = prompt("Даалгавар нэмээрэй");
  document.getElementById("Task-container").innerHTML +=
    '<div class="Task-container">' +
    createOne +
    ' <i class="glyphicon glyphicon-trash"></i> ' +
    "</div>";
}
addTask();
