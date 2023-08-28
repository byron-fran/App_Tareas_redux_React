import { useDispatch} from 'react-redux'
import { useState,} from 'react';
import { addTask, updateTask } from '../actions/actions';
import { generarId } from '../helpers';

const Formulario = ({tarea, setTarea}) => {
    const dispatch = useDispatch()
    const [alerta, setAlerta] = useState(false);
    const [validarCorreo, setValidarCorreo] = useState(false)
    const {nombre, descripcion,email,id} = tarea; //desustricturacion

    const handleSubmit = (e) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     e.preventDefault();
     //Validacion para no ir vacios
     if(nombre.split(' ').join('').length === 0 || descripcion.split(' ').join('').length === 0 || email === ''){ 
        setAlerta(true)
        return
     }
     if(!regexEmail.test(email)){
        setValidarCorreo(true)
        return
     }

     if(!id){
         dispatch(addTask({...tarea, id : generarId()})) // si no hay id agrega uno nuevo
     }
     else{
         dispatch(updateTask(tarea)) //actulaiza lo datos
     }
    setValidarCorreo(false)
    setAlerta(false)
     //Vaciar el formulario despues de enviar
     setTarea({
         nombre : '',
         email : '',
         descripcion : ''
     })
    }   
  return (
    <div className='bg-white px-10 py-3 rounded-md  mb-4 md:mb-0 h-[35rem] sm:h-[32rem] md:h-[35rem] lg:h-[32rem] shadow-md shadow-slate-400' >
            {alerta && (<p className='text-red-600 text-center uppercase  '>Los campos no deben ir vacios</p>)}
        <form onSubmit={handleSubmit} className='uppercase' autoComplete='off' noValidate>
        <h2 className='text-center text-2xl font-bold my-4 uppercase'>Agregar nueva Tarea</h2>
            <label className='block'  htmlFor="nombre">nombre</label>
            <input className='w-full bg-slate-200 p-2 rounded-md  border border-slate-300' value={nombre} type="text" placeholder='nombre de tarea' name='nombre' 
                onChange={(e) => setTarea({...tarea, nombre  : e.target.value})}
            />
              {validarCorreo && (<p className='text-red-600 text-center uppercase text-sm'>El correo no es válido</p>)}
            <label  className='block' htmlFor="email">Correo Electronico</label>
            <input className='w-full bg-slate-200 p-2 rounded-md  border border-slate-300' value={email} type="email" placeholder='nombre de email' name='email'
             onChange={(e) => setTarea({...tarea, email  : e.target.value})}
          
            />
          
            <label  className='block' htmlFor="descripcion">Descripcion</label>
            <textarea className='bg-slate-200 w-full max-h-40 border border-slate-300' value={descripcion } name="descripcion" rows="7"
             onChange={(e) => setTarea({...tarea, descripcion  : e.target.value})}
             ></textarea>
  
            <button className='text-center block w-full my-2 text-white bg-sky-500 py-2 mt-2 rounded-md font-bold uppercase hover:bg-sky-600' type='submit'>{id  ? 'Actualizar' : 'Agregar'}</button>
        </form>
        
    </div>
  )
}

export default Formulario