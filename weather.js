/* HEADER INFORMATION RENDER */
const myCity = document.querySelector("#myCity");

const currentDate = document.querySelector("#currentDate");

function getCurrentDay() {
  let date = new Date();
  let day = date.getDate() < 10 ? `0${day}` : date.getDate();

  return day;
}

function getCurrentMonth() {
  let date = new Date();
  let month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  return month;
}

function getCurrentYear() {
  let date = new Date();
  let year = date.getFullYear();

  return year;
}

function renderHeader() {
  myCity.innerHTML = "oPorto";
  currentDate.innerHTML = `${getCurrentDay()}.${getCurrentMonth()}.${getCurrentYear()}`;
}

renderHeader();

/* END HEADER INFORMATION RENDER */

/* WEATHER INFORMATION RENDER */

let API_KEY = "57a42bc56d364fa52d0311e78cf51b26";

const portoLon = -8.611;
const portoLat = 41.1496;

window.onload = portoWeather;

// HTML text tags
let portoTemp = document.querySelector("#portoTemp");
let portoDesc = document.querySelector("#portoDesc");
let portoWindSpeed = document.querySelector("#portoWindSpeed");
let portoHumidity = document.querySelector("#portoHumidity");

let cityTemp = document.querySelector("#cityTemp");
let cityDesc = document.querySelector("#cityDesc");
let cityWind = document.querySelector("#cityWind");

let dayOne = document.querySelector("#dayOne");
let dayTwo = document.querySelector("#dayTwo");
let dayThree = document.querySelector("#dayThree");
let dayFour = document.querySelector("#dayFour");
let dayFive = document.querySelector("#dayFive");
let cityImg = document.querySelector("#cityImg");

let oPorto_forecast = document.querySelector(".oPorto_forecast");
let cityWeather_forecast = document.querySelector(".cityWeather_forecast");

let cityResultName = document.querySelector("#cityResultName");
let cityResultTemp = document.querySelector("#cityResultTemp");
let cityResultDesc = document.querySelector("#cityResultDesc");
let cityResultWindSpeed = document.querySelector("#cityResultWindSpeed");
let cityResultHumidity = document.querySelector("#cityResultHumidity");

let forecastStatus = document.querySelector("#forecastStatus");
let cityWeatherStatus = document.querySelector("#cityWeatherStatus");
// HTML text tags

function portoWeather() {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${portoLat}&lon=${portoLon}&appid=${API_KEY}&units=metric`
    )
    .then(res => {
      // temperature °
      let temp = Math.round(res.data.current.temp);

      portoTemp.innerHTML = `
      ${temp}°`;

      // wind speed
      let wind = Math.round(res.data.current.wind_speed);
      portoWindSpeed.innerHTML = `
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="0 0 368 368" style="enable-background:new 0 0 368 368;" xml:space="preserve">
        <g>
          <g>
            <path d="M296,48c-39.704,0-72,32.304-72,72c0,4.416,3.576,8,8,8s8-3.584,8-8c0-30.88,25.128-56,56-56s56,25.12,56,56
              s-25.128,56-56,56H8c-4.416,0-8,3.584-8,8s3.584,8,8,8h288c39.704,0,72-32.304,72-72S335.704,48,296,48z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M144,32c-30.88,0-56,25.12-56,56c0,4.416,3.584,8,8,8s8-3.584,8-8c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40
              c0,22.056-17.944,40-40,40H8c-4.416,0-8,3.584-8,8s3.584,8,8,8h136c30.88,0,56-25.12,56-56S174.88,32,144,32z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M280,224H8c-4.416,0-8,3.584-8,8c0,4.416,3.584,8,8,8h272c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40
              c-22.056,0-40-17.944-40-40c0-4.416-3.576-8-8-8s-8,3.584-8,8c0,30.88,25.128,56,56,56s56-25.12,56-56S310.872,224,280,224z"/>
          </g>
        </g>
      </svg> ${wind} km/ h.`;

      // desc
      let desc = res.data.current.weather[0].main;

      // description first letter uppercase
      desc = desc[0].toUpperCase() + desc.slice(1);
      portoDesc.innerHTML = `oPorto: ${desc}.`;

      // humidity %
      let humidity = Math.round(res.data.current.humidity);
      portoHumidity.innerHTML = `
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 422.667 422.667" style="enable-background:new 0 0 422.667 422.667;" xml:space="preserve">
        <g>
          <g>
            <path d="M250.534,40.667c-12-14-22.8-26.4-31.2-36.8c-0.4-0.8-1.2-1.2-1.6-1.6c-4.4-3.6-10.8-2.8-14.4,1.6
              c-8.4,10.4-19.2,22.8-31.2,36.8c-52.8,61.2-126,146-126,216.8c0,45.6,18.4,86.8,48.4,116.8c30,29.6,71.2,48.4,116.8,48.4
              c45.6,0,86.8-18.4,116.8-48.4s48.4-71.2,48.4-116.8C376.534,186.667,303.334,101.867,250.534,40.667z M313.734,359.467
              c-26.4,26.4-62.4,42.8-102.4,42.8s-76-16.4-102.4-42.4c-26-26-42.4-62.4-42.4-102.4c0-63.2,70.4-144.8,121.2-203.6
              c8.4-10,16.4-19.2,23.6-28c7.2,8.8,15.2,18,23.6,27.6c50.8,58.8,121.2,140,121.2,203.6
              C356.134,297.067,339.734,333.067,313.734,359.467z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M212.134,349.867c-24.8,0-47.2-10-63.2-26s-26-38.4-26-63.2c0-5.6-4.4-10-10-10c-5.6,0-10,4.4-10,10
              c0,30.4,12.4,57.6,32,77.6c19.2,19.2,46.8,31.6,77.2,31.6c5.6,0,10-4.4,10-10C222.134,354.267,217.734,349.867,212.134,349.867z"
              />
          </g>
      </svg>
      ${humidity}%.`;

      // icon
      let icon = res.data.current.weather[0].icon;

      // portoImg.src = "http://openweathermap.org/img/w/" + icon + ".png";

      convertWeekDaysArr().forEach((day, i) => {
        oPorto_forecast.innerHTML += `
          <div class="oPorto_forecast_card">
            <h3>${day}</h3>
            <h2>${Math.round(res.data.hourly[i].temp)}°</h2>
            <p>
              <img src="http://openweathermap.org/img/w/${
                res.data.hourly[i].weather[0].icon
              }.png" />
            </p>
          </div>
        `;

        i++;
      });
    })
    .catch(error => {
      console.log(error);
    });

  cityWeatherStatus.innerHTML = "No weather to display. Search for a city.";

  forecastStatus.innerHTML =
    "No weather forecast to display. Search for a city.";
}

function getFiveWeekDay() {
  let now = new Date();

  let currDayNum = now.getDay();

  let futureNum = currDayNum + 4;

  let weekDay = [];

  for (let i = 0; i < 4; i++) {
    let number = now.getDay() + i;

    if (number < futureNum) {
      weekDay.push(number);
    }
  }

  return weekDay;
}

function convertWeekDaysArr() {
  let arr = [];
  for (let day of getFiveWeekDay()) {
    switch (day) {
      case 0:
        arr.push("Sun");
        break;
      case 1:
        arr.push("Mon");
        break;
      case 2:
        arr.push("Tue");
        break;
      case 3:
        arr.push("Wed");
        break;
      case 4:
        arr.push("Thu");
        break;
      case 5:
        arr.push("Fri");
        break;
      case 6:
        arr.push("Sat");
        break;
      case 7:
        arr.push("Sat");
        break;
      case 8:
        arr.push("Sun");
        break;
      case 9:
        arr.push("Mon");
        break;
      case 10:
        arr.push("Tue");
        break;
      case 11:
        arr.push("Wed");
        break;
      case 12:
        arr.push("Thu");
        break;
    }
  }
  arr[0] = "Today";

  return arr;
}

let form = document.querySelector("#weatherForm");
let lat = "";
let lon = "";

form.addEventListener("submit", e => {
  forecast();

  form.reset();
  e.preventDefault();
});

async function forecast() {
  let cityInput = document.querySelector("#cityTxt").value;

  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`
    )
    .then(res => {
      lon = res.data.coord.lon;
      lat = res.data.coord.lat;
    })
    .catch(error => {
      console.log(error);
    });

  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(res => {
      cityWeatherStatus.innerHTML = "";
      forecastStatus.innerHTML = "";

      cityWeather_forecast.innerHTML = "";

      cityInput = cityInput[0].toUpperCase() + cityInput.slice(1);
      cityResultName.innerHTML = cityInput;

      // temperature °
      let temp = Math.round(res.data.current.temp);
      cityResultTemp.innerHTML = `${temp}°`;

      // wind speed
      let wind = Math.round(res.data.current.wind_speed);
      cityResultWindSpeed.innerHTML = `
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="0 0 368 368" style="enable-background:new 0 0 368 368;" xml:space="preserve">
        <g>
          <g>
            <path d="M296,48c-39.704,0-72,32.304-72,72c0,4.416,3.576,8,8,8s8-3.584,8-8c0-30.88,25.128-56,56-56s56,25.12,56,56
              s-25.128,56-56,56H8c-4.416,0-8,3.584-8,8s3.584,8,8,8h288c39.704,0,72-32.304,72-72S335.704,48,296,48z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M144,32c-30.88,0-56,25.12-56,56c0,4.416,3.584,8,8,8s8-3.584,8-8c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40
              c0,22.056-17.944,40-40,40H8c-4.416,0-8,3.584-8,8s3.584,8,8,8h136c30.88,0,56-25.12,56-56S174.88,32,144,32z"/>
          </g>
        </g>
        <g>
          <g>
            <path d="M280,224H8c-4.416,0-8,3.584-8,8c0,4.416,3.584,8,8,8h272c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40
              c-22.056,0-40-17.944-40-40c0-4.416-3.576-8-8-8s-8,3.584-8,8c0,30.88,25.128,56,56,56s56-25.12,56-56S310.872,224,280,224z"/>
          </g>
        </g>
      </svg>
      ${wind} km.`;

      // humidity %
      let humidity = Math.round(res.data.current.humidity);
      cityResultHumidity.innerHTML = `
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 422.667 422.667" style="enable-background:new 0 0 422.667 422.667;" xml:space="preserve">
           <g>
             <g>
               <path d="M250.534,40.667c-12-14-22.8-26.4-31.2-36.8c-0.4-0.8-1.2-1.2-1.6-1.6c-4.4-3.6-10.8-2.8-14.4,1.6
                 c-8.4,10.4-19.2,22.8-31.2,36.8c-52.8,61.2-126,146-126,216.8c0,45.6,18.4,86.8,48.4,116.8c30,29.6,71.2,48.4,116.8,48.4
                 c45.6,0,86.8-18.4,116.8-48.4s48.4-71.2,48.4-116.8C376.534,186.667,303.334,101.867,250.534,40.667z M313.734,359.467
                 c-26.4,26.4-62.4,42.8-102.4,42.8s-76-16.4-102.4-42.4c-26-26-42.4-62.4-42.4-102.4c0-63.2,70.4-144.8,121.2-203.6
                 c8.4-10,16.4-19.2,23.6-28c7.2,8.8,15.2,18,23.6,27.6c50.8,58.8,121.2,140,121.2,203.6
                 C356.134,297.067,339.734,333.067,313.734,359.467z"/>
             </g>
           </g>
           <g>
             <g>
               <path d="M212.134,349.867c-24.8,0-47.2-10-63.2-26s-26-38.4-26-63.2c0-5.6-4.4-10-10-10c-5.6,0-10,4.4-10,10
                 c0,30.4,12.4,57.6,32,77.6c19.2,19.2,46.8,31.6,77.2,31.6c5.6,0,10-4.4,10-10C222.134,354.267,217.734,349.867,212.134,349.867z"
                 />
             </g>
         </svg>
      ${humidity}%.`;

      // desc
      let desc = res.data.current.weather[0].main;
      desc = desc[0].toUpperCase() + desc.slice(1);
      cityResultDesc.innerHTML = desc;

      // GET ICON
      // console.log(res.data.hourly[0].weather[0].icon);

      convertWeekDaysArr().forEach((day, i) => {
        cityWeather_forecast.innerHTML += `
          <div class="cityWeather_forecast_card">
            <h3>${day}</h3>
            <h2>${Math.round(res.data.hourly[i].temp)}°</h2>
            <p>
              <img src="http://openweathermap.org/img/w/${
                res.data.hourly[i].weather[0].icon
              }.png" />
            </p>
          </div>
        `;

        i++;
      });

      // dayOne.innerHTML = `Day 1: ${Math.round(res.data.hourly[0].temp)}°C`;
      // dayTwo.innerHTML = `Day 2: ${Math.round(res.data.hourly[1].temp)}°C`;
      // dayThree.innerHTML = `Day 3: ${Math.round(res.data.hourly[2].temp)}°C`;
      // dayFour.innerHTML = `Day 4: ${Math.round(res.data.hourly[3].temp)}°C`;
      // dayFive.innerHTML = `Day 5: ${Math.round(res.data.hourly[4].temp)}°C`;

      // cityImg.src =
      //   "http://openweathermap.org/img/w/" +
      //   res.data.hourly[0].weather[0].icon +
      //   ".png";
    })
    .catch(error => {
      console.log(error);
    });
}
