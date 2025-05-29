//Semana y Clase 3
//Simula un login con usuario y contraseña predefinidos.

const userDB = "45678343"
const passDB = "1235"

let error = alert ("error 404")
let username = prompt ("Cual es tu user")
let contraseña = prompt ("Cual es tu contraseña")



let credencial = login(username, contraseña)

function login(usuario, pass){
    let cantidadDeIntentos = 3
    let ingreso = false

    for( let i = 0; i < cantidadDeIntentos; i++) {
    if(usuario == null || pass == null){
        alert("O la contraseña o el usuario estan vacios")
        
    }else{
            if(userDB === usuario && passDB === pass){
                alert("!!!Entraste!!!")
                ingreso = true
                return ingreso

            }else if(userDB === usuario && passDB != pass){
                alert("Tu contraseña es incorrecta")

            }else if(userDB != usuario && passDB === pass){
                alert("Tu usuario es incorrecto")

            }else{
                alert("!Ta todo mal!")
            }
            usuario = prompt("Cual es tu user")
            pass = prompt ("Cual es tu contraseña")
        }
    }

    alert("Ahi va la polesia a tu casa")
    return false
}




if(credencial){

    //ingreso === false
    if(!ingreso){
        alert("No entraste, ya te mande a la polesia")
    }

    //Ingreso === true
    if(ingreso){

}

let saldoUser = Number(prompt("¿Cuanta plata tiene en el banco?"))

if(isNaN(saldoUser)){
    saldoUser = null
}

let saldo = saldoUser ?? 0 //null undefined
let bandera = true
let montoMinimoParaPoderPedirUnRePrestamo = 8000
let deuda = 0

while(bandera){
    let menu = Number(prompt("Bienvenidos a Perrito con Chaucha Bank\n ¿Que quiere Hacer?\n 1- depositar\n 2- ver saldo\n 3- retirar\n 4- transferencia\n 5- prestamo\n 6- ver deuda \n 8- salir"))

    if (!isNaN(menu)){
    switch (menu) {
        case 1:
            let montoDeposito = Number(prompt("¿Cuanto quiere ingresar?"))
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
            let montoRetirar = Number(prompt("¿Cuanto quiere sacar?"))

            if(montoRetirar > 0){//Que no sea negativo
                
                if(montoRetirar > saldo){//Que no quiera rettirar mas plata que la que tiene
                    alert("no podes retirar mas dinero que el que tienes...")
                }else{
                    saldo -= montoRetirar
                }
            }else{
                alert("¿Que te crees?")
            }
        break

        case 4:
            let alias = prompt("¿Cual es el alias de la persona a transferir?")
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
            if(saldo > montoMinimoParaPoderPedirUnRePrestamo){
                alert("Usted puede pedir prestado")
                let montoAPedirPrestado = Number(prompt("¿Cuand quiere pedir prestado?"))
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

}