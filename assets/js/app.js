// Allah

import * as elems from "./elements.js";

elems.cityBox.onclick = cityModalOpen;

Array.from(elems.modalClose).forEach((icon) => {
  icon.onclick = () => {
    const parentElem = icon.parentElement;
    modalClose(parentElem);
  };
});

elems.cityModalSub.onclick = newCityWeather;

function cityModalOpen() {
  elems.cityModalBox.classList.remove("d-none");
}

function modalClose(modal) {
  modal.classList.add("d-none");
}

function newCityWeather() {
  let newCity = elems.cityModalInput.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=5b7c1e8cd7758748202be77aaea7fade`
  )
    .then((rspns) => {
      if (rspns.status === 200) {
        return rspns.json();
      } else {
        console.log("You Entered wrong value");
      }
    })
    .then((data) => {
      const mainInfo = data.main
      const weatherInfo = data.weather[0]
      newWeather(newCity, weatherInfo.icon, weatherInfo.main, mainInfo.temp, mainInfo.temp_min, mainInfo.temp_max)
      setDate()
      modalClose(elems.cityModalBox)
    })
    .catch(() => alert("Network Error!!!"))
}

function weatherIcon(id) {
  console.log(id);
  switch (id) {
    case "01d" && "01n":
        elems.weatherIcon.classList = "fa fa-sun"
        document.body.style.background = "url(assets/images/clear-bg.jpg)";
        document.body.style.backgroundSize = "cover"
        break;
  
    case "02d" && "02n":
        elems.weatherIcon.classList = "fa fa-cloud-sun"
        document.body.style.background = "url(assets/images/clouds-bg.jpg)";
        document.body.style.backgroundSize = "cover"
        break;
  
    case "03d" && "03n":
        elems.weatherIcon.classList = "fa fa-cloud"
        document.body.style.background = "url(assets/images/clouds-bg.jpg)";
        document.body.style.backgroundSize = "cover"
        break;
  
    case "04d" && "04n":
        elems.weatherIcon.classList = "fa fa-cloud"
        document.body.style.background = "url(assets/images/clouds-bg.jpg)";
        document.body.style.backgroundSize = "cover"
        break;
  
    case "09d" && "09n":
        elems.weatherIcon.classList = "fa fa-cloud-showers-heavy"
        document.body.style.background = "url(assets/images/rainy-bg\ \(2\).jpeg)";
        document.body.style.backgroundSize = "cover"
        break;
  
    case "10d" && "10n":
        elems.weatherIcon.classList = "fa fa-cloud-rain"
        document.body.style.background = "url(assets/images/rainy-bg\ \(2\).jpeg)";
        document.body.style.backgroundSize = "cover"
        break;
  
    case "11d" && "11n":
        elems.weatherIcon.classList = "fas fa-bolt"
        document.body.style.background = "url(assets/images/stormy-bg.jpeg)";
        document.body.style.backgroundSize = "cover"
        break;
  
    case "13d" && "13n":
        elems.weatherIcon.classList = "fas fa-snowflake"
        document.body.style.background = "url(assets/images/snowy-bg.png)";
        document.body.style.backgroundSize = "cover"
        break;
  
    case "50d" && "50n":
        elems.weatherIcon.classList = "fas fa-smog"
        document.body.style.background = "url(assets/images/foggy-bg.jpg)";
        document.body.style.backgroundSize = "cover"
        break;
  
    default:
        break;
  }
}

function newWeather(city, iconId, condition, avgTemp, minTemp, maxTemp) {
  elems.cityName.innerText = city;
  weatherIcon(iconId);
  elems.avgTemp.innerText = Math.floor(avgTemp - 273) + " °c";
  elems.minTemp.innerText = Math.floor(minTemp - 273) + " °c";
  elems.maxTemp.innerText = Math.floor(maxTemp - 273) + " °c";
  elems.condition.innerText = condition;
}

function setDate(){

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];        
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  let now = new Date()

  let day = now.getDay()
  let month = now.getMonth()
  let year = now.getFullYear()
  let date = now.getDate()

  elems.date.innerText = `${days[day]}, ${months[month]} ${date}, ${year}`;
}

setDate()