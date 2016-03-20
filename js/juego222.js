//SOLUCIONADO Como hacer que si el usuario elige piedra PAPEL O TIJERA EN MAYUSCULAS siga el programa? .lowercase o .toUpperCase
//como hacer que si pones otra cosa por ejemlo perro o 44  te diga eso no es correcto? vuelva a ingresar los dartos?
//
//

//    
//}

//}

function  juegoppt () {


var humano= prompt("¿Eres humano?", "").toLowerCase();

    if (humano==="si" || humano==="yes") { 
         humano=true;
        }

    
    else {

     humano=false;
    }

var resp_asignada=humano?"Los humanos pueden jugar":"fuera bicho raro jijiji, Mmmmm Es broma, venga te dejo jugar";

alert(resp_asignada);


edad= prompt( "Indique su edad, por favor", "" );
    if ( edad < 18 ) {
    alert( "No puede jugar solo mayores 18"); 
    }


else {


        var usuarioElige= prompt ("ELIGE: ¿piedra, papel o tijera?").toLowerCase();
        var computadoraElige=Math.random();

        //alert(computadoraElige); SI LO PONEMOS ESTO NOS MUESTRA EL UMERO ENTRE O Y 1 Q ELIGIO LA COMPU AL AZAR, ES PARA VER COMO FUNCIONA EL PROGRAMA NADA MAS 

        if (computadoraElige <0.34) {
            computadoraElige= "piedra";
           alert ("la computadora elige" + " " +computadoraElige);
            
            }

        else if (computadoraElige <=0.67) {
        computadoraElige= "papel";
           alert ("la computadora elige" + " " + computadoraElige);
            }
        	
        else  {
          computadoraElige="tijera";
           alert ("la computadora elige" + " " +computadoraElige);
        }
        var comparar=function (usuarioElige,computadoraElige)
        {
            if (usuarioElige===computadoraElige) {
              	alert ("Empate");
                return "¡Es un empate!";
        	
            }
            if (usuarioElige==="piedra")  {
                
                if (computadoraElige==="tijera") {
                 alert (" !!!HAS GANADO!!!! la piedra rompe la tijera");
                    return "has ganado piedra gana"; 
        					}
                else if (computadoraElige=="papel") {
                 alert ("has perdido :-(  el papel envuelve a la piedra");
                    return "has perdido papel gana";
        					}
            }
            
             if (usuarioElige==="papel")  {
                
                if (computadoraElige==="piedra") {
                 alert (" !!!HAS GANADO!!!! el papel envuelve a la piedra");
                    return "has ganado papel gana";
        					}
                else if (computadoraElige=="tijera") {
                 alert ("has perdido :(  la tijera corta el papel");
                    return "has perdido tijera gana";
        					}
            }
        if (usuarioElige==="tijera")  {
                
                if (computadoraElige==="piedra") {
                 alert ("has perdido :-( la piedra rompe la tijera");
                    return "has perdido piedra gana"; 
        					}
                else if (computadoraElige=="papel") {
                 alert ("!!!HAS GANADO!!!! la tijera corta el papel");
                    return "has ganado tijera gana";
        					}
            }

        }

}

comparar(usuarioElige,computadoraElige);

// comparar(usuarioElige,computadoraElige);

}


