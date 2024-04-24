const time = document.querySelector('.clock');
time.style.color = "orange";

setInterval(function(){
 const date = new Date ;
 time.innerHTML = date.toLocaleTimeString();
},2000)
