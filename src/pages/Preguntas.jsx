import { useEffect,useState } from "react"

import { obtenerPreguntas, guardarRespuesta } from "../services/api"

function Preguntas(){

const[preguntas,setPreguntas]=useState([])

useEffect(()=>{

cargar()

},[])

const cargar = async()=>{

const data = await obtenerPreguntas()

setPreguntas(data)

}

const responder = async(idPregunta,respuesta)=>{

await guardarRespuesta({

id_jugador:1,

id_pregunta:idPregunta,

respuesta

})

alert("Respuesta guardada")

}

return(

<div>

<h2>Preguntas</h2>

<button onClick={cargar}>

Actualizar

</button>

{

preguntas.map(p=>(

<div key={p.id_pregunta}>

<h3>

{p.pregunta}

</h3>

<button onClick={()=>responder(p.id_pregunta,"A")}>

{p.opcion_a}

</button>

<button onClick={()=>responder(p.id_pregunta,"B")}>

{p.opcion_b}

</button>

<button onClick={()=>responder(p.id_pregunta,"C")}>

{p.opcion_c}

</button>

<button onClick={()=>responder(p.id_pregunta,"D")}>

{p.opcion_d}

</button>

</div>

))

}

</div>

)

}

export default Preguntas