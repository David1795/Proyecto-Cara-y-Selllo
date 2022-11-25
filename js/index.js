

//acceder al elemento con id cara, sello y al elemento body
let cara = document.getElementById("eleccionCara")
let sello = document.getElementById("eleccionSello")
//declaracion de eleccion para saber cual fue la eleccion del jugadr si cara o sello
let eleccion, partidas=0, ganancia=0, seguir,  total=0;
//declaracion de variable para saber cuanto quiere apostar el jugador
alert("Bienvenido al juego Cara y sello ")
let apuesta = prompt("ingrese la cantidad que desea apostar")
apuesta = parseInt(apuesta)



while (apuesta < 1000) {

    alert(`ingrese un valor superio a mil`)

    

    apuesta = prompt("ingrese la cantidad que desea apostar")
    
    
}






cara.addEventListener("click",() =>{
    let moneda = Math.floor((Math.random() * 2) + 1);
    console.log(moneda)
    eleccion = 1

    if (eleccion == moneda) {
        ganancia = apuesta * 2  
            if (total >=  1000) {
                total = total + ganancia
                alert(`Felicidades ganaste ${ganancia} y tu total de dinero es de ${total} tu eleccion fue
                cara y la de la maquina fue cara`); 
            }
       
    }

    else if (eleccion != moneda) {
        total = total - apuesta
        if (total <=  1000) {
            alert(`Lo sentimos nos debes ${Math.abs(total)} tu eleccion fue cara y la de la maquina sello`);
        }

        else if (ganancia >= 1000 ) {
            alert(`Lo sentimos perdiste tu valor es de  ${total} tu eleccion fue cara y la de la maquina sello`);
        }
    }

    partidas = partidas+1
    console.log(partidas);
    seguir = prompt("¿desea iniciar una nueva partida? escriba si o no")
//condicional para saber si el judaor digito que no queria jugar mas mostrarle las partidas totales el dinero total de si debe o cuando acumulo y se reincian las variables a 0
if (seguir == "si") {


    total = 0
    partidas = 1
    apuesta = prompt("ingrese la cantidad que desea apostar")
    apuesta = parseInt(apuesta)  

    if (total < 0) {
        alert(`las veces jugadas fueron ${partidas} nos debes en total ${Math.abs(total)}, Gracias por jugar hasta pronto`)

       
    }

}

else if (seguir == "no"){


    if (total > 0) {
        alert(`las veces jugadas fueron ${partidas} la cantidad de dinero total es de ${total}, Gracias por jugar hasta pronto`)   
    }

    total = 0
    partidas = 1
    apuesta = prompt("ingrese la cantidad que desea apostar")
    apuesta = parseInt(apuesta)

  

}

    
})

sello.addEventListener("click", () =>{
    let moneda = Math.floor((Math.random() * 2) + 1);
    console.log(moneda)
    eleccion = 2
    partidas = partidas+1

    //serie de condicionales para determinar que mensaje mostrarle al jugador dependiendo de  i gano perdio y tambien de su valor total de dinero

    if (eleccion == moneda) {
        ganancia = apuesta * 2  
            if (total >=  1000) {
            total = total + ganancia
                alert(`Felicidades ganaste ${ganancia} y tu total de dinero es de ${total} tu eleccion fue
                sello y la de la maquina fue sello`); 
        }

    }
    else if (eleccion != moneda) {
        total = total - apuesta

        if (total < 0) {
            alert(`lo sentimos nos debes ${Math.abs(total)} tu eleccion fue Sello y la de la maquina Cara`);
        }
        else if (ganancia >= 0 ) {
            alert(`lo sentimos perdiste tu valor es de  ${total} tu eleccion fue Sello y la de la maquina Cara`);
        }
    }
    
    partidas = partidas+1
    console.log(partidas);
    seguir = prompt("¿desea iniciar una nueva partida? escriba si o no")





if (seguir == "si") {

    if (total < 0) {
        alert(`las veces jugadas fueron ${partidas} nos debes en total ${Math.abs(total)}, Gracias por jugar hasta pronto`)

       
    }

    total = 0
    partidas = 0
    apuesta = prompt("ingrese la cantidad que desea apostar")
    apuesta = parseInt(apuesta)  

    

    
}

   
    

else if (seguir == "no"){


    total = 0
    partidas = 0
    apuesta = prompt("ingrese la cantidad que desea apostar")
    apuesta = parseInt(apuesta)

    if (total > 0) {
        alert(`las veces jugadas fueron ${partidas} la cantidad de dinero total es de ${total}, Gracias por jugar hasta pronto`)   
    }

   

}

    
    

}) 
console.log(partidas);