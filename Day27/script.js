// Titles and roles to rotate
const titles = ["Asabeneh Yetayeh", "💻 Programmer", "🔥 Motivator", "📚 Educator"];
const techs = ["Redux", "Node", "React", "MongoDB", "Python"];

let titleIndex = 0;
let techIndex = 0;

const titleElement = document.getElementById("title");
const roleElement = document.getElementById("role");
const techNameElement = document.getElementById("techName");

// Change title and role every second
setInterval(() => {
  titleIndex = (titleIndex + 1) % titles.length;
  roleElement.textContent = titles[titleIndex];
}, 1000);

// Change technologies every second
setInterval(() => {
  techIndex = (techIndex + 1) % techs.length;
  techNameElement.textContent = techs[techIndex];
}, 1000);
