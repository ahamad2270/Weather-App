let weather = {
    "apiKey":"38b827fd80366a502cdf2ce9b4e2682f",
    findCoords: function(City){
        fetch("https://api.openweathermap.org/geo/1.0/direct?q=" +City+"&limit=5&appid=38b827fd80366a502cdf2ce9b4e2682f"
             ).then((response) => response.json()).then((data) =>  this.fetchWeather(data[0].lat, data[0].lon))
    },
    fetchWeather: function(lat, lon){
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat +"&lon="+lon+"&units=imperial&appid=38b827fd80366a502cdf2ce9b4e2682f"
        ).then((response) => response.json()).then((data) => this.displayWeather(data))
    },
  displayWeather: function(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed}  = data.wind;
    console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidty:" +humidity + "%";
    document.querySelector(".wind").innerText = speed + " MPH";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url(https://source.unsplash.com/random/1920×1080/?city)"
  }
  
}
function search(){
weather.findCoords(document.querySelector("input").value);
}
document.querySelector("button").addEventListener("click",search)
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        search();
    }
})
weather.findCoords("Baltimore");


