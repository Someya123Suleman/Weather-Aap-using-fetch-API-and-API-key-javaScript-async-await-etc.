async function getWeather() {

    const apiKey = "5003bb9d0f9c202b259c9186e0942385";

    const city = "Bhubaneswar";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("weatherResult").innerHTML =
        `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch(error) {

        console.log(error);

        document.getElementById("weatherResult").innerHTML =
        "Error fetching weather data";

    }
}