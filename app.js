const weather_el = document.getElementsByClassName('weather')[0]
function getWeather() {
    let city = document.getElementById('city').value;
    const apiKey = 'c8b5e0fdfcaea01357da66c54621c13a';
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)

            document.getElementById('cityName').textContent = city

            document.getElementById('sicaklik-info').textContent = data.current.temperature; // Burada sicaklik bilgisini girdik

            let durum = data.current.weather_descriptions;// Burada durumu aldik
            document.getElementById('durum').textContent = durum[0]

            let imageURLs = data.current.weather_icons // Burada resimleri aldik dizi olarak
            let setImageUrl = imageURLs[0]//Burada o anki hava durumunun resmini aldik

            document.getElementById('ruzgar-info').textContent = data.current.wind_speed

            // console.log(setImageUrl)
            let imageSrc = document.getElementsByClassName('image')[0]
            imageSrc.setAttribute('src', setImageUrl);

            weather_el.style.display = 'flex'
        })
}
