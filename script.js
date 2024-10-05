function tempInfo(response) {
  let tempratureElement = document.querySelector("#degree-number");
  tempratureElement.innerHTML = Math.round(response.data.temperature.current);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let iconElement = document.querySelector("#weather-image");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-temperature-icon" />`;
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

function forecastTemp(city) {
  let apiKey = "9f3o6449dc310bta33096fd85b205350";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiURL).then(displayForecast);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml += `
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">${formatDay(day.time)}</div>
          <img src="${day.condition.icon_url}" class="weather-forecast-icon" />
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>${Math.round(day.temperature.maximum)}°</strong>
            </div>
            <div class="weather-forecast-temperature">${Math.round(
              day.temperature.minimum
            )}°</div>
          </div>
        </div>`;
    }
  });

  forecastElement.innerHTML = forecastHtml;
}

function searchCity(city) {
  let apiKey = "9f3o6449dc310bta33096fd85b205350";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiURL).then(tempInfo);
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", searchSubmit);

// Date and Time display
let now = new Date();
let date = document.querySelector("#dateTime");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let currentDate = now.getDate();

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let day = days[now.getDay()];
let month = months[now.getMonth()];
date.innerHTML = `${day} ${month} ${currentDate}, ${hour}:${minutes}`;
