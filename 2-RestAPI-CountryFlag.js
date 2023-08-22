// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let countriesDetails = JSON.parse(xhr.responseText);

    let flag = [];
    let flags = [];

    for (let keys of countriesDetails) {
        flag.push(keys['flag']);
        flags.push(keys['flags']);
    }

    console.log('All Countries flag details:',flag);
    console.log('All Countries flags details:',flags);
};

// send the http request
xhr.send();