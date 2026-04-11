const h1 = document.querySelector("h1");

const yearText = h1.textContent.match(/\d{4}/)[0];

h1.innerHTML = h1.innerHTML.replace(yearText, `<span id="year">${yearText}</span>`);

const yearSpan = document.getElementById("year");

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

setInterval(() => {
    yearSpan.style.color = randomColor();
},1000);

const dateDiv = document.createElement("div");
dateDiv.style.padding = "10px";
dateDiv.style.marginTop = "10px";
dateDiv.style.textAlign = "center";
document.body.appendChild(dateDiv);

setInterval(() => {
    const now = new Date();
    dateDiv.textContent = now.toLocaleString();
    dateDiv.style.color = randomColor();
},1000)

const listItems = document.querySelectorAll("ul li");

listItems.forEach(li => {
  if (li.textContent.includes("Done")) {
    li.style.backgroundColor = "green";
    li.style.color = "white";
  } else if (li.textContent.includes("Ongoing")) {
    li.style.backgroundColor = "yellow";
  } else if (li.textContent.includes("Coming")) {
    li.style.backgroundColor = "red";
    li.style.color = "white";
  }
  
  li.style.margin = "5px 0";
  li.style.padding = "5px";
  li.style.listStyle = "none";
});
