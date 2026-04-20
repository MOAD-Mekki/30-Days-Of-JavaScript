const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const country = document.getElementById("country");
const score = document.getElementById("score");
const addBtn = document.getElementById("addBtn");
const warning = document.getElementById("warning");
const leaderboard = document.getElementById("leaderboard");

let players = [];

// Function to render leaderboard
function renderLeaderboard() {
  leaderboard.innerHTML = "";
  players.sort((a, b) => b.score - a.score); // sort by score descending

  players.forEach((player, index) => {
    const playerDiv = document.createElement("div");
    playerDiv.className = "player";

    const infoDiv = document.createElement("div");
    infoDiv.className = "player-info";
    infoDiv.innerHTML = `<strong>${player.firstName} ${player.lastName}</strong> — ${player.country} — ${player.score} — ${player.time}`;
    playerDiv.appendChild(infoDiv);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "player-buttons";

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑";
    delBtn.className = "delete";
    delBtn.onclick = () => {
      players.splice(index, 1);
      renderLeaderboard();
    };
    buttonsDiv.appendChild(delBtn);

    // +5 button
    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+5";
    plusBtn.className = "plus";
    plusBtn.onclick = () => {
      player.score += 5;
      renderLeaderboard();
    };
    buttonsDiv.appendChild(plusBtn);

    // -5 button
    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-5";
    minusBtn.className = "minus";
    minusBtn.onclick = () => {
      player.score -= 5;
      renderLeaderboard();
    };
    buttonsDiv.appendChild(minusBtn);

    playerDiv.appendChild(buttonsDiv);
    leaderboard.appendChild(playerDiv);
  });
}

// Add player
addBtn.addEventListener("click", () => {
  if (!firstName.value || !lastName.value || !country.value || !score.value) {
    warning.style.display = "block";
    return;
  }
  warning.style.display = "none";

  const now = new Date();
  const timestamp = now.toLocaleString("en-US", { 
    month: "short", day: "numeric", year: "numeric", 
    hour: "2-digit", minute: "2-digit" 
  });

  players.push({
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    score: parseInt(score.value),
    time: timestamp
  });

  // Clear inputs
  firstName.value = "";
  lastName.value = "";
  country.value = "";
  score.value = "";

  renderLeaderboard();
});
