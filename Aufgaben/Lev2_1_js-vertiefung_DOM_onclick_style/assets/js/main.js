const home = document.querySelector('#navHome');
const news = document.querySelector('#navNews');
const contanct = document.querySelector('#navContact');
const change = document.querySelector('#navChange');
const text = document.getElementById('btnText');



change.addEventListener('click', () => {
    
    home.classList.toggle('changeMe');
    text.classList.toggle('textDirection');
});