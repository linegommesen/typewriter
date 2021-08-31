"use strict";

let text = document.querySelector(".typewritten").textContent;
let maxNumberOfIterations = text.length;
let iterator;

const typeKey1 = document.querySelector("#typekey1"); 
const typeSpace = document.querySelector("#typespace");

document.querySelector(".starttypewriter").addEventListener("click", init);

document.querySelector(".typewritten").innerHTML = ""; 
function init(){
  iterator=0;
  document.querySelector(".typewritten").innerHTML = "";
  loop();
  
}
function loop(){
    if(iterator < maxNumberOfIterations){
        document.querySelector(".typewritten").innerHTML += text.charAt(iterator);
        if(text.charAt(iterator) === " "){
            typeSpace.play();
        }else{
            typeKey1.play();
        }
        iterator++;
        setTimeout(loop, 500);
    }else{
        setTimeout(init, 3000);
    }
}

