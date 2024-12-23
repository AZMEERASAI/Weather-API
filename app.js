async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '4b225be9f4feac4ce06b7654c0d77357'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        document.getElementById('weather').innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p style="color: red;">${error.message}</p>`;        
    }
}