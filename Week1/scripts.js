const getElement = (identifier = "") => document.querySelector(identifier);

function addTask() {
  let nama = getElement("#nama").value;

  if (!nama) {
      alert("Please enter a task name.");
      return;
  }

  getElement("#kepentingan").value = "gabut";
  getElement("#priority").value = "gabut";
}
getElement("#submit").addEventListener("click", hasil);

function hasil() {
  alert("Filled sucessfully")
}