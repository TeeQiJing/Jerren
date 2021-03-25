var b1 = document.getElementById("b1").value;
var b2 = document.getElementById("b2").value;
var b3 = document.getElementById("b3").value;
var b4 = document.getElementById("b4").value;
var b5 = document.getElementById("b5").value;
var b6 = document.getElementById("b6").value;
var b7 = document.getElementById("b7").value;
var b8 = document.getElementById("b8").value;
var b9 = document.getElementById("b9").value;
var b0 = document.getElementById("b0").value;
var plus = document.getElementById("plus").value;
var minus = document.getElementById("minus").value;
var divide = document.getElementById("divide").value;
var multiply = document.getElementById("multiply").value;
var rightPar = document.getElementById("rightPar").value;
var leftPar = document.getElementById("leftPar").value;
var ac = document.getElementById("ac").value;
var equal = document.getElementById("equal").value;
var text = document.getElementById("text").textContent;
function b1(){
    document.write()
}
function insert(num){
    document.getElementById("text").value += num;
}
function calculate(){
    var result = eval(document.getElementById("text").value);
    document.getElementById("result").value += result;
}
function clear(){

    document.getElementById('result').value='';
}
