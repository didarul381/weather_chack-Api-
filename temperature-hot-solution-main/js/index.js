const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const loadtamparature= async(city)=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   try{
    const res=await fetch(url);
    const data= await res.json();
    displayTemperature(data);
   }catch(error){
    console.log(error)
   }
}
const displayTemperature=(data)=>{
  console.log(data);
  const temperature=document.getElementById("temperature");
  temperature.innerText=data.main.temp;
   const condition=document.getElementById("condition");
   condition.innerText=data.weather[0].main;

   const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
const searchTemperature=()=>{
  const cityName=document.getElementById("city-name");
  const city=cityName.value;
  document.getElementById("city").innerText=city;
  loadtamparature(city);
  
}
loadtamparature('Dhaka');