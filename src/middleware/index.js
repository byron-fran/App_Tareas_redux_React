
export const saveState = (state) => {
    try{
        const serializeData = JSON.stringify(state);
        localStorage.setItem('tasks', serializeData)
    }
    catch(error){
        console.log(error)
    }
} 
export const loadState = () => {
    try{
        const serializeData = localStorage.getItem('tasks');
        if(serializeData === null) return undefined
        
      
        return JSON.parse(serializeData)
    }
    catch(error){
        console.log(error);
        return undefined
    }
};

