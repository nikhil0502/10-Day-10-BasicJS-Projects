let flag = 2;
slideShow(flag);

function controller(x){
   
    slideShow(flag += x);
}

function slideShow(num){
    let slide = document.getElementsByClassName('slider');
    if(num > slide.length){
        flag = 1
    }
if(num < 1){
    flag = slide.length;
}
for(let i = 0; i < slide.length ; i++){
    slide[i].style.display = "none";
}
    
    slide[flag-1].style.display = "block";
}

