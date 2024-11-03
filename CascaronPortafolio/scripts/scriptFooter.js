document.addEventListener("DOMContentLoaded", function() {
     fetch('/CascaronPortafolio/html/footer.html') 
     .then(response => response.text()) 
     .then(data => { document.getElementById('div-footer-insert').innerHTML = data; }); 
    });