function displayTemperature(response) {
  console.log(response.data);
  let mainTempElement = document.querySelector("#main-temp");
  mainTempElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
}

let apiEndpoint = "https://api.shecodes.io/weather/v1/current?";
let query = "Brooklyn";
let apiKey = "045ace03oteb7d0da03b1286fde00d59";
let units = "metric";
let apiUrl = `${apiEndpoint}query=${query}&key=${apiKey}&units=${units}`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
