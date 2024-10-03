function searchSubmit (event) {
  event.preventDefault();
  let searchInput = document.querySelector ("#search-bar")
  let cityElement = document.querySelector ("#city");
  cityElement.innerHTML = searchInput.value;

}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", searchSubmit)

let now = new Date ();
let date = document.querySelector ("#dateTime");
let currenteDate = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let day= days[now.getDay()];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = months [now.getMonth()];
let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
date.innherHTML = `${day} ${month} ${day}, ${hour}:${minutes}`;