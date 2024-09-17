import React from 'react';
import { formatPrice } from '../../../utils';

import CardProductCheckout from '../../CardProductCheckout/CardProductCheckout';

import {
  ProductosContainerStyled,
  ProductsTitleStyled,
  CardsWrapperStyled,
  PriceContainerStyled,
  SubtotalStyled,
  EnvioStyled,
  HrStyled,
  TotalStyled,
  PriceTotalStyled,
} from './ProductsCheckoutStyles';
import { useSelector } from 'react-redux';




const ProductsCheckout = ({ cartItems, SHIPPING_COST, subTotal }) => {



  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu pedido</ProductsTitleStyled>
      <CardsWrapperStyled>
     {
      cartItems.map((item) => {return <CardProductCheckout {...item} key={item.id}/>})
     }
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(subTotal)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(SHIPPING_COST)}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(subTotal + SHIPPING_COST)}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;
