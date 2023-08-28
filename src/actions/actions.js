import { types } from "../types/types";

export const addTask = (task)=> {
    return{
        type : types.ADD_TASK, 
        payload : task
    }
};

export const deleteTask = (id) => {
    return {
        type : types.DELETE_TASK, 
        payload : id
    }
}

export const updateTask  =(task) => {
    return {
        type : types.UPDATE_TASK,
        payload : task
    }
}