const API_KEY = "d69d4158d46a991849534b40de28b449";

const weatherTranslations = {
  Clear: "맑음",
  Rain: "비",
  Clouds: "구름",
  Snow: "눈",
  Drizzle: "이슬비",
  Thunderstorm: "뇌우",
  Mist: "안개",
};

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      city.innerText = data.name;
      const mainWeather = data.weather[0].main;
      const translatedWeather = weatherTranslations[mainWeather] || mainWeather;
      weather.innerHTML = `현재 날씨 : ${translatedWeather} <br>현재 기온 : ${data.main.temp}`;
    });
}

function fail() {
  console.log("can't find your location!");
}

navigator.geolocation.getCurrentPosition(success, fail);
