
//alerta de carga
document.getElementById("cuerpo").onload = function(){
	alert("La página ya está cargada.");
}

//alerta fuera del input
document.getElementById("cajita").addEventListener("mouseout",function(){
	alert("Ya no estás sobre mí!");
});

//alerta sobre el input
document.getElementById("cajita").addEventListener("mouseover",function(){
	alert("Estás sobre mí!");
});



