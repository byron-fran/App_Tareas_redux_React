import { createStore} from 'redux';

import { loadState, saveState} from '../middleware';
import rootReducers from '../middleware/rooReducers';


const store = createStore(
    rootReducers,
    loadState()
  );
  
store.subscribe(() => { return saveState(store.getState())})
export default store