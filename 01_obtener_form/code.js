function aaa() {
	/*variables y asignaciones de "Datos Básicos"*/
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var edad = document.getElementById("edad").value;
	var correo = document.getElementById("correo").value;
	/*variables y asignaciones de "Más datos"*/
	var hobbies = document.getElementById("hobbies").value;
	var estudios = document.getElementById("estudios").value;
	var estudios_final;
	var profesion = document.getElementById("profesion").value;
	var profesion_final;
	/*variables y asignacionies de "Skills"*/
	var leng = document.getElementById("leng").value;
	var leng_final;
	var castellano = document.getElementById("cast").checked;
	var catala = document.getElementById("cat").checked;
	var ingles = document.getElementById("ing").checked;
	var aleman = document.getElementById("ale").checked;
	var idiomas = "ningún idioma <em>de las opciones anteriores</em>";

	/*if para las dos primeras opciones de los select, porque tienen otra estructura. Dentro de los ifs he decidido poner un switch dado a que son muchas opciones en los select*/
	/*--textarea--*/
	if (hobbies == "") {
		hobbies = "nada";
	}
	/*--selects--*/
	if (estudios == "ninguno") {
		estudios_final = "No tienes estudios"
	} else {
		estudios_final = "<em>Tienes ";
		switch (estudios) {
			case "eso":
				estudios_final += "la </em>ESO";
				break;
			case "bach":
				estudios_final += "</em>bachillerato";
				break;
			case "fpb":
				estudios_final += "un </em>FP Básico";
				break;
			case "fpm":
				estudios_final += "un </em>FP Medio";
				break;
			case "fps":
				estudios_final += "un </em>FP Superior";
				break;
			case "carrera":
				estudios_final += "una </em>carrera universitaria";
				break;
			case "mas":
				estudios_final += "estudios</em> más avanzados";
				break;
			case "noreg":
				estudios_final += "estudios</em> no reglados"
				break;
		}
	}
	if (profesion == "des") {
		profesion_final = "<em>Eres</em> desempleado/a"
	} else {
		profesion_final = "<em>Trabajas de </em>";
		switch (profesion) {
			case "arq":
				profesion_final += "arquitecta/o";
				break;
			case "jar":
				profesion_final += "jardinero/a";
				break;
			case "pan":
				profesion_final += "panadera/o";
				break;
			case "ta":
				profesion_final += "taxista";
				break;
			case "gr":
				profesion_final += "granjera/o";
				break;
		}
	}
	if (leng == "nin") {
		leng_final = "<em>No sabes </em>ningún<em> lenguaje de programación</em>"
	} else {
		leng_final = "<em>Sabes programar en </em>";
		switch (leng) {
			case "js":
				leng_final += "JavaScript";
				break;
			case "c":
				leng_final += "C";
				break;
			case "j":
				leng_final += "Java";
				break;
			case "cpp":
				leng_final += "C++";
				break;
			case "py":
				leng_final += "Python";
				break;
			case "php":
				leng_final += "PHP";
				break;
		}
	}
	/*--checkbox--*/
	/*podría haberlo hecho mas "correcto" poniendo otras opciones como que los idiomas si son mas de dos se separen entre comas pero no queria enrollarme con esto*/
	if ((castellano == true) && (catala == true)) {
		idiomas = " castellano <em>y</em> ";
	} else if (castellano == true) {
		idiomas = " castellano ";
	}
	if ((catala == true) && (idiomas == "ningún idioma <em>de las opiones anteriores</em>" || castellano == true)) {
		idiomas += "catalán";
	} else if ((catala == true && castellano == true) && (aleman == true || ingles == true)) {
		idiomas += ", catalán";
	} else if (catala == true) {
		idiomas = "catalán ";
	}
	if (ingles == true && idiomas == "ningún idioma <em>de las opciones anteriores</em>") {
		idiomas = " inglés";
	} else if ((ingles == true) && ((castellano == true) || (aleman == true) || (catala == true))) {
		idiomas += "<em> e</em> inglés";
	}
	if (aleman == true && idiomas == "ningún idioma <em>de las opciones anteriores</em>") {
		idiomas = " alemán";
	} else if (aleman == true) {
		idiomas += "<em> y</em> alemán";
	}
	if ((aleman == true) && (ingles == true) && (catala == true) && (castellano == true)) {
		idiomas = "castellano<em>,</em> catalán<em>,</em> inglés <em>y</em> alemán"
	}
	/*lo que aparecerá en el primer div de "Tus datos"*/
	document.getElementById("a").innerHTML = ("<em>Te llamas: </em> " + nombre + " " + apellidos + "<br><br><em>Tienes </em>" + edad + "<em> años <br><br> Y tu correo es: </em>" + correo);

	/*lo que aparecerá en el segundo div de "Tus datos"*/
	document.getElementById("b").innerHTML = ("<em>Te gusta </em>" + hobbies + "<br><br>" + estudios_final + "<br><br>" + profesion_final);

	/*Lo que aparecerá en el tercer div de "Tus datos"*/
	document.getElementById("c").innerHTML = (leng_final + "<em> y además hablas en </em>" + idiomas);
}

function ayuda(){
	 window.open("ayuda.html","","width=350,height=350");
}
