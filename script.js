const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".windspeed");
const container = document.querySelector(".weather");

class weather {
  constructor(city) {
    this.city = city;
  }

  showWeather() {
    const data = fetch(`https://goweather.herokuapp.com/weather/${this.city}`)
      .then((res) => res.json())
      .then((data) => {
        city.innerText = this.city;
        temp.innerText = data.forecast[0].temperature;
        wind.innerText = `Wind speed: ${data.wind}`;
        const html = `
        <img src="./assets/${data.description}.png" alt="">
        `;
        container.insertAdjacentHTML("afterbegin", html);
      });
  }
}

// const Kokand = new weather("Kokand");
const Tashkent = new weather("Tashkent");

// Kokand.showWeather();
Tashkent.showWeather();

// With Geolocation

// const whereAmI = function () {
//   if (navigator.geolocation)
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         // const { lat } = position.coords;
//         // const { lng } = position.coords;
//         const lat = 52.508;
//         const lng = 13.381;

//         fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//           .then((res) => {
//             if (!res.ok) {
//               throw new Error(`Problem with geocoding ${res.status}`);
//             }
//             return res.json();
//           })
//           .then((data) => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}`);
//             const Berlin = new weather(`${data.country}`);
//             Berlin.showWeather();
//           });
//       },
//       function () {
//         alert("Could not get your position");
//       }
//     );
// };

// whereAmI();
