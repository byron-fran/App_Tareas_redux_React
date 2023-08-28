import { useState } from "react";
import Formulario from "./components/Formulario"
import Lista_Tareas from "./components/Lista_Tareas"
const App = () => {

    const[tarea, setTarea] = useState({
        nombre : '',
        email : '',
        descripcion : ''
       });
  return (
    <>
      <h1 className="text-center text-white uppercase text-2xl mb-4 md:mb-0">Tareas</h1>
      <div className="grid grid-rows-2  gap-0 md:grid-rows-none md:grid-cols-2 md:w-5/6 lg:w-9/12 mx-auto justify-center md:my-6 md:gap-x-5 ">
        <Formulario tarea={tarea} setTarea={setTarea}/>
        <Lista_Tareas setTarea={setTarea}/>
      </div>
    </>
  )
}

export default App