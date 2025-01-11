const API_KEY = "d69d4158d46a991849534b40de28b449";

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `현재 날씨 : ${data.weather[0].main} / 현재 기온 : ${data.main.temp}`;
    });
}

function fail() {
  console.log("can't find your location!");
}

navigator.geolocation.getCurrentPosition(success, fail);
