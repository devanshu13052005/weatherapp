
// const URL = "https://api.weatherapi.com/v1/current.json?key=22773f29d4a4497da89122317240504&q=alwar";
const URL = "https://api.weatherapi.com/v1/current.json?key=22773f29d4a4497da89122317240504&q=";
const secondHalf = document.querySelector(".secondHalf");
const searchBtn = document.querySelector(".btn");
const input = document.querySelector(".input");
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");
const info4 = document.querySelector(".info4");
const info5 = document.querySelector(".info5");
const info6 = document.querySelector(".info6");
const info7 = document.querySelector(".info7");
const info8 = document.querySelector(".info8");
const info9 = document.querySelector(".info9");

searchBtn.addEventListener("click" , async (evt) => {
    evt.preventDefault();
    const cityName = input.value;

    if(cityName.value = ""){
        alert("write the city name in the search bar...");
        return;
    }
    const link = `${URL}${cityName}`;
    const response = await fetch(link);
    // console.log(response);
    const data = await response.json();
    console.log(data);
    
    // 1. location

    const region = data.location['region'];
    const country = data.location['country'];
    const location = `${cityName},${region},${country}`;
    console.log(location);
    info1.textContent = `Location = ${location}`;

    // 2. latitude and longitude

    const lat = data.location['lat'];
    const lon = data.location['lon'];
    info2.textContent = `Lat = ${lat} && Lon = ${lon}`;

    // 3. condition

    const condition = data.current.condition['text'];
    info3.textContent = `Condition = ${condition}`;

    // 4. temperature in centigrade

    const temp_c = data.current.temp_c;
    info4.textContent = `Temperature(C) = ${temp_c}`;

    // 5. feelsLike in centigrade

    const feelslikeC = data.current.feelslike_c;
    info5.textContent = `Temp(C) feels like = ${feelslikeC}`;

    // 6. temperature in fahrenheit 

    const temp_f = data.current.temp_f;
    info6.textContent = `Temperature(F) = ${temp_f}`;

    // 7. feelslike in fahrenheit

    const feelslikeF = data.current.feelslike_f;
    info7.textContent = `Temp(F) feels like = ${feelslikeF}`;

    // 8. wind

    const wind1 = data.current.wind_kph;
    const wind2 = data.current.wind_mph;
    info8.textContent = `Wind = ${wind1}kph  and  ${wind2}mph`;

    // 9. Humidity

    const humidity = data.current.humidity;
    info9.textContent = `Humidity = ${humidity}`;


    secondHalf.style.display = "flex";
});