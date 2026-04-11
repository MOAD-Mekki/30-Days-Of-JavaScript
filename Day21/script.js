const firstP = document.querySelector("p");
const secondP = document.getElementById("second");
const thirdP = document.getElementById("third");
const fourthP = document.getElementById("fourth");
console.log(firstP , secondP , thirdP , fourthP);

const allP = document.querySelectorAll("p");
console.log(allP);

for (const p of allP) {
    console.log(p.textContent);
}

fourthP.textContent = "Fourth Paragraphe";
