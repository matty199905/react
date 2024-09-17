import React from 'react';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Form } from './CheckoutFormStyles';
import { validationSchema } from '../../../Formik/validationSchema';
import { initialValues } from '../../../Formik/initialState';
import { Formik } from 'formik';
import { createOrder } from '../../../axios/axiosOrders';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../../redux/cart/cartSlice';


const CheckoutForm = ({ cartItems, shippingCost, price }) => {


  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.user);

  const navigate = useNavigate();

  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {

          const orderData = {
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: { ...values },
            items: cartItems,
          };

          try {

            await createOrder(orderData, dispatch, currentUser);
            navigate('/felicitaciones');
            dispatch(clearCart());

          } catch (error) {
            alert('Error al crear la orden');
          }
        }}
      >
        <Form>
          <Input
            htmlFor='nombre'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
            name='name'
          >
            Nombre
          </Input>

          <Input
            htmlFor='celular'
            type='text'
            id='celular'
            placeholder='Tu celular'
            name='cellphone'
          >
            Celular
          </Input>

          <Input
            htmlFor='localidad'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
            name='location'
          >
            Localidad
          </Input>

          <Input
            htmlFor='direccion'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
            name='adress'
          >
            Dirección
          </Input>


          <Submit disabled={!cartItems.length}>Iniciar Pedido</Submit>


        </Form>

      </Formik>

    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
