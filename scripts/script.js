'use strict'
let container = document.getElementById("container")
for (let i=0; i<100; i++) {
    let box = document.createElement("div")
    box.innerHTML = "Hello"
    container.appendChild(box)
    box.classList.add("mystyle")
    
   
}