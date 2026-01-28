console.log("JS collegato ✅");

const form = document.getElementById("searchForm");
const input = document.getElementById("subjectInput");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = input.value;
  console.log(value);
});


