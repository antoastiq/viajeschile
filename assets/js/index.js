//Tooltips - Footer

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



//Alert - Sección Contacto

var texto = "¡Gracias por tu mensaje! Pronto te contactaremos."
$("#sendmessage").click(function(){
    alert(texto)
})


//Navbar background - Navbar



$(window).scroll(function (){
    console.log("scroll")
    $(".navbar").css("background-color","rgba(0,0,0, .5)")

})

