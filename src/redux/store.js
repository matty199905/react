import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore'
import productsReducer from './products/productsSlice'
import recommendedReducer from './recommended/recommendedSlice';
import cartReducer from './cart/cartSlice';
import userReducer from './User/userSlice';
import ordersReducer from './orders/ordersSlice';




const reducers = combineReducers({
 
  categories: categoriesReducer,
  products: productsReducer,
  recommended: recommendedReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,

});



const persistConfig = {
  key: 'root',
  storage,
  // STORAGE= permite guardarlo en el local storage
  whitelist: ["cart", "user"]
  // WHITELIST= permite elegir que REDUCERS queremos persistir en el STORAGE, CONO NO QUEREMOS PERSISTIR NADA, LO DEJAMOS VACIO
};



const persistedReducer = persistReducer(persistConfig, reducers);
// PERSISTE LOS REDUCERS en el LocalStorage y RECIBE (Configuracion, Reducers)





export const store = configureStore({

  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false})
   // Esto lo debemos hacer siempre que utilicemos una API ya que Redux no maneja procesamientos de datos externos
});



export const persistor = persistStore(store)
// Permite PERSISTIR LA DATA DEL STORE