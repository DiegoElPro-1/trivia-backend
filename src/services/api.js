// simulación de base de datos en el navegador

// CREAR SALA (POST)
export async function crearSala(nombre){

const salas = JSON.parse(localStorage.getItem("salas")) || []

const nuevaSala = {

id_sala: salas.length + 1,
nombre_sala: nombre

}

salas.push(nuevaSala)

localStorage.setItem("salas",JSON.stringify(salas))

return [nuevaSala]

}



// REGISTRAR JUGADOR (POST)
export async function registrarJugador(nombre,idSala){

const jugadores = JSON.parse(localStorage.getItem("jugadores")) || []

const nuevoJugador = {

id_jugador: jugadores.length + 1,
nombre: nombre,
id_sala: parseInt(idSala),
puntaje:0

}

jugadores.push(nuevoJugador)

localStorage.setItem("jugadores",JSON.stringify(jugadores))

return [nuevoJugador]

}



// OBTENER PREGUNTAS (GET)
export async function obtenerPreguntas(){

return [

{

id_pregunta:1,
pregunta:"Capital de Colombia",
opcion_a:"Bogotá",
opcion_b:"Lima",
opcion_c:"Quito",
opcion_d:"Caracas",
respuesta_correcta:"Bogotá"

},

{

id_pregunta:2,
pregunta:"2 + 2",
opcion_a:"3",
opcion_b:"4",
opcion_c:"5",
opcion_d:"6",
respuesta_correcta:"4"

}

]

}



// GUARDAR RESPUESTA (POST)
export async function guardarRespuesta(data){

const respuestas = JSON.parse(localStorage.getItem("respuestas")) || []

respuestas.push(data)

localStorage.setItem("respuestas",JSON.stringify(respuestas))

return data

}



// ACTUALIZAR PUNTAJE (PATCH)
export async function actualizarPuntaje(idJugador,puntos){

let jugadores = JSON.parse(localStorage.getItem("jugadores")) || []

jugadores = jugadores.map(j=>{

if(j.id_jugador == idJugador){

return {

...j,
puntaje:puntos

}

}

return j

})

localStorage.setItem("jugadores",JSON.stringify(jugadores))

return true

}



// OBTENER JUGADORES POR SALA (GET)
export async function obtenerJugadores(idSala){

const jugadores = JSON.parse(localStorage.getItem("jugadores")) || []

return jugadores.filter(j=>j.id_sala == idSala)

}