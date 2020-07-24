//Arrays con los que trabajaremos
let forIdSelectors = ["dni", "ref", "precio", "cantidad", "ffac"];
var objectContainer = new Array(5);
let frutas = ["aguacate", "albaricoque", "cerezas", "fresas", "granada", "lima", "manzanas", "melocoton", "naranja", "pera", "piña", "platano", "sandia"];
var allFruits = document.getElementsByClassName("fpeque");
var teibol = ["dni", "ref", "precio", "cantidad", "totalAdd", "borrar"];
//Variables de almacenamiento
var counter = 0;
var count = 0;
var frutaTemp = {};
var allValue = 0;

//Funcion que comprueba si se dan las condiciones para introducir un registro
function check() {
	var dni = document.getElementById("dni")["value"];
	var ref = document.getElementById("ref")["value"];
	var precio = document.getElementById("precio")["value"];
	var cantidad = document.getElementById("cantidad")["value"];
	if (ref != "" && precio != "" && isNaN(cantidad) == false && cantidad["length"] > 0 && dni["length"] == 9 && 
	isNaN(dni[0] + dni[1] + dni[2] + dni[3] + dni[4] + dni[5] + dni[6] + dni[7]) == false && isNaN(dni[8]) == true) {
		document.getElementById("grabar")["disabled"] = false;
	} else {
		document.getElementById("grabar")["disabled"] = true;
	}
}

//Funcion que enlaza el boton de borrado a su respectivo contenedor
function change(i) { document.getElementById("del" + i).onclick = function() { document.getElementById("tr" + i).remove(); } }

//Funcion que suma el total de los precios
function refresh() { 
	var tAdd = document.getElementsByClassName("totalAdd").length; 
	allValue = 0; 
	for (i = 0; i < tAdd; i++) { 
		allValue += parseInt(document.getElementsByClassName("totalAdd")[i]["innerHTML"]) 
	} 
	document.getElementsByTagName("tfoot")[0].querySelector("tr").querySelectorAll("td")[1]["innerHTML"] = allValue; 
}

//Bucles for que prepararan los elementos de la pagina que vamos a usar y añade un evento de doble click para acceder a las funciones del final del codigo
for (i = 2; i < objectContainer.length; i++) { objectContainer[i] = document.getElementById(forIdSelectors[i]); }

//Rellena el formulario
function base(fruita) {
	for(i = 0; i < 2; i++) { objectContainer[i + 1]["value"] = document.getElementById(fruita).getElementsByTagName("span")[i]["innerText"]; }
	objectContainer[4]["style"]["cssText"] = "background-size: 100px 100px; background-image: url('./imagenes/" + fruita + ".jpg')";
}

//Funciones que usan la funcion que rellena el formulario
function setting(o) { allFruits[o]["ondblclick"] = function() { base(frutas[o]) }; }
for (i in frutas) { setting(i); }

//Añade un evento de click para acceder a la funcion fillOrRemove
document.getElementById("cancelar")["onclick"] = function() {event.preventDefault(); fillOrRemove(false);};
document.getElementById("grabar")["onclick"] = function() {event.preventDefault(); fillOrRemove(true);};
document.getElementById("recuperar")["onclick"] = function() {event.preventDefault(); saveOrRestore(false); };
document.getElementById("almacenar")["onclick"] = function() {event.preventDefault(); saveOrRestore(true); };
	
//Bucle for que preparara los elementos de la pagina que vamos a usar
for (i = 0; i < 2; i++) { objectContainer[i] = document.getElementById(forIdSelectors[i]); }

function fillOrRemove(fill)  {
	var nTr = document.createElement("tr");
	nTr["classList"] = "cabina";
	var nTd = new Array(6);
	
	//Si fill es true añade una fila nueva a la tabla
	if (fill) {
		//Creacion de nueva fila
		for (i in objectContainer) { 
			nTd[i] = document.createElement("td");
			objectContainer[i] = document.getElementById(forIdSelectors[i]); 
			if (i == 4) { 
				nTd[i].setAttribute("class", "totalAdd");
				nTd[i]["style"]["textAlign"] = "right";
				nTd[i].appendChild(document.createTextNode(objectContainer[2]["value"] * objectContainer[3]["value"]));
			} else {
				nTd[i]["style"]["textAlign"] = "left";
				nTd[i].appendChild(document.createTextNode(objectContainer[i]["value"]));
			}
			nTr.appendChild(nTd[i]);
		} 
		and = document.createElement("button");
		and["style"]["cssText"] = "color: white; background-color: black";
		and["innerText"] = "Eliminar";
		and.setAttribute("class", "eliminar");
		and.setAttribute("id", "del" + counter);
		nTd[5] = document.createElement("td");
		nTd[5]["classList"] = "but";
		nTd[5]["style"]["cssText"] = "backgroundColor: white; border: 1px solid white;";
		nTd[5].appendChild(and);
		nTr.appendChild(nTd[5]);
		nTr.setAttribute("id", "tr" + (counter));
		document.getElementsByTagName("tbody")[0].appendChild(nTr);
		
		change(counter++);
	} //Si fill es false borra los campos del formulario
	else { for(i in objectContainer) { document.getElementById(forIdSelectors[i])["value"] = ""; } }
}

//Funcion que guarda o recupera una tabla
function saveOrRestore(save) {
	if (save) {
		var tbdy = document.getElementsByTagName("tbody")[0].querySelectorAll("tr").length;
		for (y = 1; y < tbdy; y++) {
			frutaTemp[(y-1)] = {};
			for (i = 0; i < 5; i++) {
				frutaTemp[(y-1)][teibol[i]] = {};
				frutaTemp[(y-1)][teibol[i]]["innerHTML"] = document.getElementsByTagName("tbody")[0].querySelectorAll("tr")[y].querySelectorAll("td")[i]["innerHTML"]
				frutaTemp[(y-1)][teibol[i]]["textAlign"] = document.getElementsByTagName("tbody")[0].querySelectorAll("tr")[y].querySelectorAll("td")[i]["textAlign"];
			}
			frutaTemp[(y-1)]["borrar"] = {};
			frutaTemp[(y-1)]["totalAdd"]["clase"] = document.getElementsByTagName("tbody")[0].querySelectorAll("tr")[y].querySelectorAll("td")[4]["className"];
			frutaTemp[(y-1)]["borrar"]["clase"] = document.getElementsByTagName("tbody")[0].querySelectorAll("tr")[y].querySelectorAll("td")[5]["className"];
			frutaTemp[(y-1)]["borrar"]["innerHTML"] = document.getElementsByTagName("tbody")[0].querySelectorAll("tr")[y].querySelectorAll("td")[5].querySelectorAll("button")[0]["innerHTML"]
		}
		localStorage.setItem("fruita", JSON.stringify(frutaTemp));
		alert(JSON.stringify(frutaTemp))
		count++;
	} else { 
		var json = JSON.parse(localStorage.getItem("fruita"));
		var nTr = document.createElement("tr");
		
		for (y in json) {
			nTr = document.createElement("tr");
			nTr["classList"] = "cabina";
			nTr.setAttribute("id", "tr" + (counter));
			for (i in teibol) { 
				var nTd = new Array(6);
				nTd[i] = document.createElement("td");
				if (i == 4) { 
					nTd[i].setAttribute("class", "totalAdd");
					nTd[i].setAttribute("style", "text-align:right");
					nTd[i].appendChild(document.createTextNode(parseInt(json[y][teibol[2]]["innerHTML"]) * parseInt(json[y][teibol[3]]["innerHTML"])));
				} else if (i == 5) {
					var and = document.createElement("button");
					and["style"]["cssText"] = "color: white; background-color: black";
					and.setAttribute("class", "eliminar");
					and.setAttribute("id", "del" + counter);
					and.appendChild(document.createTextNode(json[y][teibol[i]]["innerHTML"]));
					nTd[5] = document.createElement("td");
					nTd[5]["classList"] = "but";
					nTd[5]["style"]["cssText"] = "backgroundColor: white; border: 1px solid white;";
					nTd[5].appendChild(and);
					nTr.appendChild(nTd[5]);
				} else {
					nTd[i].setAttribute("style", "text-align:left");
					nTd[i].appendChild(document.createTextNode(json[y][teibol[i]]["innerHTML"]));
				}
				nTr.appendChild(nTd[i]);
			} 
			document.getElementsByTagName("tbody")[0].appendChild(nTr);
			change(counter++);
			refresh();
		}
	}
}
document.getElementById("grabar")["disabled"] = true;
setInterval(check, 100);
setInterval(refresh, 100);
var kill = document.createElement("button");
kill.appendChild(document.createTextNode(" BORRAR TABLA LOCAL "));
kill.setAttribute("id", "borraLocal");
document.getElementById("factura").appendChild(kill);
$("#borraLocal").on("click", function() { localStorage.removeItem("fruita"); })
document.getElementById("borraLocal").onclick = function() {
	localStorage.removeItem("fruita");
}