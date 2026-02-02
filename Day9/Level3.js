const countries = [
  {
    name: 'Finland',
    capital: 'Helsinki',
    population: 5540720,
    area: 338424
  },
  {
    name: 'France',
    capital: 'Paris',
    population: 67391582,
    area: 551695
  },
  {
    name: 'Fiji',
    capital: 'Suva',
    population: 936375,
    area: 18274
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    population: 2877797,
    area: 28748
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    population: 38005238,
    area: 9984670
  },
  {
    name: 'Iceland',
    capital: 'Reykjavik',
    population: 372520,
    area: 103000
  },
  {
    name: 'Thailand',
    capital: 'Bangkok',
    population: 69950850,
    area: 513120
  },
  {
    name: 'Pakistan',
    capital: 'Islamabad',
    population: 241499431,
    area: 881913
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    population: 17700000,
    area: 41543
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    population: 8773000,
    area: 41285
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    population: 5123536,
    area: 70273
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    population: 124516650,
    area: 377975
  }
];

function sortByName(countries){
    return [...countries].sort((a,b) => a.name.localCompare(b.name));
}
console.log(sortByName(countries));

function sortByCapital(countries){
    return [...countries].sort((a,b) => a.capital.localCompare(b.capital));
}
console.log(sortByCapital(countries));

function sortByPopulation(countries){
    return [...countries].sort((a,b) => a.population - b.population);
}
console.log(sortByPopulation(countries));

const  countriesWithLanguages = [
  { name: 'Algeria', languages: ['Arabic', 'French'] },
  { name: 'France', languages: ['French'] },
  { name: 'Spain', languages: ['Spanish'] },
  { name: 'Brazil', languages: ['Portuguese'] },
  { name: 'Canada', languages: ['English', 'French'] },
  { name: 'Nigeria', languages: ['English'] },
  { name: 'China', languages: ['Chinese'] },
  { name: 'Germany', languages: ['German'] },
  { name: 'Netherlands', languages: ['Dutch'] },
  { name: 'Kenya', languages: ['English', 'Swahili'] },
];

function mostSpokenLanguages(countries, limit) {
  const allLanguages = countries.flatMap(country => country.languages);
  const languageCount = allLanguages.reduce((acc, language) => {
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  },{});

  const result = Object.entries(languageCount).map(([language,count]) => ({
    country: language,
    count: count
  })
);

  return result
    .sort((a,b) => b.count - a.count)
    .slice(0,limit);
}
   
function mostPopulatedCountries(countries,limit){
  const result = [];
  for (const country of countries){
    result.push({
      country: country.name , 
      population: country.population
    });
  }


  return result
    .sort((a,b) => b.population - a.population)
    .slice(0,limit);
}
console.log(mostPopulatedCountries(countries,10));

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
  count: function(ages){
    return ages.length;
  },
  sum: function(ages){
    return ages.reduce((a,b) => a + b,0);
  },
  min: function(ages){
    return ages.reduce((min,curr) => curr < min ? curr : min,ages[0]);
  },
  max: function(ages){
    return ages.reduce((max,curr) => curr > max ? curr : max,ages[0]);
  },
  range: function(ages){
    return this.max(ages) - this.min(ages);
  },
  mean: function(ages){
    return this.sum(ages) / this.count(ages);
  },
  median: function(ages){
    const sorted = [...ages].sort((a,b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      return sorted[mid];
    }
  },
  mode: function(ages){
    const frequency = {};
    let maxFreq = 0;
    let mode;
    for (const age of ages) {
      frequency[age] = (frequency[age] || 0) + 1;
      if (frequency[age] > maxFreq) {
        maxFreq = frequency[age];
        mode = age;
      }
    }
    return mode;
  },
  variance: function(ages){
    const mean = this.mean(ages);
    const squaredDiffs = ages.map(age => (age - mean) ** 2);
    return this.mean(squaredDiffs);
  },
  stdDev: function(ages){
    return Math.sqrt(this.variance(ages));
  },
  freqDist: function(ages){
    const frequency = {};
    for (const age of ages) {
      frequency[age] = (frequency[age] || 0) + 1;
    }
    return frequency;
  },
};

console.log('Count:', statistics.count(ages));
console.log('Sum:', statistics.sum(ages));
console.log('Min:', statistics.min(ages));
console.log('Max:', statistics.max(ages));
console.log('Range:', statistics.range(ages));
console.log('Mean:', statistics.mean(ages));
console.log('Median:', statistics.median(ages));
console.log('Mode:', statistics.mode(ages));
console.log('Variance:', statistics.variance(ages));
console.log('Standard Deviation:', statistics.stdDev(ages));
console.log('Frequency Distribution:', statistics.freqDist(ages));