window.addEventListener('load', ()=>{
let long;
let lat;
let temperatureDescription = document.querySelector(
    ".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");


if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;


        const api = `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dd13b464c9b745c935aaeb82390996df/`;

        fetch(api)
   .then(response => {
       return response.json();
   })
   .then(data => {
       const {temperature, summary, icon } = data.currently
       //Set DOM Elements from the API
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
        //Set Icon
        setIcons(icons, document.querySelector(".icon"));

       });
   })
    }

function setIcons(icons, iconID) {
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g,"_").toUppercase();
    skycons.play();
    return skycons.set(iconID,Skycons[currentIcon]);
    
}

});