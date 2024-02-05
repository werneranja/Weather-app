document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY_HERE';
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather?';
    const city = 'London'; // Change to your city
    const units = 'metric'; // 'metric' for Celsius, 'imperial' for Fahrenheit

    const url = `${urlBase}q=${city}&units=${units}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // For debugging
            document.getElementById('temp').textContent = data.main.temp;
            document.getElementById('weather-description').textContent = data.weather[0].description;
            // Update more elements as needed
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
