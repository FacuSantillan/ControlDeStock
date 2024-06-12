import { createStore } from 'redux';
import rootReducer from '../reducer'; // Asegúrate de tener un archivo de reducers

// Crear el store de Redux
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Para habilitar las Redux DevTools en el navegador
);

export default store;