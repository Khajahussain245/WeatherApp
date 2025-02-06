let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp_value");
let locEle = document.getElementById("location");
let weatherdescEle = document.getElementById("Weather-desc");
let btnEle = document.getElementById("btn");
let icon = document.getElementById("icon");

const apikey = "66e33f42225d38dda38ec403f23dfef3";

btnEle.onclick = function () {
  if (inputEle.value === "") {
    alert("Please Enter some location");
  } else {
    let loc = inputEle.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { name } = data;
        const { feels_like } = data.main;
        const { description, icon: weatherIcon } = data.weather[0];
        tempEle.innerText = Math.floor(feels_like - 273.15); 
        locEle.innerText = name;
        weatherdescEle.innerText = description;
        // icon.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        alert("Unable to fetch weather data. Please check the location name.");
      });

    inputEle.value = "";
  }
};
