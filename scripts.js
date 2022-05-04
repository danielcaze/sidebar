let button = document.querySelector("#button")
let sidebar = document.querySelector(".sidebar")
let search = document.querySelector("#search_icon")

button.addEventListener("click", () => sidebar.classList.toggle("open"))

search.addEventListener("click", () => sidebar.classList.toggle("open"))