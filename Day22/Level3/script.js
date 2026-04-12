const challenges = [
  { name: "30 Days Of Python", topics: ["Python","Flask","Numpy","Pandas","Statistics","API","MongoDB"], status: "Done" },
  { name: "30 Days Of JavaScript", topics: ["JavaScript"], status: "Ongoing" },
  { name: "30 Days Of HTML & CSS", topics: ["HTML","CSS"], status: "Coming" },
  { name: "30 Days Of React", topics: ["React"], status: "Coming" },
  { name: "30 Days Of ReactNative", topics: ["ReactNative"], status: "Coming" },
  { name: "30 Days Of Fullstack", topics: ["Fullstack"], status: "Coming" },
  { name: "30 Days Of Data Analysis", topics: ["Data Analysis"], status: "Coming" },
  { name: "30 Days Of Machine Learning", topics: ["Machine Learning"], status: "Coming" }
];

const author = {
  name: "Asabeneh Yetayeh",
  description: "I am an educator, developer, motivator and content creator. I am a life-long learner.",
  titles: ["Educator","Programmer","Developer","Motivator","Content Creator"],
  skills: ["Web Development","Data Analysis","Data Visualization","Programming","Databases","Developing API"],
  qualifications: [
    "MSc. Computer Science Ongoing",
    "BSc. Information and Communication Eng.",
    "MSc. Food Technology",
    "BSc. Food Technology"
  ],
  keywords: ["#HTML","#CSS","#JS","#React","#Node","#MongoDB","#Python","#Flask","#Statistics","#Numpy","#Pandas","#Scikit-learn","#Visualization","#D3.js"]
};

const app = document.getElementById("app");

const h1 = document.createElement("h1");
h1.textContent = "Asabeneh Yetayeh challenges in ";
app.appendChild(h1);

const h2 = document.createElement("h2");
h2.textContent = "30DaysOfJavaScript Challenge";
app.appendChild(h2);

const dateDiv = document.createElement("div");
dateDiv.style.padding = "10px";
dateDiv.style.textAlign = "center";
app.appendChild(dateDiv);

function randomColor() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`;
}
setInterval(() => {
  const now = new Date();
  dateDiv.textContent = now.toLocaleString();
  dateDiv.style.backgroundColor = randomColor();
},1000);

const yearSpan = document.createElement("span");
yearSpan.textContent = "2020";
h1.appendChild(yearSpan);
setInterval(() => {
  yearSpan.style.color = randomColor();
},1000);

challenges.forEach(ch => {
  const box = document.createElement("div");
  box.style.margin = "10px";
  box.style.padding = "10px";
  box.style.border = "1px solid #ccc";
  box.style.fontWeight = "bold";

  if(ch.status==="Done") {
    box.style.backgroundColor = "green";
    box.style.color = "white";
  } else if(ch.status==="Ongoing") {
    box.style.backgroundColor = "yellow";
  } else {
    box.style.backgroundColor = "red";
    box.style.color = "white";
  }

  const title = document.createElement("h3");
  title.textContent = ch.name;
  box.appendChild(title);

  const ul = document.createElement("ul");
  ch.topics.forEach(t=>{
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
  box.appendChild(ul);

  const status = document.createElement("p");
  status.textContent = ch.status;
  box.appendChild(status);

  app.appendChild(box);
});

const authorName = document.createElement("h2");
authorName.textContent = author.name;
app.appendChild(authorName);

const desc = document.createElement("p");
desc.textContent = author.description;
app.appendChild(desc);

const titlesDiv = document.createElement("div");
titlesDiv.innerHTML = "<h3>Titles</h3>";
author.titles.forEach(t=>{
  const p = document.createElement("p");
  p.textContent = t;
  titlesDiv.appendChild(p);
});
app.appendChild(titlesDiv);

const skillsDiv = document.createElement("div");
skillsDiv.innerHTML = "<h3>Skills</h3>";
author.skills.forEach(s=>{
  const p = document.createElement("p");
  p.textContent = s;
  skillsDiv.appendChild(p);
});
app.appendChild(skillsDiv);

const qualDiv = document.createElement("div");
qualDiv.innerHTML = "<h3>Qualifications</h3>";
author.qualifications.forEach(q=>{
  const p = document.createElement("p");
  p.textContent = q;
  qualDiv.appendChild(p);
});
app.appendChild(qualDiv);

const keywordsDiv = document.createElement("div");
keywordsDiv.innerHTML = "<h3>Keywords</h3>";
keywordsDiv.style.display = "flex";
keywordsDiv.style.flexWrap = "wrap";
author.keywords.forEach(k=>{
  const span = document.createElement("span");
  span.textContent = k;
  span.style.margin = "5px";
  span.style.padding = "5px";
  span.style.backgroundColor = randomColor();
  span.style.color = "white";
  span.style.borderRadius = "5px";
  keywordsDiv.appendChild(span);
});
app.appendChild(keywordsDiv);

const details = document.createElement("details");
const summary = document.createElement("summary");
summary.textContent = "More About Author";
details.appendChild(summary);

const extra = document.createElement("p");
extra.textContent = "Check out my LinkedIn or GitHub profile for more.";
details.appendChild(extra);

app.appendChild(details);