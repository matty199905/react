import React from 'react';

import CheckoutForm from '../../components/Checkout/Form/CheckoutForm';
import ProductsCheckout from '../../components/Checkout/Products/ProductsCheckout';
import { ContainerCheckoutStyled } from '../Checkout/CheckoutStyles';
import { useSelector } from 'react-redux'



const Checkout = () => {

  const { cartItems, SHIPPING_COST } = useSelector(state => state.cart)

  const subTotal = cartItems.reduce((acc, product) => { return acc += product.quantity * product.price }, 0)


  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm 
        cartItems={cartItems}
        shippingCost={SHIPPING_COST}
        price={subTotal}/>
        <ProductsCheckout cartItems={cartItems} SHIPPING_COST={SHIPPING_COST} subTotal={subTotal} />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;
