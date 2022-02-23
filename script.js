const getData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => showCountries(data))
        .catch(err => console.log(err))
}
getData();
const showCountries = countries => {
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = country.name.common;
        countryDiv.appendChild(h2);
        countryDiv.classList.add('country')
        document.getElementById('countries').appendChild(countryDiv);
    })
}