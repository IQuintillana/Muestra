var frm = document.getElementById("miform");
frm.action = "";
var ref = document.getElementById("ref");
var precio = document.getElementById("precio");
var core = document.getElementById("ffac");
var dni = document.getElementById("dni");
var cantidad = document.getElementById("cantidad");

var tbdy;
var thetr;
var nTr;
var nTd;
var x1;
var x2;
var x3;
var x4;

function iniciar(){
	var dni = document.getElementById("dni");
	var cantidad = document.getElementById("cantidad");
	dni.style.pattern = "[0-9]{1}";

	var cancel = document.getElementById("cancelar");
	cancel.onclick = clsButton;

	var masterDiv = document.getElementsByClassName("fpeque");
	masterDiv[0].ondblclick = image1;
	masterDiv[1].ondblclick = image2;
	masterDiv[2].ondblclick = image3;
	masterDiv[3].ondblclick = image4;
	masterDiv[4].ondblclick = image5;
	masterDiv[5].ondblclick = image6;
	masterDiv[6].ondblclick = image7;
	masterDiv[7].ondblclick = image8;
	masterDiv[8].ondblclick = image9;
	masterDiv[9].ondblclick = image10;
	masterDiv[10].ondblclick = image11;
	masterDiv[11].ondblclick = image12;
	masterDiv[12].ondblclick = image13;

	var masterImg = document.getElementsByClassName("peque");

	/*formulario*/
	ref = document.getElementById("ref");
	precio = document.getElementById("precio");

	tbdy = document.getElementsByTagName("tbody").querySelectorAll();
	thetr = tbdy[0];
	nTr = document.createElement("tr");
	nTd = document.createElement("td");
	x1 = document.createTextNode("");
	x2 = document.createTextNode("");
	x3 = document.createTextNode("");
	x4 = document.createTextNode("");
	
	var butt = document.getElementsByClassName("grabar");
	butt.onclick = fillTab;
}

function fillTab() {
	dni = document.getElementById("dni");
	cantidad = document.getElementById("cantidad");
	ref = document.getElementById("ref");
	precio = document.getElementById("precio");
	x1 = document.createTextNode(dni);
	x2 = document.createTextNode(ref);
	x3 = document.createTextNode(precio);
	x4 = document.createTextNode(cantidad);
	nTd.appendChild(x1);
	nTr.appendChild(nTd);
	nTd.appendChild(x2);
	nTr.appendChild(nTd);
	nTd.appendChild(x3);
	nTr.appendChild(nTd);
	nTd.appendChild(x4);
	nTr.appendChild(nTd);
	thetr.appendChild(nTr);
	alert("HELLO");
}

function clsButton() {
	dni = document.getElementById("dni");
	cantidad = document.getElementById("cantidad");
	dni.value = "";
	ref.value = "";
	precio.value = "";
	cantidad.value = "";
}

function image1() {
	var aguacate = document.getElementById("aguacate");
	var txt = aguacate.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/aguacate.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image2() {
	var albaricoque = document.getElementById("albaricoque");
	var txt = albaricoque.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/albaricoque.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image3() {
	var cerezas = document.getElementById("cerezas");
	var txt = cerezas.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/cerezas.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image4() {
	var fresas = document.getElementById("fresas");
	var txt = fresas.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	
	core.style.backgroundImage = "url('./imagenes/fresas.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image5() {
	var granada = document.getElementById("granada");
	var txt = granada.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/granada.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image6() {
	var lima = document.getElementById("lima");
	var txt = lima.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/lima.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image7() {
	var manzanas = document.getElementById("manzanas");
	var txt = manzanas.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/manzanas.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image8() {
	var melocoton = document.getElementById("melocoton");
	var txt = melocoton.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/melocoton.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image9() {
	var naranja = document.getElementById("naranja");
	var txt = naranja.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/naranja.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image10() {
	var pera = document.getElementById("pera");
    var txt = pera.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/pera.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image11() {
	var pina = document.getElementById("piña");
	var txt = pina.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/piña.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image12() {
	var platano = document.getElementById("platano");
	var txt = platano.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/platano.jpg')";
	core.style.backgroundSize = '100px 100px';
}

function image13() {
	var sandia = document.getElementById("sandia");
	var txt = sandia.getElementsByTagName("span");
	ref.value = txt[0].innerText;
	precio.value = txt[1].innerText;
	core.style.backgroundImage = "url('./imagenes/sandia.jpg')";
	core.style.backgroundSize = '100px 100px';
}

/*funció per a executar-se quan s'acaba la càrrega de la pàgina*/
window.onload=function(){
	/*funció anònima*/
	iniciar();
}



/*
Navegadores
https://es.wikipedia.org/wiki/Navegador_web
Actividad:
1. Escoger tres navegadores que no hayas utilizado nunca
2. Instalarlos en tu máquina virtual
3. Detallar para cada navegador la siguiente información:
a. Datos interesantes: nombre, historia del nombre, año de creación
b. Motor de renderizado
c. Estado actual (descontinuado, etc.)

Motores de renderizado
https://es.wikipedia.org/wiki/Motor_de_renderizado
Actividad:
1. Escoger un motor de renderizado que no conozcas
2. Detallar para cada uno la siguiente información:
a. Datos interesantes: nombre, historia del nombre, año de creación
b. En qué navegadores se está utilizando o se ha utilizado
c. Estado actual

Comparativa entre navegadores
Actividad:
1. Localiza en Internet un artículo en el que se realice una comparación de los
navegadores actuales. Para seleccionar el artículo considera utilizar los
parámetros de búsqueda de Google, donde podrás seleccionar que los
resultados los clasifique por orden de aparición cronológicamente
*/


/*
==============================================================================================
=======================================BACKUP 2=============================================
==============================================================================================
*/

var frm = document.getElementById("miform");
frm.action = "";
//event.preventDefault();

var ref = $("#ref");
var precio = $("#precio");
var core = $("#ffac");

//$(frm).attr("action", "");

var masterDiv = $(".fpeque");
var masterFunction = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11]
var masterId = ["#aguacate", "#albaricoque", "#cerezas", "#fresas", "#granada", "#lima", "#manzanas", "#melocoton", "#naranja", "#pera", "#piña", "#platano", "#sandia"]
var masterImage = ["aguacate.jpg", "albaricoque.jpg", "cerezas.jpg", "fresas.jpg", "granada.jpg", "lima.jpg", "manzanas.jpg", "melocoton.jpg", "naranja.jpg", "pera.jpg", "piña.jpg", "platano.jpg", "sandia.jpg"]
for (i in masterFunction) {
	$(masterDiv).eq(i).on("dblclick", masterFunction[i]);
}

function iniciar() {
	dni = $("#dni");
	cantidad = $("#cantidad");
	$(dni).css("pattern", "[0-9]{1}")

	var cancel = $("#cancelar");
	$(cancel).on("click", function() {fillOrRemove(false)});
	
	var record = $("#grabar");
	$(record).on("click", function() {fillOrRemove(true)});

	
}

function fillOrRemove(fill)  {
	var dni = $("dni");
	var cantidad = $("cantidad");
	ref = $("#ref");
	precio = $("#precio");
	core = $("#ffac");

	if (fill) {
		alert("Filled");
	} else { 
		$(dni).attr("value", "");
		$(ref).attr("value", "");
		$(precio).attr("value", "");
		$(cantidad).attr("value", "");
		alert("Erased");
	}
}

//Rellena el formulario
function baseImage(fruita, imatge) {
	var txt = $(fruita + " span");
	$(ref).attr("value", $(txt).eq(0).text());
	$(precio).attr("value", $(txt).eq(1).text());
	$(core).css("backgroundSize", "100px 100px");
	$(core).css("backgroundImage", "url('./imagenes/" + imatge + "')");
}

//Funciones que usan la funcion que rellena el formulario
function image1() { baseImage(masterId[0], masterImage[0]);}
function image2() { baseImage(masterId[1], masterImage[1]); }
function image3() { baseImage(masterId[2], masterImage[2]); }
function image4() { baseImage(masterId[3], masterImage[3]); }
function image5() { baseImage(masterId[4], masterImage[4]); }
function image6() { baseImage(masterId[5], masterImage[5]); }
function image7() { baseImage(masterId[6], masterImage[6]); }
function image8() { baseImage(masterId[7], masterImage[7]); }
function image9() { baseImage(masterId[8], masterImage[8]); }
function image10() { baseImage(masterId[9], masterImage[9]); }
function image11() { baseImage(masterId[10], masterImage[10]); }
function image12() { baseImage(masterId[11], masterImage[11]); }
function image13() { baseImage(masterId[12], masterImage[12]); }


$(window).on("load", iniciar());

/*
==============================================================================================
=======================================BACKUP 3=============================================
==============================================================================================
*/

var frm = document.getElementById("miform");
frm.action = "";
//event.preventDefault();
var topMaster = ["#dni", "#cantidad", "#ref", "#precio", "#ffac"];
var coMaster = [];
var ref = $("#ref");
var precio = $("#precio");
var core = $("#ffac");

//$(frm).attr("action", "");

var masterDiv = $(".fpeque");
var masterFunction = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11]
var masterId = {"aguacate" : "#aguacate", "albaricoques" : "#albaricoque", "cerezas" : "#cerezas", "fresas" : "#fresas", "granada" : "#granada", "lima" : "#lima", "manzanas" : "#manzanas", "melocoton" : "#melocoton", "naranja" : "#naranja", "pera" : "#pera", "piña" : "#piña", "platano" : "#platano", "sandia" : "#sandia"}
var masterImage = {"aguacate" : "aguacate.jpg", "albaricoques" : "albaricoque.jpg", "cerezas" : "cerezas.jpg", "fresas" : "fresas.jpg", "granada" : "granada.jpg", "lima" : "lima.jpg", "manzanas" : "manzanas.jpg", "melocoton" : "melocoton.jpg", "naranja" : "naranja.jpg", "pera" : "pera.jpg", "piña" : "piña.jpg", "platano" : "platano.jpg", "sandia" : "sandia.jpg"}
for (i in masterFunction) {
	$(masterDiv).eq(i).on("dblclick", masterFunction[i]);
}

function iniciar() {
	dni = $("#dni");
	cantidad = $("#cantidad");
	$(dni).css("pattern", "[0-9]{1}")

	var cancel = $("#cancelar");
	$(cancel).on("click", function() {fillOrRemove(false)});
	
	var record = $("#grabar");
	$(record).on("click", function() {fillOrRemove(true)});

	
}

function fillOrRemove(fill)  {
	var dni = $("dni");
	var cantidad = $("cantidad");
	ref = $("#ref");
	precio = $("#precio");
	core = $("#ffac");

	if (fill) {
		alert("Filled");
	} else { 
		$(dni).attr("value", "");
		$(ref).attr("value", "");
		$(precio).attr("value", "");
		$(cantidad).attr("value", "");
		alert("Erased");
	}
}

//Rellena el formulario
function baseImage(fruita, imatge) {
	var txt = $(fruita + " span");
	$(ref).attr("value", $(txt).eq(0).text());
	$(precio).attr("value", $(txt).eq(1).text());
	$(core).css("backgroundSize", "100px 100px");
	$(core).css("backgroundImage", "url('./imagenes/" + imatge + "')");
}

//Funciones que usan la funcion que rellena el formulario
function image1() { baseImage(masterId["aguacate"], masterImage["aguacate"]);}
function image2() { baseImage(masterId["albaricoques"], masterImage["albaricoques"]); }
function image3() { baseImage(masterId["cerezas"], masterImage["cerezas"]); }
function image4() { baseImage(masterId["fresas"], masterImage["fresas"]); }
function image5() { baseImage(masterId["granada"], masterImage["granada"]); }
function image6() { baseImage(masterId["lima"], masterImage["lima"]); }
function image7() { baseImage(masterId["manzanas"], masterImage["manzanas"]); }
function image8() { baseImage(masterId["melocoton"], masterImage["melocoton"]); }
function image9() { baseImage(masterId["naranja"], masterImage["naranja"]); }
function image10() { baseImage(masterId["pera"], masterImage["pera"]); }
function image11() { baseImage(masterId["piña"], masterImage["piña"]); }
function image12() { baseImage(masterId["platano"], masterImage["platano"]); }
function image13() { baseImage(masterId["sandia"], masterImage["sandia"]); }
$(window).on("load", iniciar());
