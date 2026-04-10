import { useEffect,useState } from "react"
import { obtenerPreguntas, guardarRespuesta, actualizarPuntaje } from "../services/api"
import { useNavigate } from "react-router-dom"

function Preguntas(){

const[preguntas,setPreguntas]=useState([])
const[indice,setIndice]=useState(0)
const[puntaje,setPuntaje]=useState(0)

const navigate = useNavigate()

useEffect(()=>{

cargar()

},[])

const cargar = async()=>{

const data = await obtenerPreguntas()

setPreguntas(data)

}


// CUANDO EL USUARIO RESPONDE
const responder = async(opcion)=>{

const pregunta = preguntas[indice]

// verificar si es correcta
const correcta = opcion === pregunta.respuesta_correcta

let nuevoPuntaje = puntaje

if(correcta){

nuevoPuntaje = puntaje + 10

setPuntaje(nuevoPuntaje)

}

// obtener id jugador guardado
const idJugador = localStorage.getItem("idJugador")

// guardar respuesta
await guardarRespuesta({

id_jugador:idJugador,
id_pregunta:pregunta.id_pregunta,
respuesta:opcion,
es_correcta:correcta

})

// actualizar puntaje
await actualizarPuntaje(idJugador,nuevoPuntaje)


// pasar a siguiente pregunta
if(indice < preguntas.length-1){

setIndice(indice+1)

}else{

navigate("/puntaje")

}

}


if(preguntas.length===0) return <p>Cargando...</p>

return(

<div>

<h2>

{preguntas[indice].pregunta}

</h2>

<button onClick={()=>responder(preguntas[indice].opcion_a)}>
{preguntas[indice].opcion_a}
</button>

<button onClick={()=>responder(preguntas[indice].opcion_b)}>
{preguntas[indice].opcion_b}
</button>

<button onClick={()=>responder(preguntas[indice].opcion_c)}>
{preguntas[indice].opcion_c}
</button>

<button onClick={()=>responder(preguntas[indice].opcion_d)}>
{preguntas[indice].opcion_d}
</button>

<p>

Puntaje actual: {puntaje}

</p>

</div>

)

}

export default Preguntas