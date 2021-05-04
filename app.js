//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
let key = "85a1287267653bdf159d0d6f84f73910";
let baseURL = "https://api.openweathermap.org/data/2.5/weather?";

//Event Listener
const weatherSearch = document.querySelector("#weather-city");

weatherSearch.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    getWeatherData(weatherSearch.value);
  }
  if (27 === event.which || 13 === event.which) {
    event.preventDefault();
    //this should delete value from the input
    event.target.value = "";
  }
});

//Get Weather data

const getWeatherData = (city = "Delhi") => {
  fetch(`${baseURL}q=${city}&appid=${key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherData);
};

//Show Weather data
const showWeatherData = (weather) => {
  console.log(weather);
  let city = document.querySelector("#city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let date = document.querySelector("#date");
  let todayDate = new Date();
  date.innerHTML = showDate(todayDate);

  let minMax = document.querySelector("#minmax");
  minMax.innerHTML = `${weather.main.temp_min}&deg;C (min) / ${weather.main.temp_max}&deg;C (max)`;

  let temp = document.querySelector("#temp");
  temp.innerHTML = `${Math.floor(weather.main.temp)}&deg;C`;

  let main = document.querySelector("#weather-situation");
  main.innerText = `${weather.weather[0].main}`;

  if (main.textContent === "Clear") {
    document.getElementById("img").innerHTML = '<i class="far fa-sun"></i>';
  } else if (main.textContent === "Thunderstorm") {
    document.getElementById("img").innerHTML = '<i class="fas fa-bolt"></i>';
  } else if (main.textContent === "Haze") {
    document.getElementById("img").innerHTML = '<i class="far fa-sun"></i>';
  } else if (main.textContent === "Smoke") {
    document.getElementById("img").innerHTML = '<i class="far fa-sun"></i>';
  } else if (main.textContent === "Drizzle") {
    document.getElementById("img").innerHTML = '<i class="far fa-sun"></i>';
  } else if (main.textContent === "Rain") {
    document.getElementById("img").innerHTML =
      '<i class="fas fa-cloud-showers-heavy"></i>';
  } else if (main.textContent === "Fog") {
    document.getElementById("img").innerHTML = '<i class="fas fa-smog"></i>';
  } else if (main.textContent === "Snow") {
    document.getElementById("img").innerHTML =
      '<i class="far fa-snowflake"></i>';
  } else if (main.textContent === "Mist") {
    document.getElementById("img").innerHTML = '<i class="far fa-sun"></i>';
  } else if (main.textContent === "Dust") {
    document.getElementById("img").innerHTML = '<i class="far fa-sun"></i>';
  } else if (main.textContent === "Ash") {
    document.getElementById("img").innerHTML = '<i class="far fa-sun"></i>';
  } else if (main.textContent === "Squall") {
    document.getElementById("img").innerHTML = '<i class="far fa-sun"></i>';
  } else if (main.textContent === "Tarnado") {
    document.getElementById("img").innerHTML = '<i class="far fa-sun"></i>';
  } else if (main.textContent === "Clouds") {
    document.getElementById("img").innerHTML =
      '<i class="fas fa-cloud-sun"></i>';
  }
};

//Show Date in Proper Format

const showDate = (dateArgs) => {
  let weekName = [
    "Sunday",
    "Monday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let monthName = [
    "January",
    "February",
    "March",
    "Aprail",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthName[dateArgs.getMonth()];
  let dateShow = dateArgs.getDate();
  let day = weekName[dateArgs.getDay()];

  return `${day}, ${dateShow} ${month}`;
};
