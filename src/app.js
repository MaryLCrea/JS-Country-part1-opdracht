import axios from "axios";
console.log('Hallo daar!!');

//Stappenplan:
// 1. Haal data op van alle landen uit de API (eerst 1 land)
// 2. Request maken met get en een async functie
// 3. Maak binnen de async een try catch blok
// 4. Sla deze opgehaalde data in een variabele
// 5. Koppelen aan HTML container/anker (maken in html en ophalen in je file)
// 6. De container wordt opgeslagen in een variabele en deze vullen met innerHtml
//const errorMessage = document.getElementById('error');

async function getCountryData() {
    try {
        const result = await axios.get( 'https://restcountries.com/v2/all')
        console.log(result.data);


        //const result = await axios.get('')
        // countryData.innerHTML = `
        // <h3>${result.data[0].name}</h3>
        // <img src="${result.data[0].flag}" alt="plaatje van vlag"/>
        // <p>Has a population of: ${result.data[0].population}</p>
        // `
        doeDat(result.data);

    } catch (e) {
        console.error(e)
    }
}
getCountryData();

function doeDat(countryList){
    const countryData = document.getElementById('country');

    countryData.innerHTML = countryList.map((countries) => {
        return `

        <ol>
        <img src="${countries.flag}" alt="plaatje van vlag"/> <h3>${countries.name}</h3>
        <p>${countries.name} has a population of: ${countries.population} people. 
       </ol>`
    })
}




