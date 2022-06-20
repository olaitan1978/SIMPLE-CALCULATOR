let num1 =parseFloat(document.getElementById("nu1").value)
let num2 =parseFloat(document.getElementById("nu2").value)
let output =document.getElementById("res")
let button1 =document.getElementById("bu1")
let button2 =document.getElementById("bu2")
let button3 =document.getElementById("bu3")
let button4 =document.getElementById("bu4")
let button5 =document.getElementById("bu5")
function add(){
    output.innerHTML=num1+num2
    console.log(output.innerText)
}
button1.addEventListener("click",add)
function substract(){
    output.innerHTML=num1-num2
    console.log(output.innerText)
}
button2.addEventListener("click",substract)
function multiply(){
    output.innerHTML=num1*num2
    console.log(output.innerText)
}
button3.addEventListener("click",multiply)
function divide(){
    output.innerHTML=num1/num2
    console.log(output.innerText)
}
button4.addEventListener("click",divide)
function cle(){
    output.innerHTML=""
    
}
button5.addEventListener("click",cle)