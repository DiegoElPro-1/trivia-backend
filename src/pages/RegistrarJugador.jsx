import { useState } from "react"
import { registrarJugador } from "../services/api"
import { useNavigate } from "react-router-dom"

function RegistrarJugador(){

const[nombre,setNombre]=useState("")
const navigate = useNavigate()

const guardar = async()=>{

const idSala = localStorage.getItem("idSala")

const data = await registrarJugador(nombre,idSala)

const idJugador = data[0].id_jugador

localStorage.setItem("idJugador",idJugador)

alert("Jugador registrado")

navigate("/preguntas")

}

return(

<div>

<h2>Registrar jugador</h2>

<input
placeholder="Nombre jugador"
value={nombre}
onChange={(e)=>setNombre(e.target.value)}
/>

<button onClick={guardar}>
Entrar
</button>

</div>

)

}

export default RegistrarJugador