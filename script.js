const apiKey = "c576437bfe516d5734921ef834dcf8a3";
const call = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;

const input = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".weather img");

async function getWeather(city) {
  const api = await fetch(call + `&q=${city}`);
  var data = await api.json();

  if (api.status == 404) {
    document.querySelector(".invalid").style.display = "block";
    document.querySelector(".container").style.display = "none";
  } else {
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".city").innerHTML = data.name;

    if (data.weather[0].main === "Clouds") {
      icon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      icon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      icon.src = "images/mist.png";
    } else if (data.weather[0].main === "Rain") {
      icon.src = "images/rain.png";
    } else if (data.weather[0].main === "Snow") {
      icon.src = "images/snow.png";
    } else if (data.weather[0].main === "Clear") {
      icon.src = "images/clear.png";
    }

    document.querySelector(".invalid").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(input.value);
});
