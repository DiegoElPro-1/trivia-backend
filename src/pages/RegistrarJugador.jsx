import { useState } from "react"
import { registrarJugador } from "../services/api"

function RegistrarJugador(){

const[nombre,setNombre]=useState("")
const[idSala,setIdSala]=useState("")

const guardar = async()=>{

await registrarJugador(nombre,idSala)

alert("Jugador registrado")

}

return(

<div>

<h2>Registrar jugador</h2>

<input

placeholder="Nombre jugador"

value={nombre}

onChange={(e)=>setNombre(e.target.value)}

/>

<input

placeholder="ID sala"

value={idSala}

onChange={(e)=>setIdSala(e.target.value)}

/>

<button onClick={guardar}>

Entrar

</button>

</div>

)

}

export default RegistrarJugador