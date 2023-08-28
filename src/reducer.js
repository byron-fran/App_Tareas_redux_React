import { types } from "./types/types";

const initialState = {
    tasks : [] //Estado inicial es un areglo
}

const reducer = (state = initialState, action ) => {
    switch(action.type){
        case types.ADD_TASK: //Agrega una nueva Tarea
            return {
                ...state,
                tasks : [...state.tasks, action.payload]
            }
        case types.DELETE_TASK: //Elimina la tarea por el id
            return {
                ...state,
                tasks : state.tasks.filter(task => task.id !== action.payload)
            } 
        case types.UPDATE_TASK:{ //Actualiza la tarea
            const tareaExiste = action.payload
            const updateTasks = state.tasks.map(tarea => {
                if(tarea.id === tareaExiste.id){
                    const {nombre, email, descripcion}  = tareaExiste
                    return { // En case de que  existe va a remplazar 
                        ...tarea,
                        nombre,
                        email ,
                        descripcion ,
                    }
                }
                else{
                    return tarea
                }
            })
            return{
                ...state,
                tasks : updateTasks //el estado devuelve un nuevo areglo actualizado
            } 
        }
        default:
            return state
    }
};

export default reducer