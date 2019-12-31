
const API_URL = "https://api.nasa.gov/planetary/apod?api_key=q72kF4az4WZ1kfkUbJjt20qpUQRfOSPCvlFlo7Ee";
const apodElement = document.querySelector('.APOD');

async function getAPOD() {
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json.url);
  const elem = document.createElement("img");
  elem.setAttribute("src", json.url);
  document.getElementById("APOD").appendChild(elem); 
};
const btn = document.getElementById("btn");
btn.addEventListener("click", getAPOD);



  



