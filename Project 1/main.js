var cel = document.getElementById('cel');

var fah = document.getElementById('fah');

cel.addEventListener('input' , function (){
    let c = cel.value;
    let f = (c * 9/5) + 32;
    if(!Number.isInteger()){
        f = f.toFixed(4);
    }
    fah.value = f;
});
fah.addEventListener('input' ,function(){
    let d = fah.value;
    let f = (d - 32) * 5/9 ;
    if(!Number.isInteger()){
        f = f.toFixed(4);
    }
    cel.value = f;
});




