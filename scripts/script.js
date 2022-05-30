'use strict'

for (let i=0; i<100; i++) {
    let box = document.createElement("div")
    box.innerHTML = "Hello"
    document.body.appendChild(box)
    box.style.backgroundColor = "green"
    box.style.border = "solid"
    /*{item.style.backgroundColor="green"}*/
}