import { BrowserRouter, Routes, Route } from "react-router-dom"

import CrearSala from "./pages/CrearSala"
import RegistrarJugador from "./pages/RegistrarJugador"
import Preguntas from "./pages/Preguntas"
import Puntaje from "./pages/Puntaje"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<CrearSala/>}/>
<Route path="/jugador" element={<RegistrarJugador/>}/>
<Route path="/preguntas" element={<Preguntas/>}/>
<Route path="/puntaje" element={<Puntaje/>}/>

</Routes>

</BrowserRouter>

)

}

export default App