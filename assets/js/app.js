// Allah

import * as elems from "./elements.js";

window.onload = () => {
  weatherApi("Tehran");
};

// preloader func
function preloaderClose() {
  setTimeout(() => {
    elems.prelooader.classList.remove("d-flex");
    elems.prelooader.classList.add("d-none");
  }, 1000);
}
function preloaderShow() {
  elems.prelooader.classList.remove("d-none");
  elems.prelooader.classList.add("d-flex");
}
// preloader func End !

elems.cityBox.onclick = () => elems.cityModalBox.classList.remove("d-none");

Array.from(elems.modalClose).forEach((icon) => {
  icon.onclick = () => {
    const parentElem = icon.parentElement;
    modalClose(parentElem);
  };
});

elems.cityModalSub.onclick = newCityWeather;

function modalClose(modal) {
  modal.classList.add("d-none");
}

let weather;
let newCity;

function newCityWeather() {
  new Promise((resolve, reject) => {
    newCity = elems.cityModalInput.value;
    resolve();
  })
    .then(() => {
      preloaderShow();
      weatherApi(newCity);
    })
    .then(() => {
      let dateVar = new setDate();
      dateVar.showDate();
    })
    .finally(() => modalClose(elems.cityModalBox));
}

// weather API | creat weather UI :
function weatherApi(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b7c1e8cd7758748202be77aaea7fade`
  )
    .then((rspns) => {
      preloaderShow();
      if (rspns.status == 200) {
        return rspns.json();
      } else {
        alert("You Entered wrong value");
      }
    })
    .then((data) => {
      const mainInfo = data.main;
      const weatherInfo = data.weather[0];
      console.log(mainInfo);
      console.log(weatherInfo);
      weather = new newWeather(
        city,
        weatherInfo.icon,
        weatherInfo.main,
        mainInfo.temp,
        mainInfo.temp_min,
        mainInfo.temp_max
      );
    })
    .catch(() => alert("Network Error!!!"))
    .finally(() => preloaderClose());
}
// weather API | creat weather UI End !

class weatherIcon {
  constructor(id) {
    let arrId = Array.from(id);
    arrId.pop();
    let newId = "";
    for (let i = 0; i < arrId.length; i++) {
      newId = newId + arrId[i];
    }

    console.log(id);

    switch (String(newId)) {
      case "01":
        elems.weatherIcon.classList = "fa fa-sun";
        document.body.style.background = "url(assets/images/clear-bg.jpg)";
        document.body.style.backgroundSize = "cover";
        break;

      case "02":
        elems.weatherIcon.classList = "fa fa-cloud-sun";
        document.body.style.background = "url(assets/images/cloud-sun-bg.jpg)";
        document.body.style.backgroundSize = "cover";
        break;

      case "03":
        elems.weatherIcon.classList = "fa fa-cloud";
        document.body.style.background = "url(assets/images/clouds-bg.jpg)";
        document.body.style.backgroundSize = "cover";
        break;

      case "04":
        elems.weatherIcon.classList = "fa fa-cloud";
        document.body.style.background = "url(assets/images/clouds-bg.jpg)";
        document.body.style.backgroundSize = "cover";
        break;

      case "09":
        elems.weatherIcon.classList = "fa fa-cloud-showers-heavy";
        document.body.style.background = "url(assets/images/rainy-bg.jpg)";
        document.body.style.backgroundSize = "cover";
        break;

      case "10":
        elems.weatherIcon.classList = "fa fa-cloud-rain";
        document.body.style.background = "url(assets/images/rainy-bg.jpg)";
        document.body.style.backgroundSize = "cover";
        break;

      case "11":
        elems.weatherIcon.classList = "fas fa-bolt";
        document.body.style.background = "url(assets/images/stormy-bg.jpeg)";
        document.body.style.backgroundSize = "cover";
        break;

      case "13":
        elems.weatherIcon.classList = "fas fa-snowflake";
        document.body.style.background = "url(assets/images/snowy-bg.png)";
        document.body.style.backgroundSize = "cover";
        break;

      case "50":
        elems.weatherIcon.classList = "fas fa-smog";
        document.body.style.background = "url(assets/images/foggy-bg.jpg)";
        document.body.style.backgroundSize = "cover";
        break;

      default:
        break;
    }
  }
}

let weatherStyle;

class newWeather {
  constructor(city, iconId, condition, avgTemp, minTemp, maxTemp) {
    elems.cityName.innerText = city;
    weatherStyle = new weatherIcon(iconId);
    elems.avgTemp.innerText = Math.floor(avgTemp - 273) + " °c";
    elems.minTemp.innerText = Math.floor(minTemp - 273) + " °c";
    elems.maxTemp.innerText = Math.floor(maxTemp - 273) + " °c";
    elems.condition.innerText = condition;
  }
}

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

class setDate {
  constructor() {
    let now = new Date();
    this.day = now.getDay();
    this.month = now.getMonth();
    this.year = now.getFullYear();
    this.date = now.getDate();
  }

  showDate() {
    elems.date.innerText = `${days[this.day]}, ${months[this.month]} ${
      this.date
    }, ${this.year}`;
  }
}

//      ||=========||    ||======  ======||    ||         ||
//      ||         ||    ||      \/      ||    ||         ||
//      ||               ||      ||      ||    ||         ||
//      ||               ||      ||      ||    ||         ||
//      ||=========||    ||      ||      ||    ||=========||
//                 ||    ||      ||      ||    ||         ||
//                 ||    ||              ||    ||         ||
//      ||         ||    ||              ||    ||         ||
//      ||=========||    ||              ||    ||         ||
//
//      https://smhatami.github.io
