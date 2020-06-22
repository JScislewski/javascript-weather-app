window.addEventListener("load", () => {
  let lon;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
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
          //const {}
          temperatureDegree.textContent = temp;
        });
    });
  } else {
    h1.textContent = "Please enable geoloacation";
  }
});
