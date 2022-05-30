'use strict'
let container = document.getElementById("container")
let number = document.getElementById("number")
number.addEventListener("input",generate)
/*let user = prompt("Please enter a value between 0-100").value*/

function generate(e){
    container.innerHTML= ""
    for (let i=0; i<e.target.value; i++)
    {
    let box = document.createElement("div")
    box.innerHTML = "Hello"
    container.appendChild(box)
    box.classList.add("mystyle");
    }

}
/*
let i=user
if (i==user) {

    let box = document.createElement("div")
    box.innerHTML = "Hello"
    container.appendChild(box)
    box.classList.add("mystyle")
    
}
*/


/*"use strict";




let list="Apples,Fish,Bread,Milk,Cheese,Grapes,Cake,Bananas".split(",")

let shopping = document.getElementById("shopping")


for (let i=0;i<list.length;i++){
    let item=document.createElement("div")   
    //if(i==3) {item.style.backgroundColor="green"}
    item.innerHTML=list[i]
    shopping.appendChild(item)    
    item.addEventListener("click",buyItem)
    item.className="grocery"
}


function buyItem(e){

    let selected = e.target
    selected.classList.add("selected")

    alert("You clicked" + e.target.innerHTML)    

}









*/