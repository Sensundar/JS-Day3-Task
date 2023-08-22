//Require the library xhr2
let XMLHttpRequest = require('xhr2');

//create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

//open the connection
xhr.open('GET','https://restcountries.com/v3.1/all' );

//handle the response data
xhr.onload = function(){
    let countriesDetails = JSON.parse(xhr.responseText);
    let countriesNames = [];
    let countriesRegion = [];
    let countriesSubregion = [];
    let countriesPopulations = [];
    for(let keys of countriesDetails){
        countriesNames.push(keys['name'])
        countriesRegion.push(keys['region'])
        countriesSubregion.push(keys['subregion'])
        countriesPopulations.push(keys['population'])
    }
    console.log('NAME:', countriesNames);
    console.log('REGION:', countriesRegion);
    console.log('SUB-REGION:',countriesSubregion);
    console.log('POPUATIONS:',countriesPopulations);

};
//send the http request
xhr.send();