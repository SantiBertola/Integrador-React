import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion';

import { MdOutlineClose } from 'react-icons/md';
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
  Button,
  Divider
} from './ModalCartStyles';
import { ModalOverlayStyled } from '../NavBarStyled';
import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';


const ModalCart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    cartItems,
    shippingCost,
    hidden: hiddenCart,
  } = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  const handleClick = () => {
    navigate('/checkout');
    dispatch(toggleHiddenCart());
  };


  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
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
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <MdOutlineClose size='24px' />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>TU CARRITO DE COMPRA</h1>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map(item => (
                    <ModalCartCard key={item.id} {...item} />
                  ))
                ) : (
                  <p style={{ color: '#cc564f' }}>El carrito está vacío.</p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{totalPrice}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{shippingCost}</span>
              </EnvioStyled>
              <Divider />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>
                  {totalPrice + shippingCost}
                </PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Button onClick={handleClick} disabled={cartItems.length < 1}>
                  Comprar
                </Button>
                <Button onClick={() => dispatch(clearCart())} disabled={cartItems.length < 1}>
                  Vaciar carrito
                </Button>

              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  )
}

export default ModalCart