
let stockUser = Number(prompt("STOCK DE SILLAS - ¿Cual es su stock actual?"))

if(isNaN(stockUser)){
    stockUser = null
}

let stock = stockUser ?? 0 //null undefined
let bandera = true
let AlquilerMinimoDeSillas = 10
let deuda = 0

while(bandera){
    let menu = Number(prompt("Alquileres de Sillas para Fiestas\n ¿Que quiere Hacer?\n 1- Sumar Sillas al Stock\n 2- Ver Stock Actual\n 3- Quitar Sillas en malas condiciones\n 5- Alquilar Sillas\n 6- ver Sillas alquiladas \n 8- salir"))

    if (!isNaN(menu)){
    switch (menu) {
        case 1:
            let montoDeposito = Number(prompt("¿Cuantos Sillas agrega?"))
            if(montoDeposito > 0){
            //Sillas = Sillas + sillas agregadas
            stock += montoDeposito
            }else{
                alert("No puede ingresas valores negativos")
            }
        break
        case 2:
            alert(stock)
        break

        case 3:
            let sillasRetirar = Number(prompt("¿Cuanto sillas quiere quitar y/o tirar?"))
            if(sillasRetirar > 0){//Que no sea negativo
                if(sillasRetirar > stock){//No puede sacar mas sillas del stock actual
                    alert("no podes retirar mas sillas que las que tienes...")
                }else{
                    stock -= sillasRetirar
                }
            }else{
                alert("! IMPOSIBLE ! No podes usar valores negativos")
            }
        break

        // case 4:
        //     let cliente = prompt("¿A quien le voy a alquilar?")
        //     if(cliente == null || cliente.length <= 8){
        //         alert("Tiene que ingresar un alias correcto")
        //     }else{
        //         let montoATrasferir = Number(prompt("¿Cuanto quiere trasferir"))
        //         if(montoATrasferir > 0){
        //             if(montoATrasferir <= stock){
        //                 stock -= montoATrasferir
        //             }else{
        //                 alert("No tienes ese dinero, proyecto sugar not found")
        //             }
        //         }else{
        //             alert("No podes poner numero negativos.")
        //         }
        //     }
        // break

        case 5:
            if(stock > AlquilerMinimoDeSillas){
                alert("Nuestro stock disponible es: " + stock)
                let montoAPedirPrestado = Number(prompt("¿Cuantas desea Alquilar?"))
                if(montoAPedirPrestado >= 10 ) { //que sea mayor a 10
                    if(montoAPedirPrestado <= stock){ //que sea menor o igual al stock disponible
                        alert("Usted va a alquilar " + montoAPedirPrestado + " Sillas a: " )
                    }else{
                        alert("Usted pasó el monto limite de stock, vuelva a intentarlo")
                }
                    stock -= montoAPedirPrestado
                    deuda += montoAPedirPrestado
                    console.log(deuda)
                }else{
                    alert("Los alquileres son a partir de 10 sillas en adelante")
                }
            }else{
                alert("No hay esa cantidad de Sillas Disponible")
            }
        break

        case 6:
            if(deuda == 0){
                alert("No hay Sillas alquiladas momentaneamente")
            }else{
                alert(`Su deuda es de: ${deuda}.`)
            }
        break
        case 8:
            bandera = false
        break
        default:
            alert("Esa opcion no la tenemos")
        break
        }
    }else{
        alert("Tiene que ser un numero")
    }
}