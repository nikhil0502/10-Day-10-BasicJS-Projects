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

window.addEventListener('scroll' , function(){

    var win = document.getElementById('flex')
    if(window.pageYOffset >=10 )
    {
        win.classList.add("flex-box-1");
    }
    else{
        win.classList.remove('flex-box-1');
    }
})

