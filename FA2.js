function add(){

var num1,num2,x;
num1 = document.getElementById("fnum").value;
num2 = document.getElementById("snum").value;
x= +num1 + +num2;
document.getElementById("result").innerHTML = "The sum of " +num1+ " and " +num2+ " is: " + x} 

function minus(){

var num1,num2,x;
num1 = document.getElementById("fnum").value;
num2 = document.getElementById("snum").value;
x= +num1 - +num2;
document.getElementById("result").innerHTML = "The difference of " +num1+ " and " +num2+ " is: " + x } 

function multiply(){
    
num1 = document.getElementById("fnum").value;
num2 = document.getElementById("snum").value;
document.getElementById("result").innerHTML = "The product of " +num1+ " and " +num2+ " is: " +num1 * num2 } 

function divide(){
    
num1 = document.getElementById("fnum").value;
num2 = document.getElementById("snum").value;
document.getElementById("result").innerHTML = "The quotient of " +num1+ " and " +num2+ " is: " +num1 / num2 } 

function modulo(){
    
num1 = document.getElementById("fnum").value;
num2 = document.getElementById("snum").value;
document.getElementById("result").innerHTML = "The remainder of " +num1+ " / " +num2+ " is: " +num1%num2 } 
