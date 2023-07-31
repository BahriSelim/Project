const con = document.querySelector('.con');
const search = document.querySelector('.searchbox button');
const weatherbox = document.querySelector('.weatherbox');
const weatherdetails = document.querySelector('.weatherdetails');
const eroor = document.querySelector('.eroor');
search.addEventListener("click",()=>{
    const APIKEY="fcb29f6d08d9e7e9fbb988146ea2f732"
    const city=document.querySelector(".searchbox input").value
    const img=document.querySelector(".weatherbox img")
    const temp=document.querySelector(".weatherbox .temp")
    const desc=document.querySelector(".weatherbox .desc")
    const wind=document.querySelector(".weatherdetails .wind p")
    const hum=document.querySelector(".weatherdetails .humidity p")
    const a=document.querySelector(".a")
    if(city===""){
        return;

    }
    else if(city=="hajji"){
        
        temp.innerHTML= "99999C°";
        desc.innerHTML="VERT HOT";
        weatherdetails.style.opacity="0";
        img.src="img/hajji.jpg"
        con.style.height="500px";
         a.href="hajji.html";

    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
    .then(res=>res.json()).then(json=>{
        if(json.cod==="404" && city!="hajji"){
            eroor.style.display="block";
            con.style.height="500px";
            eroor.classList.add(".fadein");
            weatherbox.style.display = 'none';
            weatherdetails.style.display = 'none';
            return;
        }
        eroor.style.display="none"
    
    
    
    
        const img=document.querySelector(".weatherbox img")
        const temp=document.querySelector(".weatherbox .temp")
        const desc=document.querySelector(".weatherbox .desc")
        const wind=document.querySelector(".weatherdetails .wind p")
        const hum=document.querySelector(".weatherdetails .humidity p")
        switch(json.weather[0].main){
            case "Clear":
                img.src="img/clear.png"
                break;
            case "Snow":
                img.src="img/snow.png"
                break;
            case "Rain":
                img.src="img/rain.png"
                break;
            case "Clouds":
                img.src="img/cloud.png"
                break;
            case "Haze":
                img.src="img/mist.png"
                break;
            default:
                img.src=""
                
        }
        temp.innerHTML= `${parseInt(json.main.temp)}°C`;
        desc.innerHTML=`${json.weather[0].description}`;
        wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;
        hum.innerHTML=`${json.main.humidity}%`;
        weatherdetails.style.opacity="1";
        con.style.height="500px";
        a.href=`https://www.google.com/maps/place/${city}`

    });
})
