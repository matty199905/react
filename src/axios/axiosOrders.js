
import axios from 'axios';
import {
  createOrderFail,
  fetchOrderFail,
  fetchorderStart,
  fetchOrderSuccess,
} from '../redux/orders/ordersSlice';
import { BASE_URL } from '../utils';




//Pasamos el DISPATCH y CURRENTUSER como parametro ya que LOS HOOKS NO SE PUEDEN UTILIZAR FUERA DE UN COMPONENTE 
export const getOrders = async (dispatch, currentUser) => {

  dispatch(fetchorderStart());

  try {
    const orders = await axios.get(`${BASE_URL}/orders`, {
      //le pasamos headers porque asi lo indica la api
      headers: {
        'x-token': currentUser.token,
      },
    });
    if (orders) {
      dispatch(fetchOrderSuccess(orders.data.data));
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchOrderFail('error al cargar las ordenes'))
  }
};



// Obtenemos toda la data del FORM del CHECKOUT

export const createOrder = async (orderData, dispatch, currentUser) => {
  try {
   
const response = await axios.post(`${BASE_URL}/orders`, orderData, {
 headers: {
    "x-token": currentUser.token}
})

    if (response) {
      getOrders(dispatch, currentUser);
    }
  } catch (error) {
   console.log(error);
   
  }
};