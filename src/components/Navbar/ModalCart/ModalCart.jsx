import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { formatPrice } from '../../../utils';

import Submit from '../../UI/Submit/Submit';
import Increase from '../../UI/Increase/Increase';
import ModalCartCard from './ModalCartCard';

import {
  ButtonContainerStyled,
  MainContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from './ModalCartStyles';
import { ModalOverlayStyled } from '../NavbarStyles';

import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleCart } from '../../../redux/cart/cartSlice';


const ModalCart = () => {


  const dispatch = useDispatch();

  const hiddenCart = useSelector(state => state.cart.hidden);
  const { cartItems, SHIPPING_COST } = useSelector(state => state.cart)

  const navigate = useNavigate();



  const subTotalPrice = cartItems.reduce((acc, product) => { return acc += product.price * product.quantity }, 0)



  const totalPrice = Number(subTotalPrice + SHIPPING_COST)



  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className='close__modal '
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleCart())}
              >
                <MdOutlineClose size='24px' />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>

              <TitleStyled>
                <h1>Tus Productos</h1>
                
                <Increase
                  onClick={()=> dispatch(clearCart())}
                  bgColor='var(--magenta)'
                  disabled={!cartItems.length}
                
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                {
                  cartItems.length ?
                    cartItems.map((product) => { return <ModalCartCard {...product} key={product.id} /> })
                    : <p>El carrito esta vacio</p>
                }
              </ProductsWrapperStyled>

            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(subTotalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(SHIPPING_COST)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>{formatPrice(totalPrice)}</PriceStyled>
              </TotalStyled>

              <ButtonContainerStyled>
                <Submit 
                onClick={() => {navigate('/checkout');
                               dispatch(toggleCart())}
                } 
                disabled={!cartItems.length}
                >
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>

            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
