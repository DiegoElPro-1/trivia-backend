import { useState } from "react"
import { crearSala } from "../services/api"

function CrearSala(){

const[nombre,setNombre]=useState("")

const guardar = async(e)=>{

e.preventDefault()

await crearSala(nombre)

alert("Sala creada")

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