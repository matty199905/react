import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import { LinkContainerStyled } from './../NavbarStyles';
import { toggleCart } from '../../../redux/cart/cartSlice';

const CartIcon = () => {

  const dispatch = useDispatch()

  const {cartItems} = useSelector(state => state.cart)




  return (
    <LinkContainerStyled onClick={() => dispatch(toggleCart())}>
      <FaShoppingCart />
      <span>{cartItems.reduce((acc, product) => {return acc += product.quantity},0)}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
