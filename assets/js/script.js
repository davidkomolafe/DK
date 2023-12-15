// navigation
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

//Project Filter
let mixerprojects = mixitup(".project-box", {
  selectors: {
    target: ".project-details",
  },
  animation: {
    duration: 300,
  },
});

const activeproject = document.querySelectorAll(".project-list");

function activLink() {
  activeproject.forEach((item) => item.classList.remove("active-project"));
  this.classList.add("active-project");
}
activeproject.forEach((item) => item.addEventListener("click", activLink));

// Change Page Theme
const changeTheme = document.querySelector(".toggle-btn");
const toggleDark = document.getElementById("moon");
const toggleLight = document.getElementById("sunny");

changeTheme.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleDark.classList.toggle("close");
  toggleLight.classList.toggle("close");
});
