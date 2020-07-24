//Arrays con los que trabajaremos
let forIdSelectors = ["#dni", "#ref", "#precio", "#cantidad", "#ffac"];
var objectContainer = new Array(5);
let fruitIds = ["aguacate", "albaricoque", "cerezas", "fresas", "granada", "lima", "manzanas", "melocoton", "naranja", "pera", "piña", "platano", "sandia"];
var teibol = ["dni", "ref", "precio", "cantidad", "totalAdd", "borrar"];
var counter = 0;
var count = 0;
var allValue = 0;
var frutaTemp = {};
var newLine = "";

//Bucles for que prepararan los elementos de la pagina que vamos a usar y añade un evento de doble click para acceder a las funciones del final del codigo
for (i = 2; i < objectContainer.length; i++) { objectContainer[i] = $(forIdSelectors[i]); }

//Esta funcion comprueba constantemente de validar el formulario.
function check() {
	var dni = $("#dni").val();
	if ($("#ref").val() != "" && $("#precio").val() != "" && isNaN($("#cantidad").val()) == false && $("#cantidad").val().length > 0 && dni["length"] == 9 && 
	isNaN(dni[0] + dni[1] + dni[2] + dni[3] + dni[4] + dni[5] + dni[6] + dni[7]) == false && isNaN(dni[8]) == true) {
		$("#grabar").prop("disabled", false);
	} else { $("#grabar").prop("disabled", true); }
}

function change(o) { $("#del" + o).on("click", function() { $("#tr" + o).eq(0).remove(); }) }
function refresh() { allValue = 0; for (i = 0; i < $(".totalAdd").length; i++) { allValue += parseInt($(".totalAdd").eq(0).text()) } $("tfoot tr td").eq(1).text(allValue); }
//Funciones que usan la funcion que rellena el formulario
function setting(o) { $(".fpeque").eq(o).on("dblclick", function() { base(fruitIds[o]) }); }
for (i in fruitIds) { setting(i); }

//Rellena el formulario
function base(fruita) {
	for(i = 0; i < 2; i++) { $(objectContainer[i + 1]).attr("value", $("#" + fruita + " span").eq(i).text()); }
	$(objectContainer[4]).css({"backgroundSize": "100px 100px", "backgroundImage": "url('./imagenes/" + fruita + ".jpg')"});
}

//Añade un evento de click para acceder a la funcion fillOrRemove
$("#cancelar").on("click", function() {event.preventDefault(); fillOrRemove(false);});
$("#grabar").on("click", function() {event.preventDefault(); fillOrRemove(true);});
$("#recuperar").on("click", function() {event.preventDefault(); saveOrRestore(false); });
$("#almacenar").on("click", function() {event.preventDefault(); saveOrRestore(true); });
	
//Bucle for que preparara los elementos de la pagina que vamos a usar
for (i = 0; i < 2; i++) { objectContainer[i] = $(forIdSelectors[i]); }

//Esta funcion añade una fila nueva en la tabla o elimina el contenido de los inputs de texto
function fillOrRemove(fill)  {
	//Bucle for que preparara los elementos de la pagina que vamos a usar
	for(i in objectContainer) { objectContainer[i] = $(forIdSelectors[i]); }
	newLine = "";
	allValue = 0;
	//Si fill es true añade una fila nueva a la tabla
	if (fill) {
		//Creacion de nueva fila
		newLine += "<tr id='tr" + counter + "' class='container'>";
		for (i in objectContainer) {
			if (i == 4) newLine += "<td class='totalAdd' style='text-align:right'>" + (objectContainer[2].val() * objectContainer[3].val()) + "</td>";
			else newLine += "<td style='text-align:left'>" + $(objectContainer[i]).val() + "</td>";
		}

		newLine += "<td class='but'><button id='del" + counter + "' class='delete' style='color:white;background-color:black'>Eliminar</button></td></tr>";
		$("tbody").append(newLine);
		$(".but").css({"backgroundColor" : "white", "border" : "1px solid white"});
			change(counter++);
	} //Si fill es false borra los campos del formulario
	else { for(i in objectContainer) { $(forIdSelectors[i]).val(""); } }
}

//Esta funcion almacena la tabla en local o restaura una tabla ya existente
function saveOrRestore(save) {
	if (save) {
		var tbdy = $("tbody").eq(0).find("tr")
		for (y = 2; y <= tbdy.length; y++) {
			var selector = $("tr").eq(y).find("td");
			frutaTemp[(y-2)] = {};
			for (i = 0; i < 6; i++) {
				frutaTemp[(y-2)][teibol[i]] = {};
				frutaTemp[(y-2)][teibol[i]]["innerHTML"] = selector.eq(i).text();
				frutaTemp[(y-2)][teibol[i]]["textAlign"] = selector.eq(i).css("textAlign");
			}
			frutaTemp[(y-2)]["totalAdd"]["class"] = selector.eq(4).attr('class');
			frutaTemp[(y-2)]["borrar"]["class"] = selector.eq(5).attr('class');
		}
		localStorage.setItem("fruitaJQ", JSON.stringify(frutaTemp));
		alert(JSON.stringify(frutaTemp))
		count++;
	} else {
		var json = JSON.parse(localStorage.getItem("fruitaJQ"));
		for (y in json) {
			newLine = "";
			
			//Creacion de nueva fila
			newLine += "<tr id='tr" + (counter) + "' class='container'>";
			for (i in teibol) {
				if (i == 4) newLine += "<td class='totalAdd' style='text-align:right'>" + (parseInt(json[y][teibol[2]]["innerHTML"]) * parseInt(json[y][teibol[3]]["innerHTML"])) + "</td>";
				else if (i == 5) newLine += "<td class='but'><button id='del" + (counter) + "' class='delete' style='color:white;background-color:black'>Eliminar</button></td></tr>";
				else newLine += "<td style='text-align:left'>" + (json[y][teibol[i]]["innerHTML"]) + "</td>";
			}

			$("tbody").append(newLine);
			change(counter++);
			$(".but").css({"backgroundColor" : "white", "border" : "1px solid white"});	
		}
	}
}

setInterval(check, 100); 
setInterval(refresh, 100);
$("#factura").append("<button id='borraLocal'> BORRAR TABLA LOCAL </button>");
$("#borraLocal").on("click", function() { localStorage.removeItem("fruitaJQ"); })