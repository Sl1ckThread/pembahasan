const getElement = (identifier = "") => document.querySelector(identifier);

function addTask() {
  let nama = getElement("#nama").value;
  let comment = getElement("#Comment").value;
  
  if (nama && comment) {
    alert("Filled Sucessfully")
  }

  if (!nama && !comment) {
    alert("Please enter a task and comment.");
    return;
  }

  getElement("#kepentingan").value = "gabut";
  getElement("#nama").value = "";
  getElement("#Comment").value = "";
  
}

getElement("#submit").addEventListener("click", addTask);
