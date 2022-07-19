

function maquina(contenedor,texto,intervalo)
{
  // Calculamos la longitud del texto
  longitud = texto.length;
  // Obtenemos referencia del div donde se va a alojar el texto.
  cnt = document.getElementById(contenedor);
  var i=0;
  var swich=true;
  // Creamos el timer
 timer = setInterval(function()
   {

     // Vamos añadiendo letra por letra y la _ al final.
   
     cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
     // Si hemos llegado al final del texto..
     if(i >= longitud)
     {
        // Salimos del Timer y quitamos la barra baja (_)

         clearInterval(timer);

         cnt.textContent=texto
        
         return true; 
     } 
     else 
     {
        // En caso contrario.. seguimos
        i++;
     }
     
   },intervalo);

   

     
};
maquina("saludo","Hola! Es un  gusto  tu  visita :)",200)