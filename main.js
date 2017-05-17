
//alerta de carga
document.getElementById("cuerpo").onload = function(){
	alert("La página ya está cargada.");
}

//alerta fuera del input
document.getElementById("cajita").addEventListener("mouseout",function(){
	alert("¡Ahora estás sobre el morado!");
});

//alerta sobre el input
document.getElementById("cajita").addEventListener("mouseover",function(){
	alert("¡Ahora estás sobre el amarillo!");
});



