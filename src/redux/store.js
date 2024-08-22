import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';



const reducers = combineReducers({
 
  categories: categoriesReducer,
  
});



const persistConfig = {
  key: 'root',
  storage,
  // storage= permite guardarlo en el local storage
};



const persistedReducer = persistReducer(persistConfig, reducers);
// PERSISTE LOS REDUCERS en el LocalStorage y RECIBE (Configuracion, Reducers)





export const store = configureStore({

  reducer: persistedReducer,

});



export const persistore = persistStore(store)
// Permite PERSISTIR LA DATA DEL STORE