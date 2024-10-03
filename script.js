function tempInfo (response){
  let tempratureElement = document.querySelector ("#degree-number");
  tempratureElement.innerHTML = Math.round(response.data.temperature.current);
  let humidityElement = document.querySelector("#humidity")
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  let windElement = document.querySelector ("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let iconElement = document.querySelector ("#weather-image")
  iconElement.innerHTML = response.data.condition.icon;
}

function searchSubmit (event) {
  event.preventDefault();
  let searchInput = document.querySelector ("#search-bar")
  let cityElement = document.querySelector ("#city");
  cityElement.innerHTML = searchInput.value;
 searchCity(searchInput.value);
}

function searchCity (city) {
 let apiKey = "9f3o6449dc310bta33096fd85b205350";
 let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
axios.get(apiURL).then(tempInfo);
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", searchSubmit)

let now = new Date ();
let date = document.querySelector ("#dateTime");
let currenteDate = now.getDate();
let hour = now.getHours();
if (hour <10){
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes <10) {
  minutes = `0${minutes}`;
}
let day= days[now.getDay()];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = months [now.getMonth()];
let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
date.innerHTML = `${day} ${month}, ${hour}:${minutes}`;