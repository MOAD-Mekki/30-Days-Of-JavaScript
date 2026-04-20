// Example dataset (shortened for demo)
const countries = [
  {
    name: "Finland",
    capital: "Helsinki",
    languages: ["Finnish", "Swedish"],
    population: 5491817,
    description: "A Nordic country known for education and technology."
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    languages: ["English", "Swahili"],
    population: 47251000,
    description: "Located in East Africa, famous for wildlife safaris."
  },
  {
    name: "Uganda",
    capital: "Kampala",
    languages: ["English", "Swahili"],
    population: 33860700,
    description: "A landlocked country in East Africa with rich culture."
  },
  {
    name: "Tanzania",
    capital: "Dodoma",
    languages: ["Swahili", "English"],
    population: 55155000,
    description: "Home to Mount Kilimanjaro and Serengeti National Park."
  }
];

const container = document.getElementById("countriesContainer");
const chartContainer = document.getElementById("chartContainer");
const searchInput = document.getElementById("search");

// Render countries
function renderCountries(list) {
  container.innerHTML = "";
  list.forEach(country => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `
      <h3>${country.name}</h3>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Languages:</strong> ${country.languages.join(", ")}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p>${country.description}</p>
    `;
    card.addEventListener("click", () => {
      alert(`You clicked on ${country.name}`);
      renderChart([country]); // show chart for that country
    });
    container.appendChild(card);
  });
}

// Render bar chart
function renderChart(list) {
  chartContainer.innerHTML = "<h3>Population Chart</h3>";
  const maxValue = Math.max(...list.map(c => c.population));
  list.forEach(c => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.width = `${(c.population / maxValue) * 500}px`;
    bar.textContent = `${c.name}: ${c.population.toLocaleString()}`;
    chartContainer.appendChild(bar);
  });
}

// Initial render
renderCountries(countries);
renderChart(countries);

// Search functionality
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(query) ||
    c.capital.toLowerCase().includes(query) ||
    c.languages.some(lang => lang.toLowerCase().includes(query))
  );
  renderCountries(filtered);
  renderChart(filtered.length ? filtered : countries);
});

// Sorting
document.getElementById("nameBtn").addEventListener("click", () => {
  const sorted = [...countries].sort((a, b) => a.name.localeCompare(b.name));
  renderCountries(sorted);
  renderChart(sorted);
});

document.getElementById("capitalBtn").addEventListener("click", () => {
  const sorted = [...countries].sort((a, b) => a.capital.localeCompare(b.capital));
  renderCountries(sorted);
  renderChart(sorted);
});

document.getElementById("populationBtn").addEventListener("click", () => {
  const sorted = [...countries].sort((a, b) => b.population - a.population);
  renderCountries(sorted);
  renderChart(sorted);
});
