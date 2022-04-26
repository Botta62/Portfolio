'use strict'

// Variables
var goUp = document.querySelector("#go-up");
var aboutMe = document.getElementById("sobreMi");
var aboutMe2 = document.getElementById("sobreMi2");
var proyects  = document.querySelector("#proyectos");
var proyects2  = document.querySelector("#proyectos2");
var contact  = document.querySelector("#contacto");
// Funciones


function scroll(par, alt){
    par.addEventListener('click', () => {
        window.scrollTo(1, alt);
    });
};

// 

scroll(goUp,1);
scroll(aboutMe,2200);
scroll(aboutMe2,2200);
scroll(contact,3800);
scroll(proyects,3100);
scroll(proyects2,3100);








