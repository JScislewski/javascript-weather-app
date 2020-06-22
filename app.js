window.addEventListener("load", () => {
  let lon;
  let lat;
  let weatherMain = document.querySelector(".weather-main");
  let temperatureDegree = document.querySelector(".temperature-degree");
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let weatherIcon = document.querySelector(".weather-icon");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      apiKey = prompt("Enter your openweathermap.org api key.");
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          const { temp } = data.main;
          const { main, description, icon } = data.weather[0];
          weatherMain.textContent = main;
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
          weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        });
    });
  } else {
    h1.textContent = "Please enable geoloacation";
  }
});
