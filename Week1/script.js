// Utility function to select elements
const getElement = (identifier = "") => document.querySelector(identifier);

// Function to add a new task to the list
function addTask() {
  // Get values from the form
  let taskName = getElement("#taskName").value;
  let priority = getElement("#priority").value;
  let description = getElement("#description").value;

  // Validate that task name is filled in
  if (!taskName) {
    alert("Please enter a task name.");
    return;
  }

  // Create a new list item
  let taskItem = document.createElement("li");
  taskItem.innerHTML = `<strong>${taskName}</strong> - ${description} <br> <em>Priority: ${priority}</em>`;

  // Add the task item to the task list
  getElement("#taskList").appendChild(taskItem);

  // Clear the form fields
  getElement("#taskName").value = "";
  getElement("#description").value = "";
  getElement("#priority").value = "Low";
}

// Attach the event listener to the add button
getElement("#addTaskButton").addEventListener("click", addTask);
