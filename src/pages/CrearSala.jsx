import { useState } from "react"
import { crearSala } from "../services/api"
import { useNavigate } from "react-router-dom"

function CrearSala(){

const[nombre,setNombre]=useState("")
const navigate = useNavigate()

const guardar = async(e)=>{

e.preventDefault()

const data = await crearSala(nombre)

const idSala = data[0].id_sala

// guardar id en memoria del navegador
localStorage.setItem("idSala",idSala)

alert("Sala creada ID: "+idSala)

navigate("/jugador")

}

return(

<div>

<h2>Crear Sala</h2>

<form onSubmit={guardar}>

<input
placeholder="Nombre de la sala"
value={nombre}
onChange={(e)=>setNombre(e.target.value)}
/>

<button>
Crear
</button>

</form>

</div>

)

}

export default CrearSala