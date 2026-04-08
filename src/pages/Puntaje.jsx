import { useEffect,useState } from "react"

import { obtenerJugadores } from "../services/api"

function Puntaje(){

const[jugadores,setJugadores]=useState([])

useEffect(()=>{

cargar()

},[])

const cargar = async()=>{

const data = await obtenerJugadores(1)

setJugadores(data)

}

return(

<div>

<h2>Puntaje</h2>

<button onClick={cargar}>

Actualizar

</button>

{

jugadores.map(j=>(

<div key={j.id_jugador}>

<h3>

{j.nombre}

</h3>

<p>

Puntaje: {j.puntaje}

</p>

</div>

))

}

</div>

)

}

export default Puntajes