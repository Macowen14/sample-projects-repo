document.addEventListener("DOMContentLoaded", function () {
  const searchWeather = document.querySelector("#weatherform");
  const cityInput = document.querySelector(".city-input");
  const card = document.querySelector(".card");
  const cardBody = document.querySelector(".card-body");
  const apiKey = "9905cc7cae77be844cbd2a0b5893ef44";

  searchWeather.addEventListener("submit", async function (e) {
    e.preventDefault();
    const city = cityInput.value.trim(); // Trim to remove any extra spaces

    if (city) {
      try {
        const weatherData = await getWeatherData(city);
        displayWeather(weatherData);
      } catch (err) {
        errorDisplay("Please enter a valid city");
      }
    } else {
      errorDisplay("Please enter a city");
    }
  });

  async function getWeatherData(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }

  function displayWeather(data) {
    console.log(data);
    const {
      name: city,
      main: { temp, humidity },
      wind: { speed },
      weather: [{ description, id }],
    } = data;
    cardBody.innerHTML = `
      <h5 class="card-title">${city}</h5>
      <p class="card-text temp-display">Temperature: ${(temp - 273).toFixed(
        2
      )}°C</p>
      <p class="card-text humidity-display">Humidity: ${humidity}%</p>
      <p class="card-text">Wind: 💨 ${speed} </p>
      <p class="card-text desc-display">${description}</p>
      <p class="weather-emoji">${getWeatherEmoji(id)}</p>
    `;
    card.style.display = "block";
  }

  function getWeatherEmoji(weatherId) {
    // Add logic to return appropriate emoji based on weather
    switch (true) {
      case weatherId >= 200 && weatherId <= 300:
        return "🌧️";
        break;
      case weatherId >= 300 && weatherId <= 400:
        return "🌦️";
        break;
      case weatherId >= 500 && weatherId <= 600:
        return "🌨️";

      case weatherId >= 600 && weatherId <= 700:
        return "❄️";
        break;
      case weatherId >= 700 && weatherId <= 800:
        return "☀️";
      case weatherId === 800:
        return "☀️";
      case weatherId >= 801 && weatherId <= 810:
        return " 🌥️";
        break;
      default:
        return "❔";
        break;
    }
  }

  function errorDisplay(msg) {
    const errorDiv = document.createElement("p");
    errorDiv.classList.add("error-display");
    errorDiv.textContent = msg;
    cardBody.innerHTML = "";
    cardBody.appendChild(errorDiv);
    card.style.display = "block";
    setTimeout(() => {
      errorDiv.remove();
      card.style.display = "none";
    }, 4000);
  }
});
