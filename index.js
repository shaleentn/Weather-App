const apiKey="92e379f9c0f2eca4275fe042128446bc";
            const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

            const searchBox=document.querySelector(".search input");
            const searchBtn=document.querySelector(".search button");
            const weatherIcon=document.querySelector(".weather-icon");


            async function checkWeather(city){
    // Encode the city name to handle special characters and spaces
    const encodedCity = encodeURIComponent(city);
    const response = await fetch(`${apiUrl}&q=${encodedCity}&appid=${apiKey}`);

    if (response.ok) {
        const data = await response.json();
        console.log(data);

        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humid").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + "km/hr";

        if (data.weather[0].main=="Clouds"){
            weatherIcon.src="../images/cloud3.jpg";
        }
        else if (data.weather[0].main=="Clear"){
            weatherIcon.src="../images/sunny.png";
        }
        else if (data.weather[0].main=="Rain"){
            weatherIcon.src="../images/rainy.png";
        }
        else if (data.weather[0].main=="Sunny"){
            weatherIcon.src="../images/sunny.png";
        }



    } else {
        console.error('Error fetching weather data:', response.statusText);
    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})