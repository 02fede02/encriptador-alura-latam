
document.getElementById('encriptar').onclick = function(){

    if(document.getElementById("mensaje").value !== ""){
        const mensajeCifrado = document.getElementById('mensaje').value.replace(/e/igm, 'enter').replace(/o/igm, 'ober')
        .replace(/i/igm, 'imes')
        .replace(/a/igm, 'ai')
        .replace(/u/igm, 'ufat')

        document.getElementById('imagen-chico').style.display = 'none'
        document.querySelector('.sin-mensaje').style.display = 'none'

     //COMPROBAR SI YA HAY MENSAJE ESCRITO PARA NO VOLVER A AGREGAR UN P DE MAS
        if(document.querySelector(".mensaje-encriptado") === null){

            document.getElementById('imagen-chico').style.display = 'none'
            document.querySelector('.sin-mensaje').style.display = 'none'

            const p = document.createElement("p")
            p.className = "mensaje-encriptado"
            p.innerText = mensajeCifrado
            document.querySelector(".mostrar-mensaje").appendChild(p)
        } else{
            document.querySelector(".mensaje-encriptado").innerText = mensajeCifrado
        }

        // VACIAR INPUT
        document.getElementById("mensaje").value = ""

        // COMPROBAR SI EL BOTON YA ESTA CREADO
        if(document.getElementById("copiar") === null){

            document.getElementById('imagen-chico').style.display = 'none'
            document.querySelector('.sin-mensaje').style.display = 'none'

            const copiarBtn = document.createElement("button")
            copiarBtn.id = "copiar"
            copiarBtn.type = "button"
            copiarBtn.innerText = "Copiar"
            document.querySelector(".mostrar-mensaje").appendChild(copiarBtn)
            copiarBtn.onclick = function(){
                copiarMensaje(mensajeCifrado)
            }
        } else{
            document.getElementById("copiar").onclick = function(){
                copiarMensaje(mensajeCifrado)
            }
        } 
    } else{
        if (document.getElementById("alerta") === null) {
            const alerta = document.createElement("p")
            alerta.id = "alerta"
            alerta.innerText = "Por favor ingrese un texto"
            document.querySelector(".mensaje-encriptar").appendChild(alerta)
            setTimeout(() => {
                document.querySelector(".mensaje-encriptar").removeChild(alerta)
            }, 3000);
        }
    }
    
}

document.getElementById('desencriptar').onclick = function(){

    if(document.getElementById("mensaje").value !== ""){
        const mensajeCifrado = document.getElementById('mensaje').value.replace(/enter/igm, 'e').replace(/ober/igm, 'o')
        .replace(/imes/igm, 'i')
        .replace(/ai/igm, 'a')
        .replace(/ufat/igm, 'u')

        document.getElementById("mensaje").value = ""

        // COMPROBAR SI EL ELEMENTO ESTA CREADO
        if(document.querySelector(".mensaje-encriptado") === null){

            document.getElementById('imagen-chico').style.display = 'none'
            document.querySelector('.sin-mensaje').style.display = 'none'

            const p = document.createElement("p")
            p.className = "mensaje-encriptado"
            p.innerText = mensajeCifrado
            document.querySelector(".mostrar-mensaje").appendChild(p)
        } else{
        document.querySelector(".mensaje-encriptado").innerText = mensajeCifrado
        }

        // COMPROBAR SI EL BOTON DE COPIAR YA FUE CREADO
        if(document.getElementById("copiar") === null){

            document.getElementById('imagen-chico').style.display = 'none'
            document.querySelector('.sin-mensaje').style.display = 'none'

            const copiarBtn = document.createElement("button")
            copiarBtn.id = "copiar"
            copiarBtn.type = "button"
            copiarBtn.innerText = "Copiar"
            document.querySelector(".mostrar-mensaje").appendChild(copiarBtn)
            copiarBtn.onclick = function(){
                copiarMensaje(mensajeCifrado)
            }
        } else{
            document.getElementById("copiar").onclick = function(){
                copiarMensaje(mensajeCifrado)
            }
        }
    } else{
        if (document.getElementById("alerta") === null) {
            const alerta = document.createElement("p")
            alerta.id = "alerta"
            alerta.innerText = "Por favor ingrese un texto"
            document.querySelector(".mensaje-encriptar").appendChild(alerta)
            setTimeout(() => {
                document.querySelector(".mensaje-encriptar").removeChild(alerta)
            }, 3000);
        }
    }
    
}


function copiarMensaje(element) {
    navigator.clipboard.writeText(element)
    .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })

}