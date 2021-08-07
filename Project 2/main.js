let txt = document.getElementById('txt')

txt.addEventListener('input' , function(){
    var text = this.value;
    let len = text.length;
    document.getElementById('char').innerHTML = len;
    
    let word = text.split(" ");
    let clean = word.filter(function(elm){
        return elm != "";
    });
    document.getElementById('word').innerHTML = clean.length;
});
