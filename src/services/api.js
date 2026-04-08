const API_URL = "https://URL-DE-TU-PROFE"

export const crearSala = async(nombre)=>{

const res = await fetch(`${API_URL}/salas`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
nombre_sala:nombre
})

})

return res.json()

}

export const registrarJugador = async(nombre,idSala)=>{

const res = await fetch(`${API_URL}/jugadores`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({

nombre,
id_sala:idSala

})

})

return res.json()

}

export const obtenerPreguntas = async()=>{

const res = await fetch(`${API_URL}/preguntas`)

return res.json()

}

export const guardarRespuesta = async(data)=>{

const res = await fetch(`${API_URL}/respuestas`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify(data)

})

return res.json()

}

export const obtenerJugadores = async(idSala)=>{

const res = await fetch(`${API_URL}/salas/${idSala}/jugadores`)

return res.json()

}