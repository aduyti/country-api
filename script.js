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
        const img = document.createElement('img');
        img.src = country.flags.png;
        img.width = 80;
        img.height = 40;
        img.title = country.name.common;
        countryDiv.appendChild(img);
        countryDiv.classList.add('country');
        document.getElementById('countries').appendChild(countryDiv);
        countryDiv.addEventListener('click', function () {
            showCountry(country.name.common);
        });
    })
}
const showCountry = name => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(response => response.json())
        .then(data => showDetail(data[0]))
}
const showDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('country');
    countryDetail.innerText = `${country.name.common} is in ${country.continents.join(' and ')} with population of ${country.population}. It's capital is ${country.capital[0]}`;
    countryDetail.style.display = 'block';
}