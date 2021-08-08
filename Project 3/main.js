function changeBG(color){
    document.body.style.backgroundColor = color;
    var txt = document.getElementsByClassName('txt');
    if(color == "rgba(0,0,0,0.7)"){
        for(let elm of txt){
            elm.style.color = "white";
        }
    }else{
        for(let elm of txt){
            elm.style.color = "black";
        }
        
    }
}

