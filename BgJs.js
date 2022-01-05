var h2=document.querySelector("h2");
var color1=document.querySelector(".pick1");
var color2=document.querySelector(".pick2");
var body=document.getElementById("body");

function setColor()
{
    body.style.background="linear-gradient(to right," +color1.value+ " , " +color2.value+ ")";
    h2.textContent=body.style.background +";";
    // This line above is exactly like css background linear-gradient to dont get overwheled!
}

color1.addEventListener("input",setColor);
color2.addEventListener("input",setColor);
