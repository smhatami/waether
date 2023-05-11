// landing page elements:
const main = document.getElementById("main")
const cityBox = document.getElementById("city-name-box")
const cityName = document.getElementById("city")
const weatherIcon = document.getElementById("weather-icon")
const avgTemp = document.getElementById("avg-temp")
const minTemp = document.getElementById("min-temp")
const maxTemp = document.getElementById("max-temp")
const condition = document.getElementById("condition-name")
const date = document.getElementById("date")

// modal elements:
const cityModalBox = document.getElementById("city-modal-box")
const cityModalInput = document.getElementById("city-modal-input")
const cityModalSub = document.getElementById("city-modal-sub")
const modalClose = document.getElementsByClassName("modal-close")


export {cityBox,cityName,weatherIcon,avgTemp,minTemp,maxTemp,condition,cityModalBox,cityModalInput,cityModalSub,modalClose, date};