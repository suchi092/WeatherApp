        const API_keys = "de37955fac881806bff8e383884f67e5";
        const API_urls = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchcity = document.querySelector(".inp input"); 
        const searbtn = document.getElementById("inp1");
        const weatherIcon = document.querySelector(".weather_icon");
        

        async function weather_Check(city){
            const response = await fetch(API_urls + city + `&appid=${API_keys}`);
            const data1 =  await response.json();
            console.log(data1)

            document.querySelector(".city").innerHTML= data1.name;
            document.querySelector(".temp").innerHTML= Math.round(data1.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML=data1.main.humidity +"%";
            document.querySelector(".wind").innerHTML=data1.wind.speed+"km/h";
            

        if(data1.weather[0].main=="Clouds"){
            weatherIcon.src="/assets/images/clouds.png";

        }
        else if (data1.weather[0].main=="Wind"){
            weatherIcon.src="/assets/images/wind.png";

        }
        else if (data1.weather[0].main=="Clear"){
            weatherIcon.src="/assets/images/clear.png";

        }
        else if (data1.weather[0].main=="Humidity"){
            weatherIcon.src="/assets/images/humidity.png";

        }
        else if (data1.weather[0].main=="Mist"){
            weatherIcon.src="/assets/images/mist.png";

        }
        else if (data1.weather[0].main=="Rainy"){
            weatherIcon.src="/assets/images/rain.png";

        }
        else if (data1.weather[0].main=="Drizzle"){
            weatherIcon.src="/assets/images/Drizzle.png";
            
        }
    }


        searbtn.addEventListener("click", ()=>{
            weather_Check(searchcity.value);
        })

       
