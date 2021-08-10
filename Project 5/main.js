let usr = document.getElementById("username");

let pwd = document.getElementById("password");

let flag = 1;

function validateForm(){
if(usr.value == ""){
    document.getElementById("ue").innerHTML = "Username Is Empty";
    flag = 0;
}
else if(usr.value.length < 3){
    document.getElementById("ue").innerHTML = "Username should be more than 3 characters";
    flag = 0;
}
else{
    document.getElementById("ue").innerHTML = "";
    flag ++ ;
}

if(pwd.value == ""){
    document.getElementById("pe").innerHTML = "Password Is Empty";
    flag = 0;
}
else if(pwd.value.length < 5){
    document.getElementById("pe").innerHTML = "Password should be more than 5 characters";
    flag = 0;
}
else{
    document.getElementById("pe").innerHTML = "";
     flag ++;
}
 if(flag){
     return true;
 }
 else{
     return false;
 }
}