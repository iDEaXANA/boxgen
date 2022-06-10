'use strict'

let container = document.getElementById("container")
let number = document.getElementById("number")
number.addEventListener("input",generate)

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


let i=user
if (i==user) {

    let box = document.createElement("div")
    box.innerHTML = "Hello"
    container.appendChild(box)
    box.classList.add("mystyle")
    
}



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
/*
function smallest(x,y,z) {

    return Math.min(x,y,z);
}
console.log(smallest(2,4,7))
console.log(smallest(10,20,-9))
console.log(smallest(0,10,100))
*/

/*let input = parseInt(prompt("Please enter a number"))
let exponent = parseInt(prompt("Please enter an exponent"))

let exponentiation=(input,exponent)=> input ** exponent;

console.log(exponentiation(input,exponent))*/

/* let exponentiation=(input,exponent)=> input ** exponent;

Will replace: 

function exponentiation(input,exponent) {
   
    return (input ** exponent);
}
*/