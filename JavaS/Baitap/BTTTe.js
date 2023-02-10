function Money(){
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let ToC = document.getElementById("To").value;
    let Result;

    if(FromC == "VND" && ToC == "USD"){
        Result = "Result : " + (Amount / 23000) + "USD";
    }else if(FromC == "USD" && ToC == "VND"){
        Result = "Result : " + (Amount*23000) + "VND";
    }else if(FromC == "VND" && ToC == "VND"){
        Result = "Result : " + Amount + "VND";
    }else if(FromC == "USD" && ToC == "USD"){
        Result = "Result : " + Amount + "USD";
    }
    document.getElementById("Result").innerHTML = Result;
}