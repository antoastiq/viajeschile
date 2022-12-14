//Tooltips - Footer

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



//Alert - Sección Contacto

let texto = "¡Gracias por tu mensaje! Pronto te contactaremos."
$("#sendmessage").click(function(){
  alert(texto)
})


//Navbar background - Navbar


$(window).scroll(function(){
	let windowTopPosition =  $(this).scrollTop() //para determinar la parte superior de la pantalla
	let sectionQuienesSomos = $("#quienessomos").offset().top //para determinar el límite superior de la sección siguiente

	if (windowTopPosition > sectionQuienesSomos) {
		$(".navbar").css("background-color","rgba(0,0,0, .5)")
	} //si la posición baja desde el límite superior de la sección siguiente, fondo negro con opacity

	else {
		$(".navbar").css("background-color","transparent")
	} //si la posición no baja del límite superior de la sección siguiente, fondo transparente
})






