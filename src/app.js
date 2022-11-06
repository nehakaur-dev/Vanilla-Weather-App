
let apiKey = "091ee062af9bb6b7026312ecec49397c";
let currentCelciusTemp = 30;

function nameChange (event) {
    event.preventDefault ();
    let input = document.querySelector("#city-name")
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric`;
  event.preventDefault();
    
    let searchNewCity = document.querySelector("#new-city")
    searchNewCity.innerHTML = `${input.value}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature)
}


function showTemperature(response) {
    console.log(response.data);
  let newWeather = document.querySelector("#weather-status");
  newWeather.innerHTML = `${response.data.weather[0].description}`;

  let newTemperature = document.querySelector("#temperature");
  currentCelciusTemp =  `${response.data.main.temp}`;
  newTemperature.innerHTML = `${response.data.main.temp}`;

  let newHumidity = document.querySelector("#humidity-value");
  newHumidity.innerHTML = `${response.data.main.humidity}`;

  let newWindRange = document.querySelector("#wind-range");
  newWindRange.innerHTML = `${response.data.wind.speed}`;

  let iconImage =  document.querySelector("#icon");
  let iconUrl = "http://openweathermap.org/img/w/" + `${response.data.weather[0].icon}` + ".png";
  iconImage.src = iconUrl; 
}
let newForm = document.querySelector("#search-form")
newForm.addEventListener ("submit", nameChange)


let newDayTime = document.querySelector("#day-time")
let now = new Date();
console.log(now.getHours());
let hours = (now.getHours());
let minutes = now.getMinutes();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = days[now.getDay()];

newDayTime.innerHTML = `${day} ${hours}:${minutes}`;


 function showTempInC(event) {
     event.preventDefault ();
     let input = document.querySelector("#temperature")
         input.innerHTML = currentCelciusTemp;
 }
   let temperature = document.querySelector("#celcius-link")
    temperature.addEventListener ("click", showTempInC)
    
function newtempchange(event) {
        event.preventDefault();  
        let temperatureSpan = document.querySelector("#temperature");
        temperatureSpan.innerHTML = currentCelciusTemp * 9/5 + 32;
        
        let farenhightButton = document.querySelector("#fahrenhit-link");
        console.log(farenhightButton);
        farenhightButton.className = "current-temperature-type-selection";
}
    let newtemperature = document.querySelector("#fahrenhit-link")
    newtemperature.addEventListener ("click", newtempchange)
