import React from 'react';
import { formatPrice } from '../../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cart/cartSlice';

const ModalCartCard = ({img, title, price, desc, id, quantity}) => {

const dispatch = useDispatch()

  return (
    <ProductContainerStyled>

      <img
        src={img}
        alt={title}
      />

      <TextContainerStyled>

        <CardTitleStyled>{title}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>

      </TextContainerStyled>

      <QuantityContainerStyled>

        <Increase

          bgColor='var(--btn-gradient-secondary)'
          onClick={()=> dispatch(removeFromCart(id))}>
          <FaMinus />

        </Increase>

        <Count>{quantity}</Count>

        <Increase onClick={()=> dispatch(addToCart({id, quantity}))}>
          <BsPlusLg />
        </Increase>

      </QuantityContainerStyled>

    </ProductContainerStyled>
  );
};

export default ModalCartCard;
