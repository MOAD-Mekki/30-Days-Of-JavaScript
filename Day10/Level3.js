const countries = [
  {
    name: 'Finland',
    capital: 'Helsinki',
    languages: ['Finnish', 'Swedish'],
    population: 5536146
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    languages: ['Swedish'],
    population: 10099265
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    languages: ['Norwegian'],
    population: 5421241
  },
  {
    name: 'Belgium',
    capital: 'Brussels',
    languages: ['Dutch', 'French', 'German'],
    population: 11555997
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    languages: ['English', 'French'],
    population: 38005238
  }
];

const languages = countries.flatMap((country) => country.languages);
const uniqueLanguages = new Set(languages);
console.log(`There are ${uniqueLanguages.size} Languages`);

function mostSpokenLanguages(countries,limite){
    const languages = countries.flatMap((country) => country.languages);

    const spokenLanguages = new Map();
    for (const lang of languages){
        spokenLanguages.set(lang ,
             (spokenLanguages.get(lang) || 0) + 1);
    }
    const result = [...spokenLanguages].map(([language,count]) => ({
        language: language,
        count: count
    })
);
return result
    .sort((a,b) => b.count - a.count)
    .slice(0,limite);
}
console.log(mostSpokenLanguages(countries,3));
