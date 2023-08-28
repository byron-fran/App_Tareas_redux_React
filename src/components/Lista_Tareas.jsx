
import {useSelector, useDispatch} from 'react-redux';
import { deleteTask} from '../actions/actions';

const Lista_Tareas = ({setTarea}) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
  
    const handleDelete = (id) => {
        dispatch(deleteTask(id))
        setTarea((task) => ({
            ...task,
             nombre : '', 
             email: '', 
             descripcion : ''}))
    }
    const handleEdit = (task) => {
        setTarea(task);
       
    }

  return (
    <div className='bg-white px-10 py-6 rounded-md mb-5 md:mb-0 shadow-md shadow-slate-400 overflow-y-scroll h-[34rem] sm:h-[31rem] md:h-[35rem]  lg:h-[32rem]' >
        <h2 className='text-center text-2xl font-bold uppercase  '>{tasks.tasks.length ? 'Lista de Tareas' : 'Aún no hay tareas'}</h2>
        <div>
            {tasks.tasks.length > 0 && tasks.tasks.map(task =>{
                return (
                    <div key={task.id} className='bg-slate-200 py-2 px-4 rounded-md mt-4 uppercase border border-slate-300'>
                        <p className='text-xs mt-1'>Nombre: <span className='text-indigo-600'>{task.nombre}</span></p>
                        <p className='text-xs mt-1'>Email: <span className='text-indigo-600'>{task.email}</span></p>
                        <p className='text-xs mt-1'>Descripcion: <span className='text-indigo-600'>{task.descripcion}</span></p>
                        <div className='flex justify-between my-4 items-center gap-4'>
                            <button className='text-center w-24 uppercase text-white p-2 rounded-md bg-lime-500 hover:bg-lime-600' onClick={() => handleEdit(task)} >Editar</button>
                            <button className='text-center w-24 uppercase text-white p-2 rounded-md bg-red-600 hover:bg-red-700' onClick={() => handleDelete(task.id)}>Eliminar</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Lista_Tareas