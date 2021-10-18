let date = new Date();
let hour = date.getHours();
console.log(hour);
let text = document.getElementById("differentGreet");
if(hour >= 5 && hour <= 11 ){
  text.innerText = "Good Morning";
}
if(hour >= 12 && hour <= 15 ){
  text.innerText = "Good noon";
}
if(hour >= 15 && hour <= 18 ){
  text.innerText = "Good Afternoon";
}
if(hour >= 18 && hour <= 22 ){
  text.innerText = "Good Evening";
}
if(hour >= 22 && hour <= 23 ){
  text.innerText = "What's up";
}
if(hour >= 0 && hour <= 4 ){
  text.innerText = "What's up";
}
