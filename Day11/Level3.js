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

for (const {name , capital , population , area} of countries){
    console.log(name , capital , population , area);
}
