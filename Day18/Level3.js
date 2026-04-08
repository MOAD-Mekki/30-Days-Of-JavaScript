const catsAPI = 'https://api.thecatapi.com/v1/breeds';
const countriesAPI = 'https://restcountries.com/v2/all';

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        let counter = 0;
        let weightSum = 0;
        data.forEach(cat => {
            weightSum += cat.weight;
            counter++;
        });
        const average = weightSum / counter;
        console.log(`The Average weight is: ${average}`);
        
    })
    .catch(err => console.error("Error fetching data: ", err));

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
       const largestCountreis = data
            .sort((a,b) => b.area - a.area)
            .slice(0,10);
        
        largestCountreis.forEach(country => {
            console.log(`Country: ${country.name}`);
            console.log(`Area: ${country.area} km²`);
            console.log("---------------------------");
        })
    })
    .catch(err => console.error("Error fetching data: ",err));