const inicio = document.getElementById("inicio");
const sobreMi = document.getElementById("sobre_mi");
const habilidadesBlandas = document.getElementById("habilidades_blandas");
const proyectos = document.getElementById("proyectos");
const contactame = document.getElementById("contactame");
const ingles = document.getElementById("ingles");

inicio.addEventListener("click", function(){
    console.log("Isidro se la come");
});

sobreMi.addEventListener("click", function(){
    console.log("Isidro se la come");
});

habilidadesBlandas.addEventListener("click", function(){
    console.log("Isidro se la come");
});

proyectos.addEventListener("click", function(){
    console.log("Isidro se la come");
});

contactame.addEventListener("click", function(){
    console.log("Isidro se la come");
});

ingles.addEventListener("click", function(){
    console.log("Isidro se la come");
});

let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${200*stt}px) scale(${1 - 0.2*stt})`;
            items[i].style.zIndex = -stt;
            // items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-200*stt}px) scale(${1 - 0.2*stt})`;
            items[i].style.zIndex = -stt;
            // items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }