const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

const app = document.getElementById("app");

// Heading
const h1 = document.createElement("h1");
h1.textContent = "WORLD COUNTRIES LIST";
app.appendChild(h1);

// Info text
const info = document.createElement("h2");
info.textContent = `Total Number of countries: ${countries.length}`;
app.appendChild(info);

// Buttons
const btnStart = document.createElement("button");
btnStart.textContent = "STARTING WORD";
const btnSearch = document.createElement("button");
btnSearch.textContent = "SEARCH WITH ANY WORD";
app.appendChild(btnStart);
app.appendChild(btnSearch);

// Search bar
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Search country ...";
app.appendChild(input);

// Container for countries
const container = document.createElement("div");
app.appendChild(container);

document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f0f4ff";
document.body.style.textAlign = "center";
document.body.style.padding = "20px";

h1.style.color = "#333";
h1.style.fontSize = "32px";
h1.style.marginBottom = "10px";

info.style.color = "#555";
info.style.marginBottom = "20px";

[btnStart, btnSearch].forEach(btn => {
  btn.style.backgroundColor = "purple";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.padding = "10px 20px";
  btn.style.margin = "10px";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
});

input.style.padding = "10px";
input.style.width = "250px";
input.style.margin = "20px";
input.style.borderRadius = "5px";
input.style.border = "1px solid #ccc";

container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))";
container.style.gap = "15px";
container.style.marginTop = "20px";

function renderCountries(list) {
  container.innerHTML = "";
  list.forEach(country => {
    const card = document.createElement("div");
    card.textContent = country.toUpperCase();
    card.style.backgroundColor = "#4a90e2";
    card.style.color = "white";
    card.style.padding = "20px";
    card.style.borderRadius = "8px";
    card.style.fontWeight = "bold";
    card.style.boxShadow = "2px 2px 6px rgba(0,0,0,0.2)";
    container.appendChild(card);
  });
}

// Initial render
renderCountries(countries);

// Filter by starting word
btnStart.addEventListener("click", () => {
  const query = input.value.toLowerCase();
  const filtered = countries.filter(c => c.toLowerCase().startsWith(query));
  info.textContent = `Countries start with ${query} are ${filtered.length}.`;
  renderCountries(filtered);
});

// Filter by any word
btnSearch.addEventListener("click", () => {
  const query = input.value.toLowerCase();
  const filtered = countries.filter(c => c.toLowerCase().includes(query));
  info.textContent = `Countries containing '${query}' are ${filtered.length}.`;
  renderCountries(filtered);
});
