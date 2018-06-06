// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#come').tap(function(){
			navigator.notification.vibrate(100);
		}); 
		$('#come').on('click',function(){
	      navigator.notification.confirm(" Nombre del autor:Clarissa Sánchez Victoria Grado y grupo:4toF  Tema:Tutorial DAW Docente:José Antonio Gómez Hernandez" );
});
	},false); // cierre deviceready
}); //cierre del ready