import { useEffect,useState } from "react"
import { obtenerJugadores } from "../services/api"

function Puntaje(){

const[jugadores,setJugadores]=useState([])


// se ejecuta automáticamente al entrar a la página
useEffect(()=>{

cargar()

},[])



// función GET que consulta los jugadores de la sala
const cargar = async()=>{

const idSala = localStorage.getItem("idSala")

const data = await obtenerJugadores(idSala)

setJugadores(data)

alert("Datos actualizados")

}



return(

<div>

<h2>Puntaje final</h2>


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

Puntos: {j.puntaje}

</p>

</div>

))

}


</div>

)

}

export default Puntaje