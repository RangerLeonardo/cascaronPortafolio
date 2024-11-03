document.addEventListener("DOMContentLoaded", function() {
    fetch('/CascaronPortafolio/html/fragmentCode/infiniteCarrusel.html') 
    .then(response => response.text()) 
    .then(data => { document.getElementById('div-infinite-carrusel').innerHTML = data; }); 
   });