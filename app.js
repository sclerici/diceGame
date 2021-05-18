
// TOMO EL NOMBRE DEL JUGADOR Y LO VISUALIZO POR LA PANTALLA
let playerName = document.querySelector('.playerName')
let nombreJugador = window.prompt('Insert your name')
playerName.textContent = nombreJugador.toUpperCase()

let boton = document.querySelector('.botonDados')

let dados = document.querySelectorAll('.dice')

boton.addEventListener('click', (e) => {
    nuevoJuego()
  
})

function nuevoJuego(){
//CREANDO VARIABLES CON UN NUMERO RANDOM
let randomNumber1 = Math.floor(Math.random() * 6 + 1)
let randomNumber2 = Math.floor(Math.random() * 6 + 1)

//TOMO EL DADO IZQUIERDO Y LE SETEO EL ATRIBUTO CON LA VARIABLE DEL NUMERO ALEATORIO
let leftDado = document.querySelector('.img1')
leftDado.setAttribute("src", `images/dice${randomNumber1}.png`)

//TOMO EL DADO DERECHO Y REALIZO EL MISMO PASO CON EL DADO IZQUIERDO
let rightDado = document.querySelector('.img2')
rightDado.setAttribute("src", `images/dice${randomNumber2}.png`)

//TOMO EL TITULO REFRESH ME PARA CAMBIARLO 
let titulo = document.querySelector('.mainTitle')
 
//LOGICA DEL GANADOR
    if (randomNumber1 > randomNumber2){
        titulo.textContent = `${nombreJugador.toUpperCase()} WINS!`

    }else if(randomNumber1 < randomNumber2){
        titulo.textContent = 'CPU WINS!'
    }else{
        titulo.textContent = "TIE GAME"
    }

}