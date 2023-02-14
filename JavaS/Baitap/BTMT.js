function Addition(){
    let Num1 = +document.getElementById("Number1").value;
    let Num2 = +document.getElementById("Number2").value;
    let Result = Num1 + Num2;
    document.getElementById("Result").innerHTML = Result;
}
function Subtraction(){
    let Num1 = +document.getElementById("Number1").value;
    let Num2 = +document.getElementById("Number2").value;
    let Result = Num1 - Num2;
    document.getElementById("Result").innerHTML = Result;
}
function Multiplication(){
    let Num1 = +document.getElementById("Number1").value;
    let Num2 = +document.getElementById("Number2").value;
    let Result = Num1 * Num2;
    document.getElementById("Result").innerHTML = Result;
}
function Division(){
    let Num1 = +document.getElementById("Number1").value;
    let Num2 = +document.getElementById("Number2").value;
    let Result = Num1 / Num2;
    document.getElementById("Result").innerHTML = Result;
}
