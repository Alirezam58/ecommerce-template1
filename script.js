const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    });
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}


let mainImage = document.getElementById('MainImg');
let smallImage = document.getElementsByClassName('small-img');

smallImage[0].onclick = function(){
     mainImage.src = smallImage[0].src;
}

smallImage[1].onclick = function(){
    mainImage.src = smallImage[1].src;
}

smallImage[2].onclick = function(){
     mainImage.src = smallImage[2].src;
}

smallImage[3].onclick = function(){
    mainImage.src = smallImage[3].src;
}
        