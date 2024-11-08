document.addEventListener("DOMContentLoaded", () => {
  let newWindow;
  let input = document.getElementById("input");
  let button = document.getElementById("button");
  let addTask = document.getElementById("addtask");

  input.addEventListener("change", (e) => {
    console.log(e.target.value);
  });

  button.addEventListener("click", () => {
    newWindow = window.open("https://www.w3schools.com");
  });

  addTask.addEventListener("click", () => {
    window.location.href = "AddTask.html";
  });
});
