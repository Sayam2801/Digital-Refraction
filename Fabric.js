document.getElementById("trace-rays").addEventListener("click", function() {
  // const c = document.getElementById("canvas");
  // var ctx = c.getcontext("2d");
  // ctx.beginPath();
  // ctx.moveTo(0,0);
  // ctx.lineTo(50,50);
  // ctx.stroke();
  document.querySelector(".slanting").style.visibility = 'visible';
  document.querySelector(".vertical").style.visibility = 'visible';
  document.querySelector(".dotted").style.visibility = 'visible';
});
document.getElementById("air-button").addEventListener("click", function() {
  document.querySelector(".text").innerHTML = "air";
});
document.getElementById("glass-button").addEventListener("click", function() {
  document.querySelector(".text").innerHTML = "glass";
});
document.getElementById("water-button").addEventListener("click", function() {
  document.querySelector(".text").innerHTML = "water";
});
document.getElementById("diamond-button").addEventListener("click", function() {
  document.querySelector(".text").innerHTML = "diamond";
});

document.getElementById("refracted-ray").addEventListener("click", function() {
  const temp = document.querySelector(".text").innerHTML;
  if(temp === "glass")
  {
    document.querySelector(".glass").style.visibility = 'visible';
    document.querySelector(".glass-2").style.visibility = 'visible';
    document.querySelector(".vertical-3").style.visibility = 'visible';
    document.querySelector(".text-2").innerHTML = "glass";
    document.querySelector(".text-2").style.setProperty("left","19.8rem");
    document.querySelector(".text-2").style.setProperty("top","12.3rem");
  }
  if(temp === "water")
  {
    document.querySelector(".water").style.visibility = 'visible';
    document.querySelector(".water-2").style.visibility = 'visible';
    document.querySelector(".vertical-4").style.visibility = 'visible';
    document.querySelector(".text-2").innerHTML = "water";
    document.querySelector(".text-2").style.setProperty("left","20.4rem");
    document.querySelector(".text-2").style.setProperty("top","12.3rem");
  }
  if(temp === "diamond")
  {
    document.querySelector(".diamond").style.visibility = 'visible';
    document.querySelector(".diamond-2").style.visibility = 'visible';
    document.querySelector(".vertical-2").style.visibility = 'visible';
    document.querySelector(".text-2").innerHTML = "diamond";
    document.querySelector(".text-2").style.setProperty("left","18.3rem");
    document.querySelector(".text-2").style.setProperty("top","12.5rem");
  }
  if(temp === "air")
  {
    document.querySelector(".air").style.visibility = 'visible';
    document.querySelector(".vertical-5").style.visibility = 'visible';
    document.querySelector(".text-2").innerHTML = "air";
    document.querySelector(".text-2").style.setProperty("left","23.4rem");
    document.querySelector(".text-2").style.setProperty("top","11.8rem");
  }
});
