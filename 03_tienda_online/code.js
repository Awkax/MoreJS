/*Quería ahorrar código haciendo arrays pero creo que no he ahorrado tanto código sino que me he complicado la vida. Podría haberlo hecho como si fuera un formulario pero ya no lo quería cambiar.*/
var producto = new Array(4); /*array producto*/
producto[0] = new Array(9); /*nombre producto*/
producto[1] = new Array(9); /*precio producto*/
producto[2] = new Array(9); /*cantidad producto*/
producto[3] = new Array(9); /*precio x cantidad*/
var carrito = []; /*array carrito*/
var i; /*variable para recorrer carrito*/
var precio = []; /*array precios*/
var preciofinal = 0; /*suma array precios*/
var envio = 6; /*precio envio*/
var IVA = 0.21; /*IVA*/
var total_IVA; /*iva de array precios*/
var coste; /*suma de iva-precios y precios*/
var total; /*suma de envio y coste*/
var imgcarro; /*imagen carro*/
var iidt; /*identificadorIntervaloDeTiempo*/
iidt = setInterval(aaa, 1000); /*que "aaa" se ejecute cada segundo*/

function aaa() {
	/*funcion del div de carro*/
	
	document.getElementById("prod").innerHTML = (carrito.join("\n")); /*mostrar productos sin comas en div con un salto de línea si hace falta*/
	
	while (i < precio.length) {
		preciofinal += precio[i];
		preciofinal = parseFloat(preciofinal);
		i++; /*sumar array precios*/
	}
	document.getElementById("precio").innerHTML = (preciofinal.toFixed(2) + "€"); /*mostrar precio en div*/

	total_IVA = preciofinal * IVA;
	coste = preciofinal + total_IVA; /*calculo precio con iva incluido pero sin envio*/

	if (coste >= 40) {
		/*descuento del envio si la compra es superior o igual  a 40€*/
		envio = 0;
		document.getElementById("envio").innerHTML = ("GRATIS");
	}

	total = coste + envio; /*calculo total*/

	document.getElementById("total").innerHTML = (total.toFixed(2) + "€"); /*mostrar calculo total en div*/
}
/*---funciones que añaden productos al carro---*/

function prueba(){
	producto[3][i] = producto[1][i] * producto[2][i];
	swal({/*alert modificado*/
		title: "Hecho!",
		text: "Se ha añadido " + producto[0][i] + " a tu carrito",
		icon: "success",
	});
	precio[i] = parseFloat(producto[3][i]);
	carrito[i] = producto[0][i];
}

function anyadir1() {
	i = 0;
	producto[0][i] = document.getElementById("nombre1").innerHTML;
	producto[1][i] = document.getElementById("numero1").innerHTML;
	producto[2][i] = document.getElementById("cantidad1").value;
	prueba();
}

function anyadir2() {
	i = 1;
	producto[0][i] = document.getElementById("nombre2").innerHTML;
	producto[1][i] = document.getElementById("numero2").innerHTML;
	producto[2][i] = document.getElementById("cantidad2").value;
	prueba();
}

function anyadir3() {
	i = 2;
	producto[0][i] = document.getElementById("nombre3").innerHTML;
	producto[1][i] = document.getElementById("numero3").innerHTML;
	producto[2][i] = document.getElementById("cantidad3").value;
	prueba();
}

function anyadir4() {
	i = 3;
	producto[0][i] = document.getElementById("nombre4").innerHTML;
	producto[1][i] = document.getElementById("numero4").innerHTML;
	producto[2][i] = document.getElementById("cantidad4").value;
	prueba();
}

function anyadir5() {
	i = 4;
	producto[0][i] = document.getElementById("nombre5").innerHTML;
	producto[1][i] = document.getElementById("numero5").innerHTML;
	producto[2][i] = document.getElementById("cantidad5").value;
	prueba();
}

function anyadir6() {
	i = 5;
	producto[0][i] = document.getElementById("nombre6").innerHTML;
	producto[1][i] = document.getElementById("numero6").innerHTML;
	producto[2][i] = document.getElementById("cantidad6").value;
	prueba();
}

function anyadir7() {
	i = 6;
	producto[0][i] = document.getElementById("nombre7").innerHTML;
	producto[1][i] = document.getElementById("numero7").innerHTML;
	producto[2][i] = document.getElementById("cantidad7").value;
	prueba();
}

function anyadir8() {
	i = 7;
	producto[0][i] = document.getElementById("nombre8").innerHTML;
	producto[1][i] = document.getElementById("numero8").innerHTML;
	producto[2][i] = document.getElementById("cantidad8").value;
	prueba();
}

function anyadir9() {
	i = 8;
	producto[0][i] = document.getElementById("nombre9").innerHTML;
	producto[1][i] = document.getElementById("numero9").innerHTML;
	producto[2][i] = document.getElementById("cantidad9").value;
	prueba();
}

function carro() {
	/*función para ver div carro*/
	if (document.getElementById("idcarro").style.visibility == "visible") {
		document.getElementById("idcarro").style.visibility = "hidden";
	} else {
		document.getElementById("idcarro").style.visibility = "visible";
	}
	/*imagen carro*/
	imgcarro = document.getElementById("img-carro");
	if (imgcarro.src.match("negr")) {
		imgcarro.src = "media/carro_blanco.webp";
	} else {
		imgcarro.src = "media/carro_negro.webp";
	}
}
function aviso(){
	if (document.getElementById("aviso").style.visibility == "visible") {
		document.getElementById("aviso").style.visibility = "hidden";
	}else {
		document.getElementById("aviso").style.visibility = "visible";
	}
}
function cambiar(a) {
	/*funcion cambiar css*/
	var css = document.getElementById("css");
	if (a == 1)
		css.href = "styles.css";
	if (a == 2)
		css.href = "styles2.css";
}

function pagar() {
	/*funcion web pagar*/
	window.open("https://theuselessweb.com/", "", "width=700","height=700");
}
