let userName =prompt("Wh's there?",'');
if (userName == 'Admin'){
    let pass = prompt ('Password?','');
    if (pass=='TheMaster'){
        alert("Welcome!");
    }else if (pass == null){
        alert('Canceled.');
    }else {
        alert('Wrong password');
    }
}else if (userName == null){
    alert('canceled');
}else{
    alert("I don't know you");
}