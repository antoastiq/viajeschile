//Tooltips - Footer

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



//Alert - Sección Contacto

var texto = "¡Gracias por tu mensaje! Pronto te contactaremos."
$("#sendmessage").click(function(){
    alert(texto)
})