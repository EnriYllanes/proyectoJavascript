
let saldoUser = Number(prompt("¿Cuantas Sillas tiene en Stock?"))

if(isNaN(saldoUser)){
    saldoUser = null
}

let saldo = saldoUser ?? 0 //null undefined
let bandera = true
let AlquilerMinimoDeSillas = 10
let deuda = 0

while(bandera){
    let menu = Number(prompt("Alquileres de Sillas para Fiestas\n ¿Que quiere Hacer?\n 1- Sumar Sillas Compradas\n 2- Ver Stock Actual\n 3- Quitar Sillas\n 4- Alquilar Sillas\n 5- Comprar por Comision\n 6- ver deuda \n 8- salir"))

    if (!isNaN(menu)){
    switch (menu) {
        case 1:
            let montoDeposito = Number(prompt("¿Cuantos Sillas agrega?"))
            if(montoDeposito > 0){
            //Saldo = saldo + monto
            saldo += montoDeposito
            }else{
                alert("No puede ingresas valores negativos")
            }
        break
        case 2:
            alert(saldo)
        break
        case 3:
            let montoRetirar = Number(prompt("¿Cuanto sillas quiere quitar?"))
            if(montoRetirar > 0){//Que no sea negativo
                if(montoRetirar > saldo){//Que no quiera rettirar mas plata que la que tiene
                    alert("no podes retirar mas sillas que las que tienes...")
                }else{
                    saldo -= montoRetirar
                }
            }else{
                alert("¿Que te crees?")
            }
        break
        case 4:
            let alias = prompt("¿A quien le voy a alquilar?")
            if(alias == null || alias.length <= 8){
                alert("Tiene que ingresar un alias correcto")
            }else{
                let montoATrasferir = Number(prompt("¿Cuanto quiere trasferir"))
                if(montoATrasferir > 0){
                    if(montoATrasferir <= saldo){
                        saldo -= montoATrasferir
                    }else{
                        alert("No tienes ese dinero, proyecto sugar not found")
                    }
                }else{
                    alert("No podes poner numero negativos")
                }
            }
        break
        case 5:
            if(saldo > AlquilerMinimoDeSillas){
                alert("Usted puede pedir prestado")
                let montoAPedirPrestado = Number(prompt("¿Cuand quiere Alquilar?"))
                if(montoAPedirPrestado > 0) {
                    alert("Usted nos va a tener que devolver" + montoAPedirPrestado * 1.5)
                    saldo += montoAPedirPrestado
                    deuda += montoAPedirPrestado
                    console.log(deuda)
                }else{
                    alert("¿Le queres prestar vos al banco?")
                }
            }else{
                alert("¿Le pega con una escoba")
            }
        break
        case 6:
            if(deuda == 0){
                alert("Usted no tiene deudas")
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