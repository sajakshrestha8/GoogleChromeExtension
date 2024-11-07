document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("input");
  let button = document.getElementById("button");

  input.addEventListener("change", (e) => {
    console.log(e.target.value); // Corrected here
  });

  button.addEventListener("click", () => {
    console.log("Button clicked");
  });
});
