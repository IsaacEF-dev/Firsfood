const menu = document.querySelector(".toggle");
const navegador = document.querySelector('.navegador')
const buscador = document.querySelector('#search')
const viewBuscador = document.querySelector('.buscador');
const closeSearch = document.querySelector('.close');
const like = document.querySelectorAll('.like-plato');
console.log(like.length);
menu.addEventListener('click', menuHamburgesa);
buscador.addEventListener('click', mostrarBuscador);
closeSearch.addEventListener('click', cerrarBuscador);

like.forEach(comer => {
    comer.addEventListener('click', likePlatillo);
})


function menuHamburgesa(e) {
    let x = e.originalTarget;
    x.classList.toggle("fa-times")
    mostrarMenu();
}

function mostrarMenu() {
    navegador.classList.toggle("active");
}

function mostrarBuscador() {
    viewBuscador.classList.toggle('active');
}

function cerrarBuscador() {
    viewBuscador.classList.toggle('active')
}

const slider = document.querySelector('.slider');
const contentBanner = document.querySelectorAll('.contenedor-banner');
const sliderSectionLast = contentBanner[contentBanner.length - 1];
const indicador = document.querySelectorAll('.indicador-banner span');

// slider.insertAdjacentElement('afterbegin', sliderSectionLast);
document.addEventListener('DOMContentLoaded', carrusel);

function carrusel() {
    let i = 1;

    setInterval(() => {
        let sliderSectionFirst = document.querySelectorAll('.contenedor-banner')[0];
        slider.style.marginLeft = '-100%';
        slider.style.transition = 'all .8s';


        setTimeout(() => {
            slider.style.transition = 'none';
            /**inserta la primera seccion al final de la ultima seccion */
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = '0%';

        }, 800);


        /**Mostrar Indicador */
        switch (i) {
            case 0:
                indicador[0].classList.toggle('active');
                indicador[2].classList.remove('active');
                break;
            case 1:
                indicador[0].classList.remove('active');
                indicador[1].classList.toggle('active');
                break;
            case 2:
                indicador[1].classList.remove('active');
                indicador[2].classList.toggle('active');
                break;
        }

        if (i == 2) {
            i = 0;
        } else {
            i++;
        }

    }, 5000)
}

/**funcion de like o corazon al plato */
function likePlatillo(e) {
    e.target.classList.toggle("active");
}