const inicio = document.getElementById("inicio");
const sobreMi = document.getElementById("sobre_mi");
const proyectos = document.getElementById("proyectos");
const contactame = document.getElementById("contactame");
const imgEnglish = document.getElementById("img_ingles");
const divEnglish = document.getElementsByClassName("div_ingles")[0];

const imgCV = document.getElementById("img_curriculum");
const divCV = document.getElementsByClassName("div_CV")[0];

inicio.addEventListener("click", function(){
    console.log("Isidro se la come");
});

sobreMi.addEventListener("click", function(){
    console.log("Isidro se la come");
});

proyectos.addEventListener("click", function(){
    console.log("Isidro se la come");
});

// Añade los event listeners para 'mouseover' y 'mouseout'
imgEnglish.addEventListener('mouseover', () => {
    divEnglish.classList.add("tooltipIngles");
});

imgEnglish.addEventListener('mouseout', () => {
    divEnglish.classList.remove("tooltipIngles");
});

// Añade los event listeners para 'mouseover' y 'mouseout'
imgCV.addEventListener('mouseover', () => {
    divCV.classList.add("tooltipCurriculum");
});

imgCV.addEventListener('mouseout', () => {
    divCV.classList.remove("tooltipCurriculum");
});
